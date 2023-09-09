import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'favorite',
	initialState: { items: [] },
	reducers: {
		addToFavorite: (state, { payload }) => {
			const existingItemIndex = state.items.findIndex(item => item.id === payload.id)
			if (existingItemIndex !== -1) {
				state.items.splice(existingItemIndex, 1)
			} else {
				state.items.push({ ...payload })
			}
		},
	},
})

export const favoriteReducer = slice.reducer
export const { addToFavorite } = slice.actions
