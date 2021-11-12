import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hotels: [],
  restaurants: [],
  actives: [],
  searchState: false
}

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    getAllHotelsData: (state, action) => {
      state.hotels = action.payload
    },
    getAllRestaurants: (state, action) => {
      state.restaurants = action.payload
    },
    getAllActives: (state, action) => {
      state.actives = action.payload
    },
    clickSearch: (state, action) => {
      state.searchState = action.payload
    }
  }
})

export const searchDataActions = searchDataSlice.actions
export default searchDataSlice
