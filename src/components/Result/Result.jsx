import {useContext} from 'react';
import APIContext from '../../context/APIContext';
import {MotionReturn} from '../Motion';

function Result() {
	const {result} = useContext(APIContext);
	const days = Object.keys(result);

	if (days.length === 0) {
		<MotionReturn>
			<h4>Não foi possível realizar o cálculo, tente novamente.</h4>
		</MotionReturn>;
	}

	return (
		<MotionReturn>
			<h4>Você Receberá:</h4>
			{days.map(day => {
				return day === '1' ? (
					<p>Amanhã: R$ {result['1'].toFixed(2)}</p>
				) : (
					<p>
						Em {day} dias: R$ {result[`${day}`].toFixed(2)}
					</p>
				);
			})}
		</MotionReturn>
	);
}

export default Result;
