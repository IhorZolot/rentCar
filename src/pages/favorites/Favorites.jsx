import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavCars } from '../../redux/selectors'
import { FavoritesContainerStyled } from './Favorites.styled '
import { CarItemCard } from '../../components/carItemCard/CarItemCard'

export const Favorites = () => {
	const data = useSelector(selectFavCars)
	return (
		<div>
			<FavoritesContainerStyled>
				{data.map(advert => (
					<li key={advert.id}>
						<CarItemCard advert={advert} />
					</li>
				))}
			</FavoritesContainerStyled>
		</div>
	)
}
