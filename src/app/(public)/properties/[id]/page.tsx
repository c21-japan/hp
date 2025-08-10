'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Home, Building, MapPin, Train, Star, ArrowLeft, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

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
  // 物件タイプ別の詳細情報
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
  // 関連情報
  stations: Array<{ name: string; distance: string; walkTime: string }>
  features: Array<{ category: string; key: string; value: string }>
  images: Array<{ url: string; kind: string; order: number }>
}

export default function PropertyDetailPage() {
  const params = useParams()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          // publishedステータスの物件のみ表示、draftは404
          if (data.status === 'published') {
            setProperty(data)
          } else {
            setProperty(null) // draftの場合はnullにして404表示
          }
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
  }, [params.id])

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'detached': return <Home className="h-5 w-5" />
      case 'condominium': return <Building className="h-5 w-5" />
      case 'land': return <MapPin className="h-5 w-5" />
      default: return null
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'detached': return '戸建て'
      case 'condominium': return 'マンション'
      case 'land': return '土地'
      default: return type
    }
  }

  const formatPrice = (price: number) => {
    if (price >= 10000) {
      return `${(price / 10000).toLocaleString()}万円`
    }
    return `${price.toLocaleString()}円`
  }



  const photoImages = property.images.filter(img => img.kind === 'photo').sort((a, b) => a.order - b.order)
  const floorplanImages = property.images.filter(img => img.kind === 'floorplan').sort((a, b) => a.order - b.order)
  const documentImages = property.images.filter(img => img.kind === 'document').sort((a, b) => a.order - b.order)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 戻るボタン */}
        <div className="mb-6">
          <Link href="/properties">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              物件一覧に戻る
            </Button>
          </Link>
        </div>

        {/* ヘッダー情報 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            {getTypeIcon(property.type)}
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {getTypeLabel(property.type)}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">{property.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{property.catchCopy}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {formatPrice(property.price)}
              </div>
              {property.priceNote && (
                <p className="text-sm text-gray-600">{property.priceNote}</p>
              )}
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">所在地</div>
              <p className="text-gray-600">
                {property.prefecture} {property.city}
              </p>
              <p className="text-gray-600">{property.address}</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">最寄り駅</div>
              {property.stations.length > 0 ? (
                <div className="space-y-1">
                  {property.stations.slice(0, 2).map((station, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {station.name} 徒歩{station.walkTime}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">情報なし</p>
              )}
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム：画像ギャラリー */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>画像ギャラリー</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="photos" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="photos">写真 ({photoImages.length})</TabsTrigger>
                    <TabsTrigger value="floorplans">間取り図 ({floorplanImages.length})</TabsTrigger>
                    <TabsTrigger value="documents">書類 ({documentImages.length})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="photos" className="mt-6">
                    {photoImages.length > 0 ? (
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={photoImages[selectedImageIndex]?.url}
                            alt="メイン画像"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {photoImages.length > 1 && (
                          <div className="grid grid-cols-6 gap-2">
                            {photoImages.map((image, index) => (
                              <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}
                                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                                  index === selectedImageIndex ? 'border-blue-500' : 'border-gray-200'
                                }`}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={image.url}
                                  alt={`写真 ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        写真がありません
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="floorplans" className="mt-6">
                    {floorplanImages.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {floorplanImages.map((image, index) => (
                          <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={image.url}
                              alt={`間取り図 ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        間取り図がありません
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="documents" className="mt-6">
                    {documentImages.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {documentImages.map((image, index) => (
                          <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={image.url}
                              alt={`書類 ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        書類がありません
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* 右カラム：詳細情報 */}
          <div className="space-y-6">
            {/* 基本情報 */}
            <Card>
              <CardHeader>
                <CardTitle>基本情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">物件タイプ:</span>
                    <br />
                    <span className="text-gray-600">{getTypeLabel(property.type)}</span>
                  </div>
                  <div>
                    <span className="font-medium">価格:</span>
                    <br />
                    <span className="text-blue-600 font-semibold">{formatPrice(property.price)}</span>
                  </div>
                  {property.landArea && (
                    <div>
                      <span className="font-medium">土地面積:</span>
                      <br />
                      <span className="text-gray-600">{property.landArea}</span>
                    </div>
                  )}
                  {property.buildingArea && (
                    <div>
                      <span className="font-medium">建物面積:</span>
                      <br />
                      <span className="text-gray-600">{property.buildingArea}</span>
                    </div>
                  )}
                  {property.layout && (
                    <div>
                      <span className="font-medium">間取り:</span>
                      <br />
                      <span className="text-gray-600">{property.layout}</span>
                    </div>
                  )}
                  {property.builtYear && (
                    <div>
                      <span className="font-medium">築年:</span>
                      <br />
                      <span className="text-gray-600">{property.builtYear}</span>
                    </div>
                  )}
                  {property.structure && (
                    <div>
                      <span className="font-medium">構造:</span>
                      <br />
                      <span className="text-gray-600">{property.structure}</span>
                    </div>
                  )}
                  {property.floors && (
                    <div>
                      <span className="font-medium">階数:</span>
                      <br />
                      <span className="text-gray-600">{property.floors}</span>
                    </div>
                  )}
                  {property.parking && (
                    <div>
                      <span className="font-medium">駐車場:</span>
                      <br />
                      <span className="text-gray-600">{property.parking}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* マンション専用情報 */}
            {property.type === 'condominium' && (
              <Card>
                <CardHeader>
                  <CardTitle>マンション情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {property.buildingName && (
                      <div>
                        <span className="font-medium">建物名:</span>
                        <br />
                        <span className="text-gray-600">{property.buildingName}</span>
                      </div>
                    )}
                    {property.roomNumber && (
                      <div>
                        <span className="font-medium">部屋番号:</span>
                        <br />
                        <span className="text-gray-600">{property.roomNumber}</span>
                      </div>
                    )}
                    {property.exclusiveArea && (
                      <div>
                        <span className="font-medium">専有面積:</span>
                        <br />
                        <span className="text-gray-600">{property.exclusiveArea}</span>
                      </div>
                    )}
                    {property.balconyArea && (
                      <div>
                        <span className="font-medium">バルコニー面積:</span>
                        <br />
                        <span className="text-gray-600">{property.balconyArea}</span>
                      </div>
                    )}
                    {property.floor && (
                      <div>
                        <span className="font-medium">階:</span>
                        <br />
                        <span className="text-gray-600">{property.floor}</span>
                      </div>
                    )}
                    {property.direction && (
                      <div>
                        <span className="font-medium">向き:</span>
                        <br />
                        <span className="text-gray-600">{property.direction}</span>
                      </div>
                    )}
                    {property.totalUnits && (
                      <div>
                        <span className="font-medium">総戸数:</span>
                        <br />
                        <span className="text-gray-600">{property.totalUnits}</span>
                      </div>
                    )}
                    {property.managementFee && (
                      <div>
                        <span className="font-medium">管理費:</span>
                        <br />
                        <span className="text-gray-600">{property.managementFee}</span>
                      </div>
                    )}
                    {property.repairReserve && (
                      <div>
                        <span className="font-medium">修繕積立金:</span>
                        <br />
                        <span className="text-gray-600">{property.repairReserve}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 土地専用情報 */}
            {property.type === 'land' && (
              <Card>
                <CardHeader>
                  <CardTitle>土地情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {property.unitPrice && (
                      <div>
                        <span className="font-medium">坪単価:</span>
                        <br />
                        <span className="text-gray-600">{property.unitPrice}</span>
                      </div>
                    )}
                    {property.landCategory && (
                      <div>
                        <span className="font-medium">土地種別:</span>
                        <br />
                        <span className="text-gray-600">{property.landCategory}</span>
                      </div>
                    )}
                    {property.buildingCoverageRatio && (
                      <div>
                        <span className="font-medium">建蔽率:</span>
                        <br />
                        <span className="text-gray-600">{property.buildingCoverageRatio}</span>
                      </div>
                    )}
                    {property.floorAreaRatio && (
                      <div>
                        <span className="font-medium">容積率:</span>
                        <br />
                        <span className="text-gray-600">{property.floorAreaRatio}</span>
                      </div>
                    )}
                    {property.buildingConditions && (
                      <div>
                        <span className="font-medium">建物条件:</span>
                        <br />
                        <span className="text-gray-600">{property.buildingConditions}</span>
                      </div>
                    )}
                    {property.rights && (
                      <div>
                        <span className="font-medium">権利:</span>
                        <br />
                        <span className="text-gray-600">{property.rights}</span>
                      </div>
                    )}
                    {property.zoning && (
                      <div>
                        <span className="font-medium">用途地域:</span>
                        <br />
                        <span className="text-gray-600">{property.zoning}</span>
                      </div>
                    )}
                    {property.topo && (
                      <div>
                        <span className="font-medium">地形・地質:</span>
                        <br />
                        <span className="text-gray-600">{property.topo}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 特徴・設備 */}
            {property.features.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>特徴・設備</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">
                          <span className="font-medium">{feature.category}:</span>{' '}
                          <span className="text-gray-600">{feature.key} = {feature.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 最寄り駅 */}
            {property.stations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="h-5 w-5" />
                    最寄り駅
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {property.stations.map((station, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{station.name}</span>
                        <div className="text-sm text-gray-600">
                          {station.distance} (徒歩{station.walkTime})
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* お問い合わせ */}
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-3">
                  <Button className="w-full flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    お電話でのお問い合わせ
                  </Button>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    メールでのお問い合わせ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
