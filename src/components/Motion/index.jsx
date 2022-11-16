import {motion} from 'framer-motion';

export function MotionReturn({children}) {
	return (
		<motion.div
			initial={{opacity: 0, y: '60px'}}
			animate={{opacity: 1, y: '0px'}}
			transition={{duration: 0.5}}
			className='result-div'
		>
			{children}
		</motion.div>
	);
}

export function MotionForm({children}) {
	return (
		<motion.div
			initial={{opacity: 0, x: '-180px'}}
			animate={{opacity: 1, x: '0px'}}
			exit={{opacity: 0}}
			transition={{duration: 0.5}}
			className='input-div'
		>
			{children}
		</motion.div>
	);
}

export function MotionInterface({children}) {
	return (
		<motion.div
			key={'motion-interface'}
			initial={{opacity: 0, x: '-100px'}}
			animate={{opacity: 1, x: '0px'}}
			exit={{opacity: 0}}
			transition={{duration: 0.4}}
		>
			{children}
		</motion.div>
	);
}
