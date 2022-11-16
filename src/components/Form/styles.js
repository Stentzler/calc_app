import styled from 'styled-components';

export const FormInput = styled.div`
	display: flex;
	width: 100%;
	border: 2px solid var(--primary);

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
		border-left: solid var(--primary) 1px;
		text-align: center;
	}

	h4 {
		padding: 6px 0;
		border-bottom: 1px solid var(--primary);
		color: #222;
	}

	h2 {
		color: #222;
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
		color: #222;
		font-weight: 500;
	}

	input::placeholder {
		color: var(--secondary);
		opacity: 0.5;
	}

	@media (max-width: 840px) {
		flex-direction: column;
		padding: 8px 4px;
		max-width: 100%;
		font-size: 0.9rem;

		.result-div {
			width: 100%;
			border-left: 0;
			border-top: 1.5px solid var(--primary);
			padding: 0;
		}

		h2 {
			font-size: 26px;
			padding-bottom: 18px;
		}

		.input-div {
			width: 100%;
			padding: 8px 0;
		}

		.input-container {
			margin-bottom: 10px;
			height: 50px;
		}

		form {
			justify-content: space-between;
			gap: 10px;
		}
	}
`;
