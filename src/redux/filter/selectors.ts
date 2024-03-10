import { RootState } from '../store'

export const getSearchProductSelector = (state: RootState) => state.filter.product

export const getSearchBrandSelector = (state: RootState) => state.filter.brand

export const getSearchPriceSelector = (state: RootState) => state.filter.price

export const getFilterSelector = (state: RootState) => state.filter
