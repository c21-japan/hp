'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { UploadedImage } from '@/hooks/useCloudinaryUpload'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X, GripVertical } from 'lucide-react'

interface SortableImageItemProps {
  image: UploadedImage
  onDelete: () => void
}

export function SortableImageItem({ image, onDelete }: SortableImageItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const getKindLabel = (kind: string) => {
    switch (kind) {
      case 'photo': return '写真'
      case 'floorplan': return '間取り図'
      case 'document': return '書類'
      default: return kind
    }
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`${isDragging ? 'shadow-lg' : ''}`}
    >
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-100 rounded"
          >
            <GripVertical className="h-4 w-4 text-gray-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {getKindLabel(image.kind)}
              </span>
              <span className="text-xs text-gray-500">順序: {image.order + 1}</span>
            </div>
            
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={`${image.kind} image`}
                className="w-16 h-16 object-cover rounded border"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{image.publicId}</p>
                <p className="text-xs text-gray-500 truncate">{image.url}</p>
              </div>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onDelete}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
