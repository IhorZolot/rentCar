import React from 'react'
import { NavBarStyled, NavLinkStyled } from './NavBar.styled'

export const NavBar = () => {
	return (
		<NavBarStyled>
			<NavLinkStyled to='/'>Home</NavLinkStyled>
			<NavLinkStyled to='/catalog'>Catalogs</NavLinkStyled>
			<NavLinkStyled to='/favorites'>Favorites</NavLinkStyled>
		</NavBarStyled>
	)
}
