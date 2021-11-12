import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hotels: [],
  restaurants: [],
  actives: []
}

const initialDataSlice = createSlice({
  name: 'initialData',
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
    }
  }
})

export const initialDataActions = initialDataSlice.actions
export default initialDataSlice
