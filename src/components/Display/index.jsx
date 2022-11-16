import {FormContainer} from './styles';
import {AnimatePresence} from 'framer-motion';
import {MotionInterface} from '../Motion';
import Form from '../Form';
import LandingPage from '../LandingPage';
import {useState} from 'react';

function Display() {
	const [land, setLand] = useState(true);

	return (
		<AnimatePresence>
			<MotionInterface>
				<FormContainer>
					{land ? <LandingPage setLand={setLand} /> : <Form />}{' '}
				</FormContainer>
			</MotionInterface>
		</AnimatePresence>
	);
}

export default Display;
