import styled from 'styled-components'

export const CardContainerStyled = styled.div`
	position: relative;
	width: 274px;
	height: 426px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ImageStyled = styled.img`
	width: 274px;
	height: 268px;
	border-radius: 14px;
	object-fit: cover;
	overflow: hidden;
`
export const TitleStyled = styled.h2`
	color: #121417;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
  `
  export const TitleBoxStyled = styled.div`
	display: flex;
	justify-content: space-between;
`
export const TitleBoxCarStyled = styled.div`
	text-align: left;
`

export const TitleSpanStyled = styled.span`
	color: #3470ff;
`

export const RowContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	text-align: center;
	align-content: center;
	color: rgba(18, 20, 23, 0.5);
	font-family: Manrope;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
`
export const SeparatorStyled = styled.span`
	margin: 0 8px;
`
export const TextStyled = styled.p`
	margin: 0;
	word-wrap: break-word;
`
export const ButtonStyled = styled.button`
	width: 100%;
	border-radius: 12px;
	padding: 12px 99px;
	background-color: rgba(52, 112, 255, 1);
	color: #fff;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: #0056b3;
	}
`



