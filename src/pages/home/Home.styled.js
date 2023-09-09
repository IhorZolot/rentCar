import styled from 'styled-components'
import backgroundImage from '../../pictures/road-min.jpg'

export const HomeContainerStyled = styled.div`
	position: relative;
	color: white;
	font-family: Manrope;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	box-sizing: border-box;
	padding: 20px;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	font-weight: bold;
	overflow: hidden;
`

export const HeadingStyled = styled.h2`
	position: absolute;
	top: 150px;
	right: 200px;
	border-radius: 12px;
	border: 1px solid #ccc;
	box-shadow: 5px 8px 8px rgba(0, 0, 0, 0.1);
	font-size: 30px;
	text-align: center;
	padding: 10px 15px;
	font-weight: bold;
	background-color: rgba(128, 128, 128, 0.5);
`

export const HomeTextStyled = styled.div`
	position: absolute;
	bottom: 200px;
	left: 150px;
	font-weight: bold;
	border-radius: 12px;
	border: 1px solid #ccc;
	box-shadow: 5px 8px 8px rgba(0, 0, 0, 0.1);
	padding: 20px;
	width: 500px;
	background-color: rgba(128, 128, 128, 0.5);
`
