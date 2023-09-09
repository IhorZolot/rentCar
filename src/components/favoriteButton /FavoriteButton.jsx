import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite } from '../../redux/favoriteSlice'
import { selectFavCars } from '../../redux/selectors'
import { Sprite } from '../../pictures/Sprite'
import { ButtonFavoriteStyled } from './FavoriteButton.styled'
import { hasExactCopy } from '../../helpers/exactCopy'

export const FavoriteButton = ({ advert }) => {
	const dispatch = useDispatch()
	const fav = useSelector(selectFavCars)
	const toggleFavorite = () => {
		dispatch(addToFavorite(advert))
	}

	return (
		<ButtonFavoriteStyled onClick={toggleFavorite}>
			{hasExactCopy(fav, advert) ? <Sprite name={'heart-active'} /> : <Sprite name={'heart'} />}
		</ButtonFavoriteStyled>
	)
}

