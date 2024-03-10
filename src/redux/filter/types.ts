export type SorteryType = {
  type: string
  property: SorteryEnum
}

export enum SorteryEnum {
  RATING = '-rating',
  NAME = 'name',
  PRICE = '-prices',
}

export interface FilterStateProps {
  currentPage: number
}
