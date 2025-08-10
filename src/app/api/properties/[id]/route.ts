import { NextRequest, NextResponse } from 'next/server'
import { seedData } from '@/lib/seed'
import { rateLimit, getRateLimitInfo } from '@/lib/rate-limit'

// シードデータと既存データを統合
const properties = [
  ...seedData,
  {
    id: '1',
    type: 'detached' as const,
    name: '奈良市の新築戸建て',
    catchCopy: '閑静な住宅街の新築戸建て',
    prefecture: '奈良県',
    city: '奈良市',
    address: '春日野町1-1-1',
    price: 35000000,
    priceNote: '税込',
    status: 'published' as const,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    landArea: '150',
    buildingArea: '120',
    layout: '3LDK',
    builtYear: '2024',
    structure: '木造',
    floors: '2階建て',
    parking: '2台',
    stations: [
      { name: '近鉄奈良駅', distance: '800m', walkTime: '10分' }
    ],
    features: [
      { category: '設備', key: 'エアコン', value: '全室設置' }
    ],
    images: [
      { url: '/api/placeholder/400/300', kind: 'photo', order: 0 }
    ]
  },
  {
    id: '2',
    type: 'condominium' as const,
    name: '大阪市のマンション',
    catchCopy: '都心の便利なマンション',
    prefecture: '大阪府',
    city: '大阪市',
    address: '中央区本町2-2-2',
    price: 45000000,
    priceNote: '税込',
    status: 'draft' as const,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
    buildingName: '本町レジデンス',
    roomNumber: 'A-501',
    exclusiveArea: '75',
    balconyArea: '15',
    floor: '5階',
    direction: '南向き',
    totalUnits: '100',
    managementFee: '15,000円',
    repairReserve: '20,000円',
    stations: [
      { name: '本町駅', distance: '300m', walkTime: '4分' }
    ],
    features: [
      { category: '設備', key: '24時間セキュリティ', value: 'あり' }
    ],
    images: [
      { url: '/api/placeholder/400/300', kind: 'photo', order: 0 }
    ]
  }
]

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = await context.params
  const property = properties.find(p => p.id === params.id)
  
  if (!property) {
    return NextResponse.json(
      { error: 'Property not found' },
      { status: 404 }
    )
  }
  
  return NextResponse.json(property)
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = await context.params
  try {
    const body = await request.json()
    const propertyIndex = properties.findIndex(p => p.id === params.id)
    
    if (propertyIndex === -1) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }
    
    const updatedProperty = {
      ...properties[propertyIndex],
      ...body,
      updatedAt: new Date().toISOString()
    }
    
    properties[propertyIndex] = updatedProperty
    
    return NextResponse.json(updatedProperty)
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = await context.params
  // レート制限チェック
  const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  if (!rateLimit(clientIP, 5, 60000)) {
    const info = getRateLimitInfo(clientIP)
    return NextResponse.json(
      { 
        error: 'Rate limit exceeded',
        remaining: info?.remaining,
        resetTime: info?.resetTime
      },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const propertyIndex = properties.findIndex(p => p.id === params.id)
    
    if (propertyIndex === -1) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }
    
    const updatedProperty = {
      ...properties[propertyIndex],
      ...body,
      updatedAt: new Date().toISOString()
    }
    
    properties[propertyIndex] = updatedProperty
    
    return NextResponse.json(updatedProperty)
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = await context.params
  // レート制限チェック
  const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  if (!rateLimit(clientIP, 5, 60000)) {
    const info = getRateLimitInfo(clientIP)
    return NextResponse.json(
      { 
        error: 'Rate limit exceeded',
        remaining: info?.remaining,
        resetTime: info?.resetTime
      },
      { status: 429 }
    )
  }

  const propertyIndex = properties.findIndex(p => p.id === params.id)
  
  if (propertyIndex === -1) {
    return NextResponse.json(
      { error: 'Property not found' },
      { status: 404 }
    )
  }
  
  properties.splice(propertyIndex, 1)
  
  return NextResponse.json({ message: 'Property deleted successfully' })
}
