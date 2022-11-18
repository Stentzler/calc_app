import {useContext} from 'react';
import APIContext from '../../context/APIContext';
import {MotionReturn} from '../Motion';

function Result() {
	const {result} = useContext(APIContext);
	const resultByDays = Object.keys(result);

	if (resultByDays.length === 0) {
		return (
			<MotionReturn>
				<h4>Não foi possível realizar o cálculo, tente novamente.</h4>
			</MotionReturn>
		);
	}

	return (
		<MotionReturn>
			<h4>Você Receberá:</h4>
			{resultByDays.map((day, index) => {
				return day === '1' ? (
					<p key={index}>Amanhã: R$ {result['1'].toFixed(2)}</p>
				) : day === '0' ? (
					<p key={index}>Hoje: R$ {result[`${day}`].toFixed(2)}</p>
				) : (
					<p key={index}>
						Em {day} dias: R$ {result[`${day}`].toFixed(2)}
					</p>
				);
			})}
		</MotionReturn>
	);
}

export default Result;
