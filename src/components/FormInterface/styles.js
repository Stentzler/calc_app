import styled from 'styled-components';

export const FormContainer = styled.div`
	background-color: #fff;
	border-color: #000;
	width: 780px;
	height: 480px;
	padding: 18px 24px;

	display: flex;

	@media (max-width: 840px) {
		font-size: 0.9rem;
		width: 400px;
		max-width: 100%;
		height: auto;

		h1 {
			font-size: 20px;
		}
	}
`;
