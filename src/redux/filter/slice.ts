import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterStateProps {
  search: string
  currentPage: number
}

const initialState: FilterStateProps = {
  search: '',
  currentPage: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchFilter(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters(state, action: PayloadAction<FilterStateProps>) {
      if (Object.keys(action.payload).length) {
        state.search = action.payload.search
        state.currentPage = action.payload.currentPage
      } else {
        state.search = ''
        state.currentPage = 0
      }
    },
  },
})

export const { setSearchFilter, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer
