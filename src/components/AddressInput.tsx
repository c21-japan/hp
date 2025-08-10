'use client'

import { useState, useEffect } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import areasData from '@/lib/areas.json'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface AddressInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  prefectureName: string
  cityName: string
  addressName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (name: string, value: any) => void
}

export function AddressInput({ control, prefectureName, cityName, addressName, setValue }: AddressInputProps) {
  const [openCity, setOpenCity] = useState(false)
  const [openPrefecture, setOpenPrefecture] = useState(false)
  const [cities, setCities] = useState<string[]>([])
  const [filteredCities, setFilteredCities] = useState<string[]>([])
  const [citySearchValue, setCitySearchValue] = useState('')

  const prefectures = Object.keys(areasData)

  // 都道府県が変更された時に市区町村を更新
  useEffect(() => {
    const currentPrefecture = control._formValues[prefectureName]
    if (currentPrefecture) {
      const prefectureCities = areasData[currentPrefecture as keyof typeof areasData] || []
      setCities(prefectureCities)
      setFilteredCities(prefectureCities)
    } else {
      setCities([])
      setFilteredCities([])
    }
  }, [control._formValues, prefectureName])

  // 市区町村の前方一致フィルタリング
  const handleCitySearch = (value: string) => {
    setCitySearchValue(value)
    if (value.trim() === '') {
      setFilteredCities(cities)
    } else {
      const filtered = cities.filter(city => 
        city.toLowerCase().startsWith(value.toLowerCase())
      )
      setFilteredCities(filtered)
    }
  }

  // 都道府県選択時の処理
  const handlePrefectureSelect = (prefecture: string, field: { onChange: (value: string) => void }) => {
    field.onChange(prefecture)
    setCities(areasData[prefecture as keyof typeof areasData] || [])
    setFilteredCities(areasData[prefecture as keyof typeof areasData] || [])
    setOpenPrefecture(false)
    // 市区町村と住所をクリア
    setValue(cityName, '')
    setValue(addressName, '')
  }

  // 市区町村選択時の処理
  const handleCitySelect = (city: string, field: { onChange: (value: string) => void }) => {
    field.onChange(city)
    setOpenCity(false)
    // 住所をクリア
    setValue(addressName, '')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <Label htmlFor={prefectureName}>都道府県 *</Label>
        <Controller<FormData>
          name={prefectureName}
          control={control}
          render={({ field }) => (
            <Popover open={openPrefecture} onOpenChange={setOpenPrefecture}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openPrefecture}
                  className="w-full justify-between"
                >
                  {field.value || "選択してください"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="都道府県を検索..." />
                  <CommandList>
                    <CommandEmpty>都道府県が見つかりません。</CommandEmpty>
                    <CommandGroup>
                      {prefectures.map((prefecture) => (
                        <CommandItem
                          key={prefecture}
                          value={prefecture}
                          onSelect={() => handlePrefectureSelect(prefecture, field)}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value === prefecture ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {prefecture}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}
        />
      </div>

      <div>
        <Label htmlFor={cityName}>市区町村 *</Label>
        <Controller<FormData>
          name={cityName}
          control={control}
          render={({ field }) => (
            <Popover open={openCity} onOpenChange={setOpenCity}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCity}
                  className="w-full justify-between"
                  disabled={!control._formValues[prefectureName]}
                >
                  {field.value || "選択してください"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput 
                    placeholder="市区町村を検索..." 
                    value={citySearchValue}
                    onValueChange={handleCitySearch}
                  />
                  <CommandList>
                    <CommandEmpty>市区町村が見つかりません。</CommandEmpty>
                    <CommandGroup>
                      {filteredCities.map((city) => (
                        <CommandItem
                          key={city}
                          value={city}
                          onSelect={() => handleCitySelect(city, field)}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value === city ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {city}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}
        />
      </div>

      <div>
        <Label htmlFor={addressName}>住所 *</Label>
        <Controller<FormData>
          name={addressName}
          control={control}
          render={({ field }) => (
            <Input 
              {...field} 
              placeholder="例: 1-1-1" 
              disabled={!control._formValues[cityName]}
            />
          )}
        />
      </div>
    </div>
  )
}
