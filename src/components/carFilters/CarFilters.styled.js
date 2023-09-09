import styled from 'styled-components'

export const FiltersContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: end;
	justify-content: center;
	gap: 10px;
	margin: 20px;
	padding-left: 20px;
`
export const FilterSectionStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`
export const LabelFilterStyled = styled.label`
	color: #8a8a89;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px;
`
export const OptionFilterStyled = styled.option`
	color: #121417;
	font-family: Manrope;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	/* padding: 14px 80px 14px 18px; */
`

export const SelectFilterStyled = styled.select`
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 14px;
	background: #f7f7fb;
	padding: 14px 80px 14px 18px;
	color: #121417;
`
export const BoxFilterStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`
export const BoxFilterInputStyled = styled.div`
	display: flex;
	flex-direction: row;
	color: #121417;
	font-family: Manrope;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
`
export const InputFilterStyled = styled.input`
	display: flex;
	padding: 14px 3px 14px 24px;
	align-items: center;
	border-radius: 14px 0px 0px 14px;
	border-left: 1px solid rgba(18, 20, 23, 0.2);
  border-top: none; 
  border-bottom: none; 
	background: #f7f7fb;
`
export const InputFilter2Styled = styled.input`
	display: flex;
	padding: 14px 15px 14px 24px;
	align-items: center;
	border-radius: 0px 14px 14px 0px;
	background: #f7f7fb;
	border: none;
`

export const ButtonFilterStyled = styled.button`
	padding: 14px 44px;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	background: #3470ff;
	cursor: pointer;
	color: white;
	border: none;
	&:hover {
		background-color: #0056b3;
	}
`
