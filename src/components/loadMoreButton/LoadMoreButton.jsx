import React from 'react'
import { LoadMoreButtonStyled } from './LoadMoreButton.styled'

export const LoadMoreButton = ({ onClick }) => {
	return <LoadMoreButtonStyled onClick={onClick}>Load more</LoadMoreButtonStyled>
}
