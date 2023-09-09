import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsThunk } from './operations'

const slice = createSlice({
	name: 'cars',
	initialState: { cars: [] },
	extraReducers: builder => {
		builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
			state.cars = payload
		})
	},
})

export const carsRaducer = slice.reducer
