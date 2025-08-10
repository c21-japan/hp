'use client'

import { useState, useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { ImageUpload } from '@/components/ImageUpload'
import { UploadedImage } from '@/hooks/useCloudinaryUpload'
import { AddressInput } from '@/components/AddressInput'
import { StationInput } from '@/components/StationInput'

// 最寄り駅のスキーマ
const stationSchema = z.object({
  name: z.string().min(1, '駅名を入力してください'),
  line: z.string().min(1, '路線名を入力してください'),
  distance: z.string().min(1, '距離を入力してください'),
  walkTime: z.string().min(1, '徒歩時間を入力してください')
})

// 画像のスキーマ
const imageSchema = z.object({
  id: z.string(),
  url: z.string().url('有効なURLを入力してください'),
  publicId: z.string(),
  kind: z.enum(['photo', 'floorplan', 'document']),
  order: z.number().min(0)
})

// 特徴のスキーマ
const featureSchema = z.object({
  category: z.string().min(1, 'カテゴリを選択してください'),
  key: z.string().min(1, '項目を選択してください'),
  value: z.string().min(1, '値を入力してください')
})

// 共通の物件スキーマ
const basePropertySchema = z.object({
  name: z.string().min(1, '物件名を入力してください'),
  catchCopy: z.string().min(1, 'キャッチコピーを入力してください'),
  prefecture: z.string().min(1, '都道府県を選択してください'),
  city: z.string().min(1, '市区町村を選択してください'),
  address: z.string().min(1, '住所を入力してください'),
  price: z.string().min(1, '価格を入力してください'),
  priceNote: z.string().optional(),
  status: z.enum(['draft', 'published']),
  stations: z.array(stationSchema),
  features: z.array(featureSchema),
  images: z.array(imageSchema)
})

// 戸建て専用スキーマ
const detachedHouseSchema = basePropertySchema.extend({
  type: z.literal('detached'),
  landArea: z.string().min(1, '土地面積を入力してください'),
  buildingArea: z.string().min(1, '建物面積を入力してください'),
  layout: z.string().min(1, '間取りを入力してください'),
  builtYear: z.string().min(1, '築年を入力してください'),
  structure: z.string().min(1, '構造を選択してください'),
  floors: z.string().min(1, '階数を入力してください'),
  parking: z.string().optional()
})

// マンション専用スキーマ
const condominiumSchema = basePropertySchema.extend({
  type: z.literal('condominium'),
  buildingName: z.string().min(1, '建物名を入力してください'),
  roomNumber: z.string().min(1, '部屋番号を入力してください'),
  exclusiveArea: z.string().min(1, '専有面積を入力してください'),
  balconyArea: z.string().optional(),
  layout: z.string().min(1, '間取りを入力してください'),
  floor: z.string().min(1, '階を入力してください'),
  direction: z.string().optional(),
  totalUnits: z.string().min(1, '総戸数を入力してください'),
  builtYear: z.string().min(1, '築年を入力してください'),
  structure: z.string().min(1, '構造を選択してください'),
  managementFee: z.string().optional(),
  repairReserve: z.string().optional()
})

// 土地専用スキーマ
const landSchema = basePropertySchema.extend({
  type: z.literal('land'),
  landArea: z.string().min(1, '土地面積を入力してください'),
  unitPrice: z.string().min(1, '坪単価を入力してください'),
  landCategory: z.string().min(1, '土地種別を選択してください'),
  buildingCoverageRatio: z.string().optional(),
  floorAreaRatio: z.string().optional(),
  buildingConditions: z.string().optional(),
  rights: z.string().optional(),
  zoning: z.string().optional(),
  topo: z.string().optional()
})

// 統合スキーマ（discriminated union）
const propertySchema = z.discriminatedUnion('type', [
  detachedHouseSchema,
  condominiumSchema,
  landSchema
])

type PropertyFormValues = z.infer<typeof propertySchema>

const STEPS = [
  { id: 'common', title: '共通情報', description: '基本情報を入力' },
  { id: 'specific', title: '物件詳細', description: '物件タイプ別の詳細情報' },
  { id: 'features', title: '特徴・設備', description: '特徴と設備情報' },
  { id: 'images', title: '画像', description: '物件画像の登録' },
  { id: 'confirm', title: '確認', description: '入力内容の確認' }
]

export default function NewPropertyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

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
      stations: [{ name: '', line: '', distance: '', walkTime: '' }],
      features: [],
              images: [] as UploadedImage[]
    }
  })



  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features'
  })



  // localStorage自動保存
  useEffect(() => {
    const savedData = localStorage.getItem('hm:prop:new')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        form.reset(parsed)
      } catch (error) {
        console.error('Failed to parse saved data:', error)
      }
    }
  }, [form])

  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem('hm:prop:new', JSON.stringify(value))
    })
    return () => subscription.unsubscribe()
  }, [form])

  const onSubmit = async (data: PropertyFormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        localStorage.removeItem('hm:prop:new')
        router.push(`/properties/${result.id}`)
      } else {
        throw new Error('物件の作成に失敗しました')
      }
    } catch (error) {
      console.error('Error creating property:', error)
      alert('物件の作成に失敗しました')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const formatPrice = (value: string) => {
    const num = value.replace(/[^\d]/g, '')
    if (num) {
      return parseInt(num).toLocaleString()
    }
    return ''
  }



  const renderCommonStep = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="type">物件タイプ</Label>
          <Select onValueChange={(value) => form.setValue('type', value as 'detached' | 'condominium' | 'land')} defaultValue={form.getValues('type')}>
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
          <Select onValueChange={(value) => form.setValue('status', value as 'draft' | 'published')} defaultValue={form.getValues('status')}>
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

      <AddressInput
        control={form.control}
        prefectureName="prefecture"
        cityName="city"
        addressName="address"
        setValue={form.setValue}
      />

      <div>
        <Label htmlFor="price">価格 *</Label>
        <Input 
          {...form.register('price')}
          onChange={(e) => {
            const formatted = formatPrice(e.target.value)
            form.setValue('price', formatted)
          }}
          placeholder="例: 3,000万円"
        />
        {form.formState.errors.price && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.price.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="priceNote">価格備考</Label>
        <Textarea {...form.register('priceNote')} />
      </div>

      <StationInput
        control={form.control}
        stationsName="stations"
        prefectureName="prefecture"
      />
    </div>
  )

  const renderSpecificStep = () => {
    const type = form.watch('type')
    
    if (type === 'detached') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="landArea">土地面積 *</Label>
              <Input {...form.register('landArea')} placeholder="例: 150㎡" />
            </div>
            <div>
              <Label htmlFor="buildingArea">建物面積 *</Label>
              <Input {...form.register('buildingArea')} placeholder="例: 100㎡" />
            </div>
          </div>
          <div>
            <Label htmlFor="layout">間取り *</Label>
            <Input {...form.register('layout')} placeholder="例: 3LDK" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="builtYear">築年 *</Label>
              <Input {...form.register('builtYear')} placeholder="例: 2020年" />
            </div>
            <div>
              <Label htmlFor="structure">構造 *</Label>
              <Select onValueChange={(value) => form.setValue('structure', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="木造">木造</SelectItem>
                  <SelectItem value="鉄骨造">鉄骨造</SelectItem>
                  <SelectItem value="RC造">RC造</SelectItem>
                  <SelectItem value="SRC造">SRC造</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="floors">階数 *</Label>
              <Input {...form.register('floors')} placeholder="例: 2階建て" />
            </div>
            <div>
              <Label htmlFor="parking">駐車場</Label>
              <Input {...form.register('parking')} placeholder="例: 2台分" />
            </div>
          </div>
        </div>
      )
    }

    if (type === 'condominium') {
      return (
        <div className="space-y-6">
          <div>
            <Label htmlFor="buildingName">建物名 *</Label>
            <Input {...form.register('buildingName')} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="roomNumber">部屋番号 *</Label>
              <Input {...form.register('roomNumber')} placeholder="例: 1001号室" />
            </div>
            <div>
              <Label htmlFor="exclusiveArea">専有面積 *</Label>
              <Input {...form.register('exclusiveArea')} placeholder="例: 80㎡" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="balconyArea">バルコニー面積</Label>
              <Input {...form.register('balconyArea')} placeholder="例: 10㎡" />
            </div>
            <div>
              <Label htmlFor="layout">間取り *</Label>
              <Input {...form.register('layout')} placeholder="例: 2LDK" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="floor">階 *</Label>
              <Input {...form.register('floor')} placeholder="例: 10階" />
            </div>
            <div>
              <Label htmlFor="direction">向き</Label>
              <Select onValueChange={(value) => form.setValue('direction', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="南">南</SelectItem>
                  <SelectItem value="北">北</SelectItem>
                  <SelectItem value="東">東</SelectItem>
                  <SelectItem value="西">西</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="totalUnits">総戸数 *</Label>
              <Input {...form.register('totalUnits')} placeholder="例: 100戸" />
            </div>
            <div>
              <Label htmlFor="builtYear">築年 *</Label>
              <Input {...form.register('builtYear')} placeholder="例: 2015年" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="structure">構造 *</Label>
              <Select onValueChange={(value) => form.setValue('structure', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RC造">RC造</SelectItem>
                  <SelectItem value="SRC造">SRC造</SelectItem>
                  <SelectItem value="鉄骨造">鉄骨造</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="managementFee">管理費</Label>
              <Input {...form.register('managementFee')} placeholder="例: 15,000円" />
            </div>
          </div>
          <div>
            <Label htmlFor="repairReserve">修繕積立金</Label>
            <Input {...form.register('repairReserve')} placeholder="例: 20,000円" />
          </div>
        </div>
      )
    }

    if (type === 'land') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="landArea">土地面積 *</Label>
              <Input {...form.register('landArea')} placeholder="例: 200㎡" />
            </div>
            <div>
              <Label htmlFor="unitPrice">坪単価 *</Label>
              <Input {...form.register('unitPrice')} placeholder="例: 80万円" />
            </div>
          </div>
          <div>
            <Label htmlFor="landCategory">土地種別 *</Label>
            <Select onValueChange={(value) => form.setValue('landCategory', value)}>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="宅地">宅地</SelectItem>
                <SelectItem value="農地">農地</SelectItem>
                <SelectItem value="商業地">商業地</SelectItem>
                <SelectItem value="工業地">工業地</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="buildingCoverageRatio">建蔽率</Label>
              <Input {...form.register('buildingCoverageRatio')} placeholder="例: 60%" />
            </div>
            <div>
              <Label htmlFor="floorAreaRatio">容積率</Label>
              <Input {...form.register('floorAreaRatio')} placeholder="例: 200%" />
            </div>
          </div>
          <div>
            <Label htmlFor="buildingConditions">建物条件</Label>
            <Textarea {...form.register('buildingConditions')} placeholder="例: 既存建物あり" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="rights">権利</Label>
              <Select onValueChange={(value) => form.setValue('rights', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="所有権">所有権</SelectItem>
                  <SelectItem value="借地権">借地権</SelectItem>
                  <SelectItem value="地上権">地上権</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="zoning">用途地域</Label>
              <Input {...form.register('zoning')} placeholder="例: 第一種低層住居専用地域" />
            </div>
          </div>
          <div>
            <Label htmlFor="topo">地形・地質</Label>
            <Textarea {...form.register('topo')} placeholder="例: 平坦地、地盤良好" />
          </div>
        </div>
      )
    }

    return null
  }

  const renderFeaturesStep = () => (
    <div className="space-y-6">
      <div>
        <Label>特徴・設備</Label>
        {featureFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mt-2">
            <Select onValueChange={(value) => form.setValue(`features.${index}.category`, value)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="カテゴリ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="設備">設備</SelectItem>
                <SelectItem value="特徴">特徴</SelectItem>
                <SelectItem value="周辺環境">周辺環境</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => form.setValue(`features.${index}.key`, value)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="項目" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="エアコン">エアコン</SelectItem>
                <SelectItem value="洗濯機置場">洗濯機置場</SelectItem>
                <SelectItem value="駐車場">駐車場</SelectItem>
                <SelectItem value="バルコニー">バルコニー</SelectItem>
                <SelectItem value="学校">学校</SelectItem>
                <SelectItem value="駅">駅</SelectItem>
                <SelectItem value="スーパー">スーパー</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="値"
              {...form.register(`features.${index}.value`)}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => removeFeature(index)}
            >
              削除
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => appendFeature({ category: '', key: '', value: '' })}
          className="mt-2"
        >
          特徴を追加
        </Button>
      </div>
    </div>
  )

  const renderImagesStep = () => (
    <div className="space-y-6">
      <div>
        <Label>画像</Label>
        <ImageUpload
          images={form.watch('images')}
          onImagesChange={(newImages) => {
            form.setValue('images', newImages)
          }}
        />
      </div>
    </div>
  )

  const renderConfirmStep = () => {
    const data = form.getValues()
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>基本情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>物件タイプ:</strong> {data.type === 'detached' ? '戸建て' : data.type === 'condominium' ? 'マンション' : '土地'}</p>
            <p><strong>物件名:</strong> {data.name}</p>
            <p><strong>キャッチコピー:</strong> {data.catchCopy}</p>
            <p><strong>所在地:</strong> {data.prefecture} {data.city} {data.address}</p>
            <p><strong>価格:</strong> {data.price}</p>
            {data.priceNote && <p><strong>価格備考:</strong> {data.priceNote}</p>}
            <p><strong>ステータス:</strong> {data.status === 'draft' ? '下書き' : '公開'}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>最寄り駅</CardTitle>
          </CardHeader>
          <CardContent>
            {data.stations.map((station, index) => (
              <p key={index}>{station.name} - {station.distance} - 徒歩{station.walkTime}</p>
            ))}
          </CardContent>
        </Card>

        {data.features.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>特徴・設備</CardTitle>
            </CardHeader>
            <CardContent>
              {data.features.map((feature, index) => (
                <p key={index}>{feature.category} - {feature.key}: {feature.value}</p>
              ))}
            </CardContent>
          </Card>
        )}

        {data.images.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>画像</CardTitle>
            </CardHeader>
            <CardContent>
              {data.images.map((image, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={`${image.kind} image`}
                    className="w-16 h-16 object-cover rounded border"
                  />
                  <div>
                    <p className="font-medium">{image.kind === 'photo' ? '写真' : image.kind === 'floorplan' ? '間取り図' : '書類'}</p>
                    <p className="text-sm text-gray-600">順序: {image.order + 1}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderCommonStep()
      case 1:
        return renderSpecificStep()
      case 2:
        return renderFeaturesStep()
      case 3:
        return renderImagesStep()
      case 4:
        return renderConfirmStep()
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">物件登録</h1>

        {/* ステップナビゲーション */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  index <= currentStep 
                    ? 'bg-blue-500 border-blue-500 text-white' 
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                <div className="ml-2">
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* フォーム */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* ナビゲーションボタン */}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              前へ
            </Button>

            {currentStep < STEPS.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!form.formState.isValid}
              >
                次へ
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting || !form.formState.isValid}
              >
                {isSubmitting ? '作成中...' : '物件を作成'}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
