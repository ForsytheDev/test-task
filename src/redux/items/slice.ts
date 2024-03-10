import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ItemType, StatusEnum } from './types'
import { getItems } from './actions'

interface ItemStateProps {
  items: ItemType[]
  status: StatusEnum
}

const initialState: ItemStateProps = {
  items: [],
  status: StatusEnum.LOADING,
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ItemType[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.status = StatusEnum.LOADING
      state.items = []
    })
    builder.addCase(getItems.fulfilled, (state, action: PayloadAction<ItemType[]>) => {
      state.status = StatusEnum.SUCCESS
      state.items = action.payload
    })
    builder.addCase(getItems.rejected, (state, action) => {
      state.status = StatusEnum.ERROR
      state.items = []
      console.error('Ошибка при запросе:', action.error)
    })
  },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer
