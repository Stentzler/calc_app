import styled from 'styled-components';

export const FormInput = styled.div`
	display: flex;
	width: 100%;
	border: 1.5px solid #000;

	.input-div {
		width: 65%;
		height: 100%;

		display: flex;
		flex-direction: column;
	}

	.result-div {
		background-color: #f2f5f7;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 35%;
		justify-content: center;
		gap: 16px;
		align-items: center;
		border-left: solid #000 1px;
		text-align: center;
	}

	h4 {
		padding: 6px 0;
		border-bottom: 1px solid #000;
		color: #3d405b;
	}

	h2 {
		color: #3d405b;
		padding: 8px 0;
		text-align: center;
	}

	form {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.input-container {
		width: 290px;
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	input,
	label {
		display: block;
		color: #3d405b;
	}

	.checkboxes {
		width: 100%;
		display: flex;
		gap: 10px;
		justify-content: space-between;
	}

	.checkbox {
		display: flex;
	}

	@media (max-width: 840px) {
		flex-direction: column;
		padding: 15px;
		max-width: 100%;
		font-size: 0.9rem;

		.result-div {
			width: 100%;
			border-left: 0;
			border-top: 1.5px solid #000;
		}

		.input-div {
			width: 100%;
			padding: 10px 0;
		}

		.input-container {
			margin-bottom: 10px;
		}
	}
`;
