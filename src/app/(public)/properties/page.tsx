'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Download, Filter, Home, Building, MapPin } from 'lucide-react'
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

interface SearchFilters {
  area: string
  type: string
  priceMin: string
  priceMax: string
  keyword: string
}

const ITEMS_PER_PAGE = 12

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState<SearchFilters>({
    area: searchParams.get('area') || '',
    type: searchParams.get('type') || '',
    priceMin: searchParams.get('priceMin') || '',
    priceMax: searchParams.get('priceMax') || '',
    keyword: searchParams.get('keyword') || '',
  })

  // 物件データを取得
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties?status=published')
        if (response.ok) {
          const data = await response.json()
          // publishedステータスの物件のみを確実にフィルタリング
          const publishedProperties = data.filter((property: Property) => property.status === 'published')
          setProperties(publishedProperties)
        }
      } catch (error) {
        console.error('Error fetching properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  // フィルタリングとページング
  useEffect(() => {
    let filtered = properties.filter(property => property.status === 'published')

    // エリアフィルター
    if (filters.area) {
      filtered = filtered.filter(property => 
        property.prefecture === filters.area || 
        property.city.includes(filters.area)
      )
    }

    // 種別フィルター
    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type)
    }

    // 価格フィルター
    if (filters.priceMin) {
      const minPrice = parseInt(filters.priceMin) * 10000
      filtered = filtered.filter(property => property.price >= minPrice)
    }
    if (filters.priceMax) {
      const maxPrice = parseInt(filters.priceMax) * 10000
      filtered = filtered.filter(property => property.price <= maxPrice)
    }

    // キーワードフィルター
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase()
      filtered = filtered.filter(property =>
        property.name.toLowerCase().includes(keyword) ||
        property.catchCopy.toLowerCase().includes(keyword) ||
        property.address.toLowerCase().includes(keyword)
      )
    }

    setFilteredProperties(filtered)
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE))
    setCurrentPage(1)
  }, [properties, filters])

  // 現在のページの物件を取得
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // フィルターを適用
  const applyFilters = () => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    router.push(`/properties?${params.toString()}`)
  }

  // フィルターをリセット
  const resetFilters = () => {
    setFilters({
      area: '',
      type: '',
      priceMin: '',
      priceMax: '',
      keyword: '',
    })
    router.push('/properties')
  }

  // CSVエクスポート
  const exportToCSV = () => {
    const headers = [
      '物件ID', '物件タイプ', '物件名', 'キャッチコピー', '都道府県', '市区町村', '住所',
      '価格', '価格備考', '土地面積', '建物面積', '間取り', '築年', '構造', '階数',
      '駐車場', '建物名', '部屋番号', '専有面積', 'バルコニー面積', '階', '向き',
      '総戸数', '管理費', '修繕積立金', '坪単価', '土地種別', '建蔽率', '容積率',
      '建物条件', '権利', '用途地域', '地形・地質', '最寄り駅', '特徴・設備'
    ]

    const csvContent = [
      headers.join(','),
      ...filteredProperties.map(property => [
        property.id,
        property.type === 'detached' ? '戸建て' : property.type === 'condominium' ? 'マンション' : '土地',
        `"${property.name}"`,
        `"${property.catchCopy}"`,
        property.prefecture,
        property.city,
        `"${property.address}"`,
        property.price.toLocaleString(),
        `"${property.priceNote || ''}"`,
        property.landArea || '',
        property.buildingArea || '',
        property.layout || '',
        property.builtYear || '',
        property.structure || '',
        property.floors || '',
        property.parking || '',
        property.buildingName || '',
        property.roomNumber || '',
        property.exclusiveArea || '',
        property.balconyArea || '',
        property.floor || '',
        property.direction || '',
        property.totalUnits || '',
        property.managementFee || '',
        property.repairReserve || '',
        property.unitPrice || '',
        property.landCategory || '',
        property.buildingCoverageRatio || '',
        property.floorAreaRatio || '',
        property.buildingConditions || '',
        property.rights || '',
        property.zoning || '',
        property.topo || '',
        property.stations.map(s => `${s.name}(${s.distance})`).join(';'),
        property.features.map(f => `${f.category}:${f.key}=${f.value}`).join(';')
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `properties_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  // Excelエクスポート
  const exportToExcel = async () => {
    const XLSX = await import('xlsx')
    
    const worksheet = XLSX.utils.json_to_sheet(
      filteredProperties.map(property => ({
        '物件ID': property.id,
        '物件タイプ': property.type === 'detached' ? '戸建て' : property.type === 'condominium' ? 'マンション' : '土地',
        '物件名': property.name,
        'キャッチコピー': property.catchCopy,
        '都道府県': property.prefecture,
        '市区町村': property.city,
        '住所': property.address,
        '価格': property.price,
        '価格備考': property.priceNote || '',
        '土地面積': property.landArea || '',
        '建物面積': property.buildingArea || '',
        '間取り': property.layout || '',
        '築年': property.builtYear || '',
        '構造': property.structure || '',
        '階数': property.floors || '',
        '駐車場': property.parking || '',
        '建物名': property.buildingName || '',
        '部屋番号': property.roomNumber || '',
        '専有面積': property.exclusiveArea || '',
        'バルコニー面積': property.balconyArea || '',
        '階': property.floor || '',
        '向き': property.direction || '',
        '総戸数': property.totalUnits || '',
        '管理費': property.managementFee || '',
        '修繕積立金': property.repairReserve || '',
        '坪単価': property.unitPrice || '',
        '土地種別': property.landCategory || '',
        '建蔽率': property.buildingCoverageRatio || '',
        '容積率': property.floorAreaRatio || '',
        '建物条件': property.buildingConditions || '',
        '権利': property.rights || '',
        '用途地域': property.zoning || '',
        '地形・地質': property.topo || '',
        '最寄り駅': property.stations.map(s => `${s.name}(${s.distance})`).join(';'),
        '特徴・設備': property.features.map(f => `${f.category}:${f.key}=${f.value}`).join(';')
      }))
    )

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, '物件一覧')
    
    XLSX.writeFile(workbook, `properties_${new Date().toISOString().split('T')[0]}.xlsx`)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'detached': return <Home className="h-4 w-4" />
      case 'condominium': return <Building className="h-4 w-4" />
      case 'land': return <MapPin className="h-4 w-4" />
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

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">読み込み中...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">物件一覧</h1>

        {/* 検索フィルター */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              検索条件
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div>
                <Label htmlFor="area">エリア</Label>
                <Select value={filters.area} onValueChange={(value) => setFilters(prev => ({ ...prev, area: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">すべて</SelectItem>
                    <SelectItem value="奈良県">奈良県</SelectItem>
                    <SelectItem value="大阪府">大阪府</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">種別</Label>
                <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">すべて</SelectItem>
                    <SelectItem value="detached">戸建て</SelectItem>
                    <SelectItem value="condominium">マンション</SelectItem>
                    <SelectItem value="land">土地</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="priceMin">価格下限</Label>
                <Input
                  placeholder="万円"
                  value={filters.priceMin}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceMin: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="priceMax">価格上限</Label>
                <Input
                  placeholder="万円"
                  value={filters.priceMax}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceMax: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="keyword">キーワード</Label>
                <Input
                  placeholder="物件名、住所など"
                  value={filters.keyword}
                  onChange={(e) => setFilters(prev => ({ ...prev, keyword: e.target.value }))}
                />
              </div>

              <div className="flex items-end gap-2">
                <Button onClick={applyFilters} className="flex-1">
                  <Search className="h-4 w-4 mr-2" />
                  検索
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                  リセット
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 検索結果とエクスポート */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-600">
              {filteredProperties.length}件の物件が見つかりました
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={exportToCSV}>
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
            <Button variant="outline" onClick={exportToExcel}>
              <Download className="h-4 w-4 mr-2" />
              Excel
            </Button>
          </div>
        </div>

        {/* 物件一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProperties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {getTypeIcon(property.type)}
                    <Badge variant="secondary">{getTypeLabel(property.type)}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                    <Link href={`/properties/${property.id}`} className="hover:text-blue-600">
                      {property.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{property.catchCopy}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{property.prefecture} {property.city}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {formatPrice(property.price)}
                  </div>
                  {property.priceNote && (
                    <p className="text-xs text-gray-500">{property.priceNote}</p>
                  )}
                </div>

                {property.stations.length > 0 && (
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-gray-500 mb-1">最寄り駅</p>
                    <div className="space-y-1">
                      {property.stations.slice(0, 2).map((station, index) => (
                        <p key={index} className="text-xs">
                          {station.name} 徒歩{station.walkTime}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ページネーション */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                前へ
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                次へ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
