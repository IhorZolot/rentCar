import React, { useState } from 'react'
import {
	BoxFilterInputStyled,
	BoxFilterStyled,
	ButtonClearFilterStyled,
	ButtonFilterStyled,
	FilterSectionStyled,
	FiltersContainerStyled,
	InputFilter2Styled,
	InputFilterStyled,
	LabelFilterStyled,
	OptionFilterStyled,
	SelectFilterStyled,
} from './CarFilters.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectCars } from '../../redux/selectors'
import { resetFilters, setFitlers } from '../../redux/filterSlice'

export const CarFilters = () => {
	const dispatch = useDispatch()
	const [filterData, setFilterData] = useState({
		price: '',
		selectedMake: '',
		minMileage: '',
		maxMileage: '',
	})
	const { price, selectedMake, minMileage, maxMileage } = filterData
	const cars = useSelector(selectCars)

	const makesData = [...new Set(cars.map(item => item.make))]

	const handleSearchClick = () => {
		dispatch(setFitlers(filterData))
	}
	const handleClearFilters = () => {
		dispatch(resetFilters())
		setFilterData({
			price: '',
			selectedMake: '',
			minMileage: '',
			maxMileage: '',
		})
	}
	const handleInputChange = e => {
		const { name, value } = e.target
		setFilterData({ ...filterData, [name]: value })
	}
	return (
		<FiltersContainerStyled>
			<FilterSectionStyled>
				<LabelFilterStyled>Car brands</LabelFilterStyled>
				<SelectFilterStyled onChange={handleInputChange} name='selectedMake' value={selectedMake}>
					<option value=''>Enter make car</option>
					{makesData.map((make, index) => (
						<option key={index} value={make}>
							{make}
						</option>
					))}
				</SelectFilterStyled>
			</FilterSectionStyled>
			<FilterSectionStyled>
				<LabelFilterStyled>Price/1 hour</LabelFilterStyled>
				<SelectFilterStyled name='price' onChange={handleInputChange} value={price}>
					<OptionFilterStyled value=''>To $</OptionFilterStyled>
					{Array.from({ length: 20 }, (_, i) => (i + 1) * 10).map((price, index) => (
						<OptionFilterStyled key={index} value={price}>
							{price} $
						</OptionFilterStyled>
					))}
				</SelectFilterStyled>
			</FilterSectionStyled>
			<BoxFilterStyled>
				<LabelFilterStyled>Car mileage / km</LabelFilterStyled>
				<BoxFilterInputStyled>
					<InputFilterStyled
						type='number'
						id='minMileage'
						name='minMileage'
						placeholder='From'
						value={minMileage}
						onChange={handleInputChange}
					/>
					<InputFilter2Styled
						type='number'
						id='maxMileage'
						name='maxMileage'
						placeholder='To'
						value={maxMileage}
						onChange={handleInputChange}
					/>
				</BoxFilterInputStyled>
			</BoxFilterStyled>
			<ButtonFilterStyled onClick={handleSearchClick}>Search</ButtonFilterStyled>
			<ButtonClearFilterStyled onClick={handleClearFilters}>Reset</ButtonClearFilterStyled>
		</FiltersContainerStyled>
	)
}
