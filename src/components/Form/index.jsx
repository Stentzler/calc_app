import {FormInput} from './styles';
import {motion, AnimatePresence} from 'framer-motion';

function Form() {
	return (
		<FormInput>
			<AnimatePresence>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{duration: 0.3}}
					className='input-div'
				>
					<h2>Simule Sua Antecipação</h2>

					<form action='submit'>
						<div className='input-container'>
							<label htmlFor='valor' className='label'>
								Informe o valor da venda*
							</label>
							<input
								id='valor'
								type='text'
								className='input'
								placeholder='R$'
							/>
						</div>

						<div className='input-container'>
							<label htmlFor='parcelas' className='label'>
								Em quantas parcelas*
							</label>
							<input
								id='parcelas'
								type='text'
								className='input'
								placeholder='Parcelas'
							/>
						</div>

						<div className='input-container'>
							<label htmlFor='mdr' className='label'>
								Informe o percentual de MDR*
							</label>
							<input
								id='mdr'
								type='text'
								className='input'
								placeholder='MDR*'
							/>
						</div>

						<button type='submit'>
							<span>Calcular</span>
						</button>
					</form>
				</motion.div>

				<div className='result-div'>
					{/*@todo dinamico conforme resposta da API */}
					<h4>Você Receberá:</h4>
					<p>Amanhã: R$ {(430).toFixed(2)}</p>
					<p>Em 15 dias: R$ {(430).toFixed(2)}</p>
					<p>Em 30 dias: R$ {(430).toFixed(2)}</p>
					<p>Em 90 dias: R$ {(440.213123).toFixed(2)}</p>
				</div>
			</AnimatePresence>
		</FormInput>
	);
}

export default Form;
