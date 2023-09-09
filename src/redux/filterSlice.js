import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name:'filter',
  initialState:{
    price:'',
    selectedMake: '',
    minMileage:'',
    maxMileage:'',
  },
  reducers:{
    setFitlers: (state, {payload})=>{
      return state = payload
    },
    resetFilters: (state, {payload}) => {
      return {
        price: '',
        selectedMake: '',
        minMileage: '',
        maxMileage: '',
      };
  }
}
})

export const {setFitlers, resetFilters} = slice.actions
export const filterReducer = slice.reducer