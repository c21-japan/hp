import { useState, useCallback } from 'react'
import { toast } from 'sonner'

export interface UploadedImage {
  id: string
  url: string
  publicId: string
  kind: 'photo' | 'floorplan' | 'document'
  order: number
}

export const useCloudinaryUpload = () => {
  const [isUploading, setIsUploading] = useState(false)

  const uploadImage = useCallback(async (
    file: File,
    kind: 'photo' | 'floorplan' | 'document',
    folder: string = 'properties'
  ): Promise<UploadedImage | null> => {
    setIsUploading(true)
    
    try {
      // 署名を取得
      const timestamp = Math.round(new Date().getTime() / 1000)
      const response = await fetch('/api/cloudinary/signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp, folder }),
      })

      if (!response.ok) {
        throw new Error('署名の取得に失敗しました')
      }

      const { signature, apiKey, cloudName } = await response.json()

      // FormDataを作成
      const formData = new FormData()
      formData.append('file', file)
      formData.append('api_key', apiKey)
      formData.append('timestamp', timestamp.toString())
      formData.append('signature', signature)
      formData.append('folder', folder)

      // Cloudinaryにアップロード
      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      )

      if (!uploadResponse.ok) {
        throw new Error('画像のアップロードに失敗しました')
      }

      const result = await uploadResponse.json()

      const uploadedImage: UploadedImage = {
        id: result.public_id,
        url: result.secure_url,
        publicId: result.public_id,
        kind,
        order: 0,
      }

      toast.success('画像のアップロードが完了しました')
      return uploadedImage

    } catch (error) {
      console.error('Upload error:', error)
      toast.error('画像のアップロードに失敗しました')
      return null
    } finally {
      setIsUploading(false)
    }
  }, [])

  const deleteImage = useCallback(async (publicId: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/cloudinary/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicId }),
      })

      if (!response.ok) {
        throw new Error('画像の削除に失敗しました')
      }

      toast.success('画像を削除しました')
      return true
    } catch (error) {
      console.error('Delete error:', error)
      toast.error('画像の削除に失敗しました')
      return false
    }
  }, [])

  return {
    uploadImage,
    deleteImage,
    isUploading,
  }
}
