export type ItemParamsType = {
  search?: string
  currentPage: number
}

export type ItemType = {
  id: string
  product: string
  price: number
  brand: string | null
}

export enum StatusEnum {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
