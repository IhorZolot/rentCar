import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const Api = axios.create({ baseURL: 'https://64f6b7529d77540849527f6f.mockapi.io/' })

export const fetchCarsThunk = createAsyncThunk('fetchCars', async (_, thunkAPI) => {
	try {
		const { data } = await Api.get('adverts')
		return data
	} catch (error) {
		throw error.message
	}
})
