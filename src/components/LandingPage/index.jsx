import React from 'react';
import {FaHandHoldingHeart} from 'react-icons/fa';
import {LandingContainer} from './styles';
function LandingPage({setLand}) {
	const footerYear = new Date().getFullYear();

	const handleClick = () => {
		setLand(false);
	};

	return (
		<LandingContainer>
			<div className='container'>
				<h1>Bem-vindo ao CalcApp</h1>
				<button onClick={handleClick}>
					<span>Iniciar</span>
				</button>
				<p>Este app foi criado para ajudar você a gerenciar sua renda!</p>
				<p className='footer'>
					<>
						Copyright &copy; {footerYear} All rights reserved{' '}
						<FaHandHoldingHeart size={18} />
					</>
				</p>
			</div>
		</LandingContainer>
	);
}

export default LandingPage;
