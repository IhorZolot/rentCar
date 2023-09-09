import React, { useState } from 'react'
import { Modal } from '../modal/Modal'
import { InfoCarModal } from '../infoCarModal/InfoCarModal'
import { FavoriteButton } from '../favoriteButton /FavoriteButton'
import { ModalAdressItemStyled } from '../infoCarModal/InfoCarModal.styled'
import { ButtonStyled, CardContainerStyled, ImageStyled, RowContainerStyled, TitleBoxCarStyled, TitleBoxStyled, TitleSpanStyled, TitleStyled } from './CarItemCard.styled'

export const CarItemCard = ({ advert }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}
  const { img, make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities } = advert
	return (
		<CardContainerStyled>
			<FavoriteButton advert={advert} />
			<ImageStyled src={img} alt={make} />
			<TitleStyled>
				<TitleBoxStyled>
					<TitleBoxCarStyled>
						{make} <TitleSpanStyled>{model}</TitleSpanStyled>, {year}
					</TitleBoxCarStyled>
					<>{rentalPrice}</>
				</TitleBoxStyled>
			</TitleStyled>
			<RowContainerStyled>
				<p>{address}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>{rentalCompany}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>Premium {type}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>{model}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>{id}</p>
				<ModalAdressItemStyled>|</ModalAdressItemStyled>
				<p>{functionalities[0]}</p>
			</RowContainerStyled>
			<ButtonStyled onClick={openModal}>Learn more</ButtonStyled>
			{isModalOpen && (
				<Modal onClose={closeModal}>
					<InfoCarModal advert={advert} onClose={closeModal} />
				</Modal>
			)}
		</CardContainerStyled>
	)
}


