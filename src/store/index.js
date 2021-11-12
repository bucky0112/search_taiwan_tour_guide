import { configureStore } from '@reduxjs/toolkit'
import searchDataSlice from './searchDataSlice'
import initialDataSlice from './initialDataSlice'

export const store = configureStore({
  reducer: {
    searchData: searchDataSlice.reducer,
    initialData: initialDataSlice.reducer
  }
})
