import React from 'react'
import { CarAdvertsList } from '../../components/carAdvertsList/CarAdvertsList'
import { CarFilters } from '../../components/carFilters/CarFilters'

export const Catalog = () => {
	return (
		<div>
			<CarFilters />
			<CarAdvertsList />
		</div>
	)
}
