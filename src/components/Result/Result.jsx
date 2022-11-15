import {motion} from 'framer-motion';
import {useContext} from 'react';
import APIContext from '../../context/APIContext';

function Result() {
	const {result} = useContext(APIContext);

	return (
		<>
			<motion.div
				key={'form_data'}
				initial={{opacity: 0, x: '60px'}}
				animate={{opacity: 1, x: '0px'}}
				exit={{opacity: 0}}
				transition={{duration: 0.3}}
				className='result-div'
			>
				<h4>Você Receberá:</h4>
				<p>Amanhã: R$ {result['1'].toFixed(2)}</p>
				<p>Em 15 dias: R$ {result['15'].toFixed(2)}</p>
				<p>Em 30 dias: R$ {result['30'].toFixed(2)}</p>
				<p>Em 90 dias: R$ {result['90'].toFixed(2)}</p>
			</motion.div>
		</>
	);
}

export default Result;
