import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsThunk } from './operations'

const slice = createSlice({
	name: 'cars',
	initialState: {
		cars: [],
		isLoading: false,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCarsThunk.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
				state.cars = payload
				state.isLoading = false
			})
			.addCase(fetchCarsThunk.rejected, state => {
				state.isLoading = false
			})
	},
})

export const carsRaducer = slice.reducer
