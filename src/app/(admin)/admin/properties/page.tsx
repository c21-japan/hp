'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Filter, Plus, Edit, Eye, Home, Building, MapPin, EyeOff, Globe } from 'lucide-react'
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
  status: string
  type: string
  area: string
  keyword: string
}

const ITEMS_PER_PAGE = 20

export default function AdminPropertiesPage() {
  const router = useRouter()
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState<SearchFilters>({
    status: '',
    type: '',
    area: '',
    keyword: '',
  })
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)

  // 物件データを取得
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties')
        if (response.ok) {
          const data = await response.json()
          setProperties(data)
        }
      } catch (error) {
        console.error('Error fetching properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  // ステータス変更
  const updateStatus = async (propertyId: string, newStatus: 'draft' | 'published') => {
    setUpdatingStatus(propertyId)
    try {
      const response = await fetch(`/api/properties/${propertyId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        // ローカル状態を更新
        setProperties(prev => 
          prev.map(p => 
            p.id === propertyId 
              ? { ...p, status: newStatus, updatedAt: new Date().toISOString() }
              : p
          )
        )
      } else {
        console.error('Failed to update status')
      }
    } catch (error) {
      console.error('Error updating status:', error)
    } finally {
      setUpdatingStatus(null)
    }
  }

  // フィルタリング
  useEffect(() => {
    let filtered = properties

    // ステータスフィルター
    if (filters.status) {
      filtered = filtered.filter(property => property.status === filters.status)
    }

    // 種別フィルター
    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type)
    }

    // エリアフィルター
    if (filters.area) {
      filtered = filtered.filter(property => 
        property.prefecture === filters.area || 
        property.city.includes(filters.area)
      )
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

  // フィルターをリセット
  const resetFilters = () => {
    setFilters({
      status: '',
      type: '',
      area: '',
      keyword: '',
    })
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

  const getStatusBadge = (status: string) => {
    if (status === 'draft') {
      return <Badge variant="destructive" className="font-bold">下書き</Badge>
    }
    return <Badge variant="default">公開</Badge>
  }

  const formatPrice = (price: number) => {
    if (price >= 10000) {
      return `${(price / 10000).toLocaleString()}万円`
    }
    return `${price.toLocaleString()}円`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP')
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">読み込み中...</div>
      </div>
    )
  }

  const draftCount = properties.filter(p => p.status === 'draft').length
  const publishedCount = properties.filter(p => p.status === 'published').length

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">物件管理</h1>
            <p className="text-gray-600 mt-2">物件の一覧・編集・管理を行います</p>
          </div>
          <Link href="/admin/properties/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              新規作成
            </Button>
          </Link>
        </div>

        {/* 統計カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">総物件数</p>
                  <p className="text-3xl font-bold">{properties.length}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">下書き</p>
                  <p className="text-3xl font-bold text-orange-600">{draftCount}</p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Badge variant="secondary" className="text-orange-600">下書き</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">公開中</p>
                  <p className="text-3xl font-bold text-green-600">{publishedCount}</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Badge variant="default" className="text-green-600">公開</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 検索フィルター */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              検索条件
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <Label htmlFor="status">ステータス</Label>
                <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="すべて" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">すべて</SelectItem>
                    <SelectItem value="draft">下書き</SelectItem>
                    <SelectItem value="published">公開</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">種別</Label>
                <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="すべて" />
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
                <Label htmlFor="area">エリア</Label>
                <Select value={filters.area} onValueChange={(value) => setFilters(prev => ({ ...prev, area: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="すべて" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">すべて</SelectItem>
                    <SelectItem value="奈良県">奈良県</SelectItem>
                    <SelectItem value="大阪府">大阪府</SelectItem>
                  </SelectContent>
                </Select>
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
                <Button variant="outline" onClick={resetFilters} className="flex-1">
                  リセット
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 検索結果 */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProperties.length}件の物件が見つかりました
          </p>
        </div>

        {/* 物件一覧テーブル */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ステータス</TableHead>
                  <TableHead>物件情報</TableHead>
                  <TableHead>種別</TableHead>
                  <TableHead>価格</TableHead>
                  <TableHead>所在地</TableHead>
                  <TableHead>更新日</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProperties.map((property) => (
                  <TableRow 
                    key={property.id} 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => router.push(`/admin/properties/${property.id}/edit`)}
                  >
                    <TableCell>
                      {getStatusBadge(property.status)}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{property.name}</div>
                        <div className="text-sm text-gray-600 line-clamp-1">{property.catchCopy}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(property.type)}
                        <span>{getTypeLabel(property.type)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-blue-600">
                        {formatPrice(property.price)}
                      </div>
                      {property.priceNote && (
                        <div className="text-xs text-gray-500">{property.priceNote}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{property.prefecture} {property.city}</div>
                        <div className="text-gray-600 line-clamp-1">{property.address}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-600">
                        {formatDate(property.updatedAt)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link href={`/admin/properties/${property.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/properties/${property.id}`} target="_blank">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        {property.status === 'draft' ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateStatus(property.id, 'published')}
                            disabled={updatingStatus === property.id}
                            className="text-green-600 hover:text-green-700"
                          >
                            <Globe className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateStatus(property.id, 'draft')}
                            disabled={updatingStatus === property.id}
                            className="text-orange-600 hover:text-orange-700"
                          >
                            <EyeOff className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

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
