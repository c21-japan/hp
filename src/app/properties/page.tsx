import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 仮の物件データ
const mockProperties = [
  {
    id: "1",
    title: "青山マンション",
    propertyType: "マンション",
    price: "8,500万円",
    address: "東京都港区青山1-1-1",
    bedrooms: 3,
    bathrooms: 2,
    area: "85㎡",
  },
  {
    id: "2",
    title: "代官山一戸建て",
    propertyType: "一戸建て",
    price: "1億2,000万円",
    address: "東京都渋谷区代官山町1-1-1",
    bedrooms: 4,
    bathrooms: 3,
    area: "120㎡",
  },
  {
    id: "3",
    title: "六本木オフィス",
    propertyType: "オフィス",
    price: "5,000万円",
    address: "東京都港区六本木1-1-1",
    bedrooms: 0,
    bathrooms: 2,
    area: "150㎡",
  },
]

export default function PropertiesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">物件一覧</h1>
        <Link href="/properties/new">
          <Button>新規物件登録</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{property.title}</CardTitle>
              <CardDescription>{property.propertyType}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-2xl font-bold text-primary">
                {property.price}
              </div>
              <div className="text-sm text-muted-foreground">
                {property.address}
              </div>
              <div className="flex justify-between text-sm">
                <span>寝室: {property.bedrooms}</span>
                <span>浴室: {property.bathrooms}</span>
                <span>面積: {property.area}</span>
              </div>
              <div className="flex space-x-2 pt-2">
                <Link href={`/properties/${property.id}/edit`}>
                  <Button variant="outline" size="sm" className="w-full">
                    編集
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="w-full">
                    詳細
                  </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">登録された物件がありません</p>
          <Link href="/properties/new">
            <Button>最初の物件を登録する</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
