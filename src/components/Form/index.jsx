import {FormInput} from './styles';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, useContext} from 'react';
import {MotionForm} from '../Motion';
import APIContext from '../../context/APIContext';
import Result from '../Result/Result';
import Loading from '../Loading/Loading';

function Form() {
	const {requestPaymentInfo, loading, showResult} = useContext(APIContext);

	const [valor, setValor] = useState('');
	const [parcelas, setParcelas] = useState('');
	const [mdr, setMdr] = useState('');
	const [days, setDays] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const submitedData = {
			valor,
			parcelas,
			mdr,
			days,
		};
		requestPaymentInfo(submitedData);

		setValor('');
		setParcelas('');
		setMdr('');
		setDays('');
	};

	//^[0-9,]*$

	return (
		<FormInput>
			<AnimatePresence>
				<MotionForm>
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

						<div className='input-container'>
							<label htmlFor='mdr' className='label'>
								Para quando? (Ex: 15,30,60)
								<input
									id='days'
									onChange={e => setDays(e.target.value)}
									value={days}
									type='text'
									className='input'
									placeholder='Número de dias'
								/>
							</label>
						</div>

						<button type='submit'>
							<span>Calcular</span>
						</button>
					</form>
				</MotionForm>

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
