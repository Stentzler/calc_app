import {FormContainer} from './styles';
import {motion, AnimatePresence} from 'framer-motion';
import Form from '../Form';

function FormInterface() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{opacity: 0, x: '-100px'}}
				animate={{opacity: 1, x: '0px'}}
				exit={{opacity: 0}}
				transition={{duration: 0.4}}
			>
				<FormContainer>
					<Form />
				</FormContainer>
			</motion.div>
		</AnimatePresence>
	);
}

export default FormInterface;
