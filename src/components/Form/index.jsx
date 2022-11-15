import {FormInput} from './styles';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, useContext} from 'react';
import APIContext from '../../context/APIContext';
import Result from '../Result/Result';
import Loading from '../Loading/Loading';

function Form() {
	const {requestPaymentInfo, loading, showResult} = useContext(APIContext);

	const [valor, setValor] = useState('');
	const [parcelas, setParcelas] = useState('');
	const [mdr, setMdr] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const submitedData = {
			valor,
			parcelas,
			mdr,
		};

		setValor('');
		setParcelas('');
		setMdr('');
		requestPaymentInfo(submitedData);
	};

	return (
		<FormInput>
			<AnimatePresence>
				<motion.div
					key={'form_data'}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{duration: 0.3}}
					className='input-div'
				>
					<h2>Simule Sua Antecipação</h2>

					<form onSubmit={handleSubmit}>
						<div className='input-container'>
							<label htmlFor='valor' className='label'>
								Informe o valor da venda*
							</label>
							<input
								id='valor'
								onChange={e => setValor(e.target.value)}
								value={valor}
								type='number'
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
								onChange={e => setParcelas(e.target.value)}
								value={parcelas}
								type='number'
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
								onChange={e => setMdr(e.target.value)}
								value={mdr}
								type='number'
								className='input'
								placeholder='MDR*'
							/>
						</div>

						<button type='submit'>
							<span>Calcular</span>
						</button>
					</form>
				</motion.div>

				{showResult ? (
					<Result />
				) : (
					<div className='result-div'>
						{loading ? (
							<Loading height={28} width={28} />
						) : (
							<h4>Preencha o formulário.</h4>
						)}
					</div>
				)}
			</AnimatePresence>
		</FormInput>
	);
}

export default Form;
