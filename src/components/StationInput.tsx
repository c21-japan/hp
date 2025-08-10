'use client'

import { useState } from 'react'
import { Control, Controller, useFieldArray } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ChevronsUpDown, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import stationsData from '@/lib/stations.json'
import { Station } from '@/types/master'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface StationInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  stationsName: string
  prefectureName: string
}

export function StationInput({ control, stationsName, prefectureName }: StationInputProps) {
  const [openStations, setOpenStations] = useState<{ [key: number]: boolean }>({})
  const [filteredStations, setFilteredStations] = useState<Station[]>([])
  const [searchValues, setSearchValues] = useState<{ [key: number]: string }>({})

  const { fields, append, remove } = useFieldArray({
    control,
    name: stationsName
  })

  const getStationsForPrefecture = (prefecture: string): Station[] => {
    const stations = stationsData[prefecture as keyof typeof stationsData] || []
    return stations as Station[]
  }

  const handleStationSearch = (value: string, index: number) => {
    setSearchValues(prev => ({ ...prev, [index]: value }))
    const currentPrefecture = control._formValues[prefectureName]
    if (!currentPrefecture) return

    const stations = getStationsForPrefecture(currentPrefecture)
    if (value.trim() === '') {
      setFilteredStations(stations)
    } else {
      const filtered = stations.filter((station: Station) => 
        station.name.toLowerCase().startsWith(value.toLowerCase()) ||
        station.line.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredStations(filtered)
    }
  }

  const handleStationSelect = (station: Station, index: number) => {
    control._formValues[stationsName][index].name = station.name
    control._formValues[stationsName][index].line = station.line
    setOpenStations(prev => ({ ...prev, [index]: false }))
    setSearchValues(prev => ({ ...prev, [index]: '' }))
  }

  const addStation = () => {
    append({ name: '', line: '', distance: '', walkTime: '' })
  }

  const removeStation = (index: number) => {
    remove(index)
  }

  const openStationPopover = (index: number) => {
    setOpenStations(prev => ({ ...prev, [index]: true }))
    const currentPrefecture = control._formValues[prefectureName]
    if (currentPrefecture) {
      setFilteredStations(getStationsForPrefecture(currentPrefecture))
    }
  }

  return (
    <div className="space-y-4">
      <Label>最寄り駅</Label>
      
      {fields.map((field, index: number) => (
        <div key={field.id} className="flex gap-2 items-start">
          <div className="flex-1">
            <Popover 
              open={openStations[index] || false} 
              onOpenChange={(open) => {
                setOpenStations(prev => ({ ...prev, [index]: open }))
                if (open) {
                  openStationPopover(index)
                }
              }}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openStations[index] || false}
                  className="w-full justify-between"
                  onClick={() => openStationPopover(index)}
                >
                  {control._formValues[stationsName][index]?.name || "駅名を選択"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput 
                    placeholder="駅名・路線名を検索..." 
                    value={searchValues[index] || ''}
                    onValueChange={(value) => handleStationSearch(value, index)}
                  />
                  <CommandList>
                    <CommandEmpty>駅が見つかりません。</CommandEmpty>
                    <CommandGroup>
                      {filteredStations.map((station: Station) => (
                        <CommandItem
                          key={`${station.name}-${station.line}`}
                          value={station.name}
                          onSelect={() => handleStationSelect(station, index)}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              control._formValues[stationsName][index]?.name === station.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <div>
                            <div className="font-medium">{station.name}</div>
                            <div className="text-sm text-gray-500">{station.line}</div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <Controller<FormData>
            name={`${stationsName}.${index}.distance`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="距離"
                className="w-24"
              />
            )}
          />

          <Controller<FormData>
            name={`${stationsName}.${index}.walkTime`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="徒歩時間"
                className="w-24"
              />
            )}
          />

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => removeStation(index)}
            disabled={fields.length === 1}
            className="flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addStation}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        駅を追加
      </Button>
    </div>
  )
}
