import React from 'react'
import { Link } from 'react-router-dom'
import { HeadingStyled, HomeContainerStyled, HomeTextStyled } from './Home.styled'

export const Home = () => {
	return (
		<HomeContainerStyled>
			<HeadingStyled>
					<Link to='/catalog'>Rent Car</Link>
			</HeadingStyled>
			<HomeTextStyled>
				<p>
					"Car rental is the main focus of our company, RentDrive. We will be a reliable partner to anyone in need of a
					comfortable, modern, and dependable car. When you turn to us, you can expect an individual approach, quality
					service, competitive prices, and excellent service. Over the years, the company has established a positive
					reputation, as reflected in the reviews about us. All our customers become regular clients and recommend us to
					their family, friends, and acquaintances who need car rental services in Kyiv. To see for yourself, it's worth
					checking it out through personal experience."
				</p>
			</HomeTextStyled>
		</HomeContainerStyled>
	)
}
