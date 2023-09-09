import React from 'react'
import { Sprite } from '../../pictures/Sprite'
import {
	ModalAdressItemStyled,
	ModalAdressWindowStyled,
	ModalButtonStyled,
	ModalCloseButtonStyled,
	ModalConditionsItemStyled,
	ModalConditionsWindowStyled,
	ModalContainerStyled,
	ModalDescriptionStyled,
	ModalImageStyled,
	ModalListStyled,
	ModalTitleSCartyled,
	ModalTitleStyled,
} from './InfoCarModal.styled'

function formatNumberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const InfoCarModal = ({ advert, onClose }) => {
	const {
		img,
		make,
		model,
		year,
		address,
		id,
		type,
		fuelConsumption,
		engineSize,
		description,
		mileage,
		rentalPrice,
		rentalConditions,
	} = advert

	const formattedMileage = formatNumberWithCommas(mileage)
	const phoneNumber = '+380730000000'

	return (
		<ModalContainerStyled>
			<ModalCloseButtonStyled onClick={onClose}>
				<Sprite name={'close-window'} />
			</ModalCloseButtonStyled>
			<ModalImageStyled src={img} alt={make} />
			<ModalTitleSCartyled>
				{make} <span>{model}</span>, {year}
			</ModalTitleSCartyled>
			<ModalAdressWindowStyled>
				<p>{address}</p> <ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>Id: {id}</p> <ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>Year: {year}</p> <ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>Type: {type}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>Fuel Consumption: {fuelConsumption}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>Engine Size: {engineSize}</p>
			</ModalAdressWindowStyled>
			<ModalDescriptionStyled>{description}</ModalDescriptionStyled>
			<ModalTitleStyled>Accessories and functionalities:</ModalTitleStyled>
			<ModalListStyled>
				{advert.accessories.map((accessory, index) => (
					<li key={index}>{accessory} <span>/</span></li>
				))}
				{advert.functionalities.map((functionality, index) => (
					<li key={index}>{functionality}<span>/</span></li>
				))}
			</ModalListStyled>
			<ModalTitleStyled>Rental Conditions:</ModalTitleStyled>
			<ModalConditionsWindowStyled>
				<ModalConditionsItemStyled>{rentalConditions[0]}</ModalConditionsItemStyled>
				<ModalConditionsItemStyled>{rentalConditions[1]}</ModalConditionsItemStyled>
				<ModalConditionsItemStyled>{rentalConditions[2]}</ModalConditionsItemStyled>
				<ModalConditionsItemStyled>
					Mileage: <span>{formattedMileage}</span>
				</ModalConditionsItemStyled>
				<ModalConditionsItemStyled>
					Price: <span>{rentalPrice}</span>
				</ModalConditionsItemStyled>
			</ModalConditionsWindowStyled>
			<ModalButtonStyled>
				<a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none', color: '#fff' }}>
					Rental car
				</a>
			</ModalButtonStyled>
		</ModalContainerStyled>
	)
}
