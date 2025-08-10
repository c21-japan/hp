'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { UploadedImage } from '@/hooks/useCloudinaryUpload'
import { useCloudinaryUpload } from '@/hooks/useCloudinaryUpload'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload } from 'lucide-react'
import { SortableImageItem } from './SortableImageItem'

interface ImageUploadProps {
  images: UploadedImage[]
  onImagesChange: (images: UploadedImage[]) => void
}

export function ImageUpload({ images, onImagesChange }: ImageUploadProps) {
  const { uploadImage, deleteImage, isUploading } = useCloudinaryUpload()
  const [uploadingKind, setUploadingKind] = useState<'photo' | 'floorplan' | 'document'>('photo')

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      const uploadedImage = await uploadImage(file, uploadingKind)
      if (uploadedImage) {
        const newImage = {
          ...uploadedImage,
          order: images.length,
        }
        onImagesChange([...images, newImage])
      }
    }
  }, [uploadImage, uploadingKind, images, onImagesChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true
  })

  const handleDelete = async (publicId: string) => {
    const success = await deleteImage(publicId)
    if (success) {
      const updatedImages = images.filter(img => img.publicId !== publicId)
      onImagesChange(updatedImages.map((img, index) => ({ ...img, order: index })))
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = images.findIndex(img => img.id === active.id)
      const newIndex = images.findIndex(img => img.id === over?.id)

      const newImages = arrayMove(images, oldIndex, newIndex).map((img, index) => ({
        ...img,
        order: index
      }))
      onImagesChange(newImages)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select value={uploadingKind} onValueChange={(value: 'photo' | 'floorplan' | 'document') => setUploadingKind(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="photo">写真</SelectItem>
            <SelectItem value="floorplan">間取り図</SelectItem>
            <SelectItem value="document">書類</SelectItem>
          </SelectContent>
        </Select>
        
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">
            {isDragActive ? 'ここにドロップしてください' : 'クリックまたはドラッグ&ドロップで画像をアップロード'}
          </p>
          {isUploading && <p className="text-sm text-blue-600 mt-2">アップロード中...</p>}
        </div>
      </div>

      {images.length > 0 && (
        <div>
          <h4 className="font-medium mb-2">アップロード済み画像 ({images.length}件)</h4>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={images.map(img => img.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {images.map((image) => (
                  <SortableImageItem
                    key={image.id}
                    image={image}
                    onDelete={() => handleDelete(image.publicId)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      )}
    </div>
  )
}
