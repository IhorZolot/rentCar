import { createSelector } from '@reduxjs/toolkit'

export const selectCars = state => state.carsList.cars

export const selectFavCars = state => state.favoriteList.items

export const selectFilters = state => state.filter
export const selectFilteredData = createSelector([selectCars, selectFilters], (cars, filters)=>{
  return cars
  .filter(item => item.make.includes(filters.selectedMake))
  .filter(item => filters.price? +item.rentalPrice.slice(1) <= +filters.price: item)
  .filter(item =>  item.mileage  <= (+filters.maxMileage || 99999 ) && item.mileage >= (+filters.minMileage || 0) )
})