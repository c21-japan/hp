export interface Prefecture {
  code: string
  name: string
}

export interface City {
  code: string
  name: string
  prefectureCode: string
}

export interface Station {
  code: string
  name: string
  line: string
  prefectureCode: string
  cityCode?: string
}

export interface SuggestOption<T> {
  label: string
  value: T
}
