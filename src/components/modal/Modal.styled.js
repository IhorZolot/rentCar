import { styled } from 'styled-components'

export const ModalOverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 1200;
`
export const ModalWindowStyled = styled.div`
	position: relative;
	width: 541px;
	height: auto;
	background-color: #fff;
	border-radius: 24px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	/* padding: 20px; */
	/* overflow-y: auto; */
	/* max-width: 90%;
	max-height: 90%; */
`
