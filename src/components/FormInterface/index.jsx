import {FormContainer} from './styles';
import {AnimatePresence} from 'framer-motion';
import {MotionInterface} from '../Motion';
import Form from '../Form';

function FormInterface() {
	return (
		<AnimatePresence>
			<MotionInterface>
				<FormContainer>
					<Form />
				</FormContainer>
			</MotionInterface>
		</AnimatePresence>
	);
}

export default FormInterface;
