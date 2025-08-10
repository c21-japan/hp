"use client"

import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const propertyFormSchema = z.object({
  title: z.string().min(1, "物件名は必須です"),
  description: z.string().min(1, "物件説明は必須です"),
  price: z.string().min(1, "価格は必須です"),
  propertyType: z.string().min(1, "物件種別は必須です"),
  address: z.string().min(1, "住所は必須です"),
  bedrooms: z.string().min(1, "寝室数は必須です"),
  bathrooms: z.string().min(1, "浴室数は必須です"),
  area: z.string().min(1, "面積は必須です"),
  yearBuilt: z.string().optional(),
})

type PropertyFormValues = z.infer<typeof propertyFormSchema>

// 仮の物件データ（実際はAPIから取得）
const mockProperty = {
  id: "1",
  title: "青山マンション",
  description: "青山エリアの高級マンションです。駅から徒歩5分の好立地。",
  price: "8,500万円",
  propertyType: "apartment",
  address: "東京都港区青山1-1-1",
  bedrooms: "3",
  bathrooms: "2",
  area: "85",
  yearBuilt: "2015",
}

export default function EditPropertyPage() {
  const params = useParams()
  const router = useRouter()
  const propertyId = params.id as string

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: mockProperty.title,
      description: mockProperty.description,
      price: mockProperty.price,
      propertyType: mockProperty.propertyType,
      address: mockProperty.address,
      bedrooms: mockProperty.bedrooms,
      bathrooms: mockProperty.bathrooms,
      area: mockProperty.area,
      yearBuilt: mockProperty.yearBuilt,
    },
  })

  function onSubmit(values: PropertyFormValues) {
    console.log("更新データ:", values)
    // TODO: APIに更新データを送信する処理を実装
    alert("物件情報を更新しました")
    router.push("/properties")
  }

  function handleCancel() {
    if (confirm("変更を破棄しますか？")) {
      router.push("/properties")
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">物件編集</h1>
          <div className="text-sm text-muted-foreground">
            物件ID: {propertyId}
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 基本情報 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">基本情報</h2>
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>物件名 *</FormLabel>
                    <FormControl>
                      <Input placeholder="物件名を入力してください" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>物件種別 *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="物件種別を選択してください" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="apartment">マンション</SelectItem>
                        <SelectItem value="house">一戸建て</SelectItem>
                        <SelectItem value="land">土地</SelectItem>
                        <SelectItem value="commercial">商業施設</SelectItem>
                        <SelectItem value="office">オフィス</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>価格 *</FormLabel>
                    <FormControl>
                      <Input placeholder="価格を入力してください" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>住所 *</FormLabel>
                    <FormControl>
                      <Input placeholder="住所を入力してください" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 詳細情報 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">詳細情報</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>寝室数 *</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>浴室数 *</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>面積 *</FormLabel>
                      <FormControl>
                        <Input placeholder="㎡" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="yearBuilt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>築年数</FormLabel>
                    <FormControl>
                      <Input placeholder="築年数を入力してください" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>物件説明 *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="物件の詳細な説明を入力してください"
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 送信ボタン */}
            <div className="flex justify-end space-x-4 pt-6">
              <Button type="button" variant="outline" onClick={handleCancel}>
                キャンセル
              </Button>
              <Button type="submit">
                更新する
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
