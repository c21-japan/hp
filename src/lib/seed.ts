// サンプルデータのシードスクリプト
export const seedData = [
  {
    id: 'seed-1',
    type: 'detached' as const,
    name: '奈良市の新築戸建て（シード）',
    catchCopy: '閑静な住宅街の新築戸建て、家族で快適に暮らせます',
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
      { name: '近鉄奈良駅', distance: '800m', walkTime: '10分' },
      { name: 'JR奈良駅', distance: '1200m', walkTime: '15分' }
    ],
    features: [
      { category: '設備', key: 'エアコン', value: '全室設置' },
      { category: '設備', key: '床暖房', value: 'リビング・寝室' },
      { category: 'セキュリティ', key: '防犯システム', value: '24時間監視' }
    ],
    images: [
      { url: '/api/placeholder/400/300', kind: 'photo', order: 0 },
      { url: '/api/placeholder/400/300', kind: 'floorplan', order: 1 }
    ]
  },
  {
    id: 'seed-4',
    type: 'detached' as const,
    name: '京都府宇治市のリフォーム戸建て（シード）',
    catchCopy: '古民家を現代風にリフォーム、和モダンの住まい',
    prefecture: '京都府',
    city: '宇治市',
    address: '宇治宇治1-4-4',
    price: 28000000,
    priceNote: '税込',
    status: 'published' as const,
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-04T00:00:00Z',
    landArea: '180',
    buildingArea: '140',
    layout: '4LDK',
    builtYear: '1985',
    structure: '木造',
    floors: '2階建て',
    parking: '3台',
    stations: [
      { name: '宇治駅', distance: '600m', walkTime: '8分' },
      { name: 'JR宇治駅', distance: '800m', walkTime: '10分' }
    ],
    features: [
      { category: '設備', key: 'リフォーム', value: '2023年完了' },
      { category: '設備', key: 'エアコン', value: '全室設置' },
      { category: '環境', key: '庭園', value: '日本庭園あり' }
    ],
    images: [
      { url: '/api/placeholder/400/300', kind: 'photo', order: 0 },
      { url: '/api/placeholder/400/300', kind: 'photo', order: 1 }
    ]
  },
  {
    id: 'seed-2',
    type: 'condominium' as const,
    name: '大阪市のマンション（シード）',
    catchCopy: '都心の便利なマンション、アクセス抜群で暮らしやすい',
    prefecture: '大阪府',
    city: '大阪市',
    address: '中央区本町2-2-2',
    price: 45000000,
    priceNote: '税込',
    status: 'published' as const,
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
      { name: '本町駅', distance: '300m', walkTime: '4分' },
      { name: '淀屋橋駅', distance: '500m', walkTime: '6分' }
    ],
    features: [
      { category: '設備', key: '24時間セキュリティ', value: 'あり' },
      { category: '設備', key: '宅配ボックス', value: '各戸設置' },
      { category: '共用施設', key: 'ラウンジ', value: '1階' }
    ],
    images: [
      { url: '/api/placeholder/400/300', kind: 'photo', order: 0 },
      { url: '/api/placeholder/400/300', kind: 'photo', order: 1 }
    ]
  },
  {
    id: 'seed-3',
    type: 'land' as const,
    name: '神戸市の土地（シード）',
    catchCopy: '眺望抜群の高台にある宅地、理想的な住環境',
    prefecture: '兵庫県',
    city: '神戸市',
    address: '東灘区本山町3-3-3',
    price: 25000000,
    priceNote: '税込',
    status: 'draft' as const,
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
    landArea: '200',
    unitPrice: '50万円',
    landCategory: '宅地',
    buildingCoverageRatio: '60%',
    floorAreaRatio: '200%',
    buildingConditions: '更地',
    rights: '所有権',
    zoning: '第一種低層住居専用地域',
    topo: '平坦',
    stations: [
      { name: '六甲道駅', distance: '1000m', walkTime: '12分' }
    ],
    features: [
      { category: '環境', key: '眺望', value: '神戸港・大阪湾' },
      { category: '環境', key: '緑地', value: '近隣公園あり' }
    ],
    images: [
      { url: '/api/placeholder/400/300', kind: 'photo', order: 0 }
    ]
  }
]

export function getSeedData() {
  return seedData
}
