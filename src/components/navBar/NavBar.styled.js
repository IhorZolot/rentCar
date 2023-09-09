import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBarStyled = styled.nav`
	background: linear-gradient(to bottom, #007bff, #0056b3);
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	position: sticky;
	position: sticky;
	top: 0;
	z-index: 10;
	display: flex;
	justify-content: left;
	padding: 20px 150px;
`
export const NavLinkStyled = styled(NavLink)`
	text-decoration: none;
	font-family: Manrope;
	color: white;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	font-weight: bold;
	margin: 0 20px;
	&:hover {
		text-decoration: underline;
	}
`
