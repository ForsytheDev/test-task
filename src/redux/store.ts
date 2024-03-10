import { configureStore } from '@reduxjs/toolkit'

import items from './items/slice'
import filter from './filter/slice'

import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    items,
    filter,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
