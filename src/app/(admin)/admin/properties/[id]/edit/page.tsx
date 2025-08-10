'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Save, EyeOff, Globe } from 'lucide-react'
import Link from 'next/link'
import { ImageUpload } from '@/components/ImageUpload'

const propertySchema = z.object({
  type: z.enum(['detached', 'condominium', 'land']),
  name: z.string().min(1, '物件名は必須です'),
  catchCopy: z.string().min(1, 'キャッチコピーは必須です'),
  prefecture: z.string().min(1, '都道府県は必須です'),
  city: z.string().min(1, '市区町村は必須です'),
  address: z.string().min(1, '住所は必須です'),
  price: z.string().min(1, '価格は必須です'),
  priceNote: z.string().optional(),
  status: z.enum(['draft', 'published']),
  // 物件タイプ別の詳細情報
  landArea: z.string().optional(),
  buildingArea: z.string().optional(),
  layout: z.string().optional(),
  builtYear: z.string().optional(),
  structure: z.string().optional(),
  floors: z.string().optional(),
  parking: z.string().optional(),
  buildingName: z.string().optional(),
  roomNumber: z.string().optional(),
  exclusiveArea: z.string().optional(),
  balconyArea: z.string().optional(),
  floor: z.string().optional(),
  direction: z.string().optional(),
  totalUnits: z.string().optional(),
  managementFee: z.string().optional(),
  repairReserve: z.string().optional(),
  unitPrice: z.string().optional(),
  landCategory: z.string().optional(),
  buildingCoverageRatio: z.string().optional(),
  floorAreaRatio: z.string().optional(),
  buildingConditions: z.string().optional(),
  rights: z.string().optional(),
  zoning: z.string().optional(),
  topo: z.string().optional(),
  // 関連情報
  stations: z.array(z.object({
    name: z.string().min(1, '駅名は必須です'),
    distance: z.string().min(1, '距離は必須です'),
    walkTime: z.string().min(1, '徒歩時間は必須です')
  })),
  features: z.array(z.object({
    category: z.string().min(1, 'カテゴリは必須です'),
    key: z.string().min(1, '項目名は必須です'),
    value: z.string().min(1, '値は必須です')
  })),
  images: z.array(z.object({
    id: z.string(),
    url: z.string(),
    publicId: z.string(),
    kind: z.enum(['photo', 'floorplan', 'document']),
    order: z.number()
  }))
})

type PropertyFormValues = z.infer<typeof propertySchema>

interface Property {
  id: string
  type: 'detached' | 'condominium' | 'land'
  name: string
  catchCopy: string
  prefecture: string
  city: string
  address: string
  price: number
  priceNote?: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
  landArea?: string
  buildingArea?: string
  layout?: string
  builtYear?: string
  structure?: string
  floors?: string
  parking?: string
  buildingName?: string
  roomNumber?: string
  exclusiveArea?: string
  balconyArea?: string
  floor?: string
  direction?: string
  totalUnits?: string
  managementFee?: string
  repairReserve?: string
  unitPrice?: string
  landCategory?: string
  buildingCoverageRatio?: string
  floorAreaRatio?: string
  buildingConditions?: string
  rights?: string
  zoning?: string
  topo?: string
  stations: Array<{ name: string; distance: string; walkTime: string }>
  features: Array<{ category: string; key: string; value: string }>
  images: Array<{ id: string; url: string; publicId: string; kind: string; order: number }>
}

export default function EditPropertyPage() {
  const params = useParams()
  const router = useRouter()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      type: 'detached',
      name: '',
      catchCopy: '',
      prefecture: '',
      city: '',
      address: '',
      price: '',
      priceNote: '',
      status: 'draft',
      stations: [{ name: '', distance: '', walkTime: '' }],
      features: [],
      images: []
    }
  })

  const { fields: stationFields, append: appendStation, remove: removeStation } = useFieldArray({
    control: form.control,
    name: 'stations'
  })

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features'
  })



  // 物件データを取得
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setProperty(data)
          form.reset({
            ...data,
            price: data.price.toString()
          })
        }
      } catch (error) {
        console.error('Error fetching property:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProperty()
    }
  }, [params.id, form])

  // ステータス変更
  const updateStatus = async (newStatus: 'draft' | 'published') => {
    setUpdatingStatus(true)
    try {
      const response = await fetch(`/api/properties/${params.id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        form.setValue('status', newStatus)
        setProperty(prev => prev ? { ...prev, status: newStatus } : null)
      } else {
        console.error('Failed to update status')
      }
    } catch (error) {
      console.error('Error updating status:', error)
    } finally {
      setUpdatingStatus(false)
    }
  }

  // 物件削除
  const handleDelete = async () => {
    setDeleting(true)
    try {
      const response = await fetch(`/api/properties/${params.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.push('/admin/properties')
      } else {
        console.error('Failed to delete property')
      }
    } catch (error) {
      console.error('Error deleting property:', error)
    } finally {
      setDeleting(false)
    }
  }

  // フォーム送信
  const onSubmit = async (values: PropertyFormValues) => {
    setSaving(true)
    try {
      const response = await fetch(`/api/properties/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          price: parseInt(values.price)
        }),
      })

      if (response.ok) {
        router.push('/admin/properties')
      } else {
        console.error('Failed to update property')
      }
    } catch (error) {
      console.error('Error updating property:', error)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">読み込み中...</div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">物件が見つかりませんでした</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/properties">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                戻る
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">物件編集</h1>
              <p className="text-sm text-gray-600">物件ID: {property.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant={property.status === 'published' ? 'default' : 'secondary'}>
              {property.status === 'published' ? '公開中' : '下書き'}
            </Badge>
            {property.status === 'draft' ? (
              <Button
                variant="outline"
                onClick={() => updateStatus('published')}
                disabled={updatingStatus}
                className="text-green-600 hover:text-green-700"
              >
                <Globe className="h-4 w-4 mr-2" />
                公開する
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => updateStatus('draft')}
                disabled={updatingStatus}
                className="text-orange-600 hover:text-orange-700"
              >
                <EyeOff className="h-4 w-4 mr-2" />
                下書きに戻す
              </Button>
            )}
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
              className="text-white"
            >
              {deleting ? '削除中...' : '削除'}
            </Button>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs defaultValue="common" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="common">共通情報</TabsTrigger>
              <TabsTrigger value="specific">物件詳細</TabsTrigger>
              <TabsTrigger value="features">特徴・設備</TabsTrigger>
              <TabsTrigger value="images">画像</TabsTrigger>
              <TabsTrigger value="confirm">確認</TabsTrigger>
            </TabsList>

            {/* 共通情報 */}
            <TabsContent value="common" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>基本情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="type">物件タイプ</Label>
                      <Select onValueChange={(value) => form.setValue('type', value as 'detached' | 'condominium' | 'land')} value={form.watch('type')}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="detached">戸建て</SelectItem>
                          <SelectItem value="condominium">マンション</SelectItem>
                          <SelectItem value="land">土地</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="status">ステータス</Label>
                      <Select onValueChange={(value) => form.setValue('status', value as 'draft' | 'published')} value={form.watch('status')}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">下書き</SelectItem>
                          <SelectItem value="published">公開</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="name">物件名 *</Label>
                    <Input {...form.register('name')} />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="catchCopy">キャッチコピー *</Label>
                    <Input {...form.register('catchCopy')} />
                    {form.formState.errors.catchCopy && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.catchCopy.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="prefecture">都道府県 *</Label>
                      <Input {...form.register('prefecture')} />
                      {form.formState.errors.prefecture && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.prefecture.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="city">市区町村 *</Label>
                      <Input {...form.register('city')} />
                      {form.formState.errors.city && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="address">住所 *</Label>
                      <Input {...form.register('address')} />
                      {form.formState.errors.address && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">価格 *</Label>
                      <Input {...form.register('price')} placeholder="例: 35000000" />
                      {form.formState.errors.price && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.price.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="priceNote">価格備考</Label>
                      <Input {...form.register('priceNote')} placeholder="例: 税込" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 物件詳細 */}
            <TabsContent value="specific" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>物件詳細情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {form.watch('type') === 'detached' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="landArea">土地面積</Label>
                        <Input {...form.register('landArea')} placeholder="㎡" />
                      </div>
                      <div>
                        <Label htmlFor="buildingArea">建物面積</Label>
                        <Input {...form.register('buildingArea')} placeholder="㎡" />
                      </div>
                      <div>
                        <Label htmlFor="layout">間取り</Label>
                        <Input {...form.register('layout')} placeholder="例: 3LDK" />
                      </div>
                      <div>
                        <Label htmlFor="builtYear">築年数</Label>
                        <Input {...form.register('builtYear')} placeholder="例: 2024" />
                      </div>
                      <div>
                        <Label htmlFor="structure">構造</Label>
                        <Input {...form.register('structure')} placeholder="例: 木造" />
                      </div>
                      <div>
                        <Label htmlFor="floors">階数</Label>
                        <Input {...form.register('floors')} placeholder="例: 2階建て" />
                      </div>
                      <div>
                        <Label htmlFor="parking">駐車場</Label>
                        <Input {...form.register('parking')} placeholder="例: 2台" />
                      </div>
                    </div>
                  )}

                  {form.watch('type') === 'condominium' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="buildingName">建物名</Label>
                        <Input {...form.register('buildingName')} />
                      </div>
                      <div>
                        <Label htmlFor="roomNumber">部屋番号</Label>
                        <Input {...form.register('roomNumber')} />
                      </div>
                      <div>
                        <Label htmlFor="exclusiveArea">専有面積</Label>
                        <Input {...form.register('exclusiveArea')} placeholder="㎡" />
                      </div>
                      <div>
                        <Label htmlFor="balconyArea">バルコニー面積</Label>
                        <Input {...form.register('balconyArea')} placeholder="㎡" />
                      </div>
                      <div>
                        <Label htmlFor="floor">階数</Label>
                        <Input {...form.register('floor')} placeholder="例: 5階" />
                      </div>
                      <div>
                        <Label htmlFor="direction">向き</Label>
                        <Input {...form.register('direction')} placeholder="例: 南向き" />
                      </div>
                      <div>
                        <Label htmlFor="totalUnits">総戸数</Label>
                        <Input {...form.register('totalUnits')} />
                      </div>
                      <div>
                        <Label htmlFor="managementFee">管理費</Label>
                        <Input {...form.register('managementFee')} placeholder="例: 15,000円" />
                      </div>
                      <div>
                        <Label htmlFor="repairReserve">修繕積立金</Label>
                        <Input {...form.register('repairReserve')} placeholder="例: 20,000円" />
                      </div>
                    </div>
                  )}

                  {form.watch('type') === 'land' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="landArea">土地面積</Label>
                        <Input {...form.register('landArea')} placeholder="㎡" />
                      </div>
                      <div>
                        <Label htmlFor="unitPrice">坪単価</Label>
                        <Input {...form.register('unitPrice')} placeholder="例: 50万円" />
                      </div>
                      <div>
                        <Label htmlFor="landCategory">地目</Label>
                        <Input {...form.register('landCategory')} placeholder="例: 宅地" />
                      </div>
                      <div>
                        <Label htmlFor="buildingCoverageRatio">建蔽率</Label>
                        <Input {...form.register('buildingCoverageRatio')} placeholder="例: 60%" />
                      </div>
                      <div>
                        <Label htmlFor="floorAreaRatio">容積率</Label>
                        <Input {...form.register('floorAreaRatio')} placeholder="例: 200%" />
                      </div>
                      <div>
                        <Label htmlFor="buildingConditions">建物条件</Label>
                        <Input {...form.register('buildingConditions')} placeholder="例: 更地" />
                      </div>
                      <div>
                        <Label htmlFor="rights">権利</Label>
                        <Input {...form.register('rights')} placeholder="例: 所有権" />
                      </div>
                      <div>
                        <Label htmlFor="zoning">用途地域</Label>
                        <Input {...form.register('zoning')} placeholder="例: 第一種低層住居専用地域" />
                      </div>
                      <div>
                        <Label htmlFor="topo">地形</Label>
                        <Input {...form.register('topo')} placeholder="例: 平坦" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* 特徴・設備 */}
            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>最寄り駅</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stationFields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>駅名</Label>
                        <Input {...form.register(`stations.${index}.name`)} />
                      </div>
                      <div>
                        <Label>距離</Label>
                        <Input {...form.register(`stations.${index}.distance`)} placeholder="例: 800m" />
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="flex-1">
                          <Label>徒歩時間</Label>
                          <Input {...form.register(`stations.${index}.walkTime`)} placeholder="例: 10分" />
                        </div>
                        {stationFields.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => removeStation(index)}
                            className="mb-0"
                          >
                            削除
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => appendStation({ name: '', distance: '', walkTime: '' })}
                  >
                    駅を追加
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>特徴・設備</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {featureFields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>カテゴリ</Label>
                        <Input {...form.register(`features.${index}.category`)} placeholder="例: 設備" />
                      </div>
                      <div>
                        <Label>項目名</Label>
                        <Input {...form.register(`features.${index}.key`)} placeholder="例: エアコン" />
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="flex-1">
                          <Label>値</Label>
                          <Input {...form.register(`features.${index}.value`)} placeholder="例: 全室設置" />
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => removeFeature(index)}
                          className="mb-0"
                        >
                          削除
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => appendFeature({ category: '', key: '', value: '' })}
                  >
                    特徴を追加
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 画像 */}
            <TabsContent value="images" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>物件画像</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    images={form.watch('images')}
                    onImagesChange={(newImages) => {
                      form.setValue('images', newImages)
                      // 画像の並替・削除を即座に反映
                      if (property) {
                        setProperty(prev => prev ? { ...prev, images: newImages } : null)
                      }
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 確認 */}
            <TabsContent value="confirm" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>入力内容の確認</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">物件タイプ</Label>
                      <p>{form.watch('type') === 'detached' ? '戸建て' : form.watch('type') === 'condominium' ? 'マンション' : '土地'}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">ステータス</Label>
                      <p>{form.watch('status') === 'draft' ? '下書き' : '公開'}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">物件名</Label>
                      <p>{form.watch('name')}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">キャッチコピー</Label>
                      <p>{form.watch('catchCopy')}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">所在地</Label>
                      <p>{form.watch('prefecture')} {form.watch('city')} {form.watch('address')}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">価格</Label>
                      <p>{form.watch('price')}円 {form.watch('priceNote') && `(${form.watch('priceNote')})`}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="font-semibold">最寄り駅</Label>
                    <div className="mt-2 space-y-2">
                      {form.watch('stations').map((station, index) => (
                        <p key={index}>{station.name} - {station.distance} - 徒歩{station.walkTime}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="font-semibold">特徴・設備</Label>
                    <div className="mt-2 space-y-2">
                      {form.watch('features').map((feature, index) => (
                        <p key={index}>{feature.category}: {feature.key} - {feature.value}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="font-semibold">画像</Label>
                    <div className="mt-2">
                      <p>{form.watch('images').length}枚の画像が登録されています</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* 送信ボタン */}
          <div className="flex justify-end space-x-4 pt-6">
            <Link href="/admin/properties">
              <Button type="button" variant="outline">
                キャンセル
              </Button>
            </Link>
            <Button type="submit" disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? '保存中...' : '保存する'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
