import styled from 'styled-components';

export const FormContainer = styled.div`
	background-color: #fff;
	border-color: #000;
	width: 780px;
	height: 480px;
	padding: 18px 24px;

	display: flex;

	@media (max-width: 840px) {
		padding: 12px 14px;
		max-width: 360px;
		height: auto;
	}
`;
