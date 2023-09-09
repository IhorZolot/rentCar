import styled from 'styled-components'

export const ModalContainerStyled = styled.div`
	margin: 0 auto;
	padding: 35px;
	overflow: hidden;
`
export const ModalCloseButtonStyled = styled.div`
	position: absolute;
	right: 16px;
	top: 16px;
	cursor: pointer;
	background-color: none;
`
export const ModalImageStyled = styled.img`
	justify-content: center;
	align-items: center;
	border-radius: 14px;
	background: #f3f3f2;
	width: 469px;
	height: auto;
	margin-bottom: 10px;
`
export const ModalTitleSCartyled = styled.h2`
	color: #121417;
	font-family: Manrope;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	& span {
		color: #3470ff;
	}
`

export const ModalAdressWindowStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: rgba(18, 20, 23, 0.5);
	font-family: Manrope;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	gap: 5px;
	margin-bottom: 15px;
`
export const ModalAdressItemStyled = styled.span`
	stroke-width: 1px;
	stroke: rgba(18, 20, 23, 0.1);
`

export const ModalDescriptionStyled = styled.p`
	color: #121417;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	width: 100%;
	margin-bottom: 14px;
`
export const ModalTitleStyled = styled.h4`
	color: #121417;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	margin-bottom: 8px;
`

export const ModalListStyled = styled.ul`
	display: flex;
	flex-wrap: wrap;
	color: rgba(18, 20, 23, 0.5);
	font-family: Manrope;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	list-style: none;
	gap: 5px;
	margin-bottom:8px;
`
export const ModalListItemStyled = styled.li``
export const ModalRentalStyled = styled.div`
	color: #363535;
	font-family: Manrope;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	& span {
		color: #3470ff;
	}
`
export const ModalConditionsWindowStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	color: #363535;
	font-family: Manrope;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	& span {
		color: #3470ff;
	}
`
export const ModalConditionsItemStyled = styled.p`
	padding: 7px 14px;
	justify-content: center;
	align-items: center;
	border-radius: 35px;
	background: #f9f9f9;
`

export const ModalButtonStyled = styled.button`
	padding: 12px 50px;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	background: #3470ff;
	cursor: pointer;
	margin-top: 20px;
	color: var(--White, #fff);
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
	&:hover {
		background-color: #0056b3;
	}
`
