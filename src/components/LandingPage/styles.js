import styled from 'styled-components';

export const LandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	border: 2px solid var(--primary);

	.container {
		padding: 10%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	button {
		background-color: #17ba55;
	}

	p {
		font-weight: 400;
	}

	.footer {
		position: absolute;
		bottom: 30px;
		font-size: 0.75rem;
		color: #222;
	}

	svg {
		color: #17ba55;
		transform: translate(1.5px, 2px);
	}
`;
