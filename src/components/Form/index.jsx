import {FormInput} from './styles';
import {AnimatePresence} from 'framer-motion';
import {useContext} from 'react';
import {MotionForm} from '../Motion';
import APIContext from '../../context/APIContext';
import Result from '../Result/Result';
import Loading from '../Loading/Loading';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './yupSchema';

function Form() {
	const {requestPaymentInfo, loading, showResult, timeout} =
		useContext(APIContext);
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		reValidateMode: 'onSubmit',
	});

	const getValues = data => {
		try {
			if (!data.days) {
				const {days, ...rest} = data;
				requestPaymentInfo(rest);
				reset();
			} else {
				requestPaymentInfo({...data});
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<FormInput>
			<AnimatePresence>
				<MotionForm key={'form'}>
					<h2>Simule Sua Antecipação</h2>

					<form onSubmit={handleSubmit(getValues)}>
						<div className='input-container'>
							<label htmlFor='valor' className='label'>
								Informe o valor da venda*
							</label>
							<input
								id='valor'
								type='number'
								className='input'
								placeholder='R$'
								{...register('valor')}
							/>
							{errors?.valor && (
								<p className='error'>{errors.valor?.message}</p>
							)}
						</div>

						<div className='input-container'>
							<label htmlFor='parcelas' className='label'>
								Em quantas parcelas*
							</label>
							<input
								id='parcelas'
								type='number'
								className='input'
								placeholder='Parcelas'
								{...register('parcelas')}
							/>
							{errors?.parcelas && (
								<p className='error'>{errors.parcelas?.message}</p>
							)}
						</div>

						<div className='input-container'>
							<label htmlFor='mdr' className='label'>
								Informe o percentual de MDR*
							</label>
							<input
								id='mdr'
								type='number'
								className='input'
								placeholder='MDR*'
								{...register('mdr')}
							/>
							{errors?.mdr && <p className='error'>{errors.mdr?.message}</p>}
						</div>

						<div className='input-container'>
							<label htmlFor='days' className='label'>
								Para quando? (Opcional)
								<input
									id='days'
									type='text'
									className='input'
									placeholder='15,30,90'
									{...register('days')}
								/>
							</label>
							{errors?.days && <p className='error'>{errors.days?.message}</p>}
						</div>

						<button type='submit'>
							<span>Calcular</span>
						</button>
					</form>
				</MotionForm>

				{showResult ? (
					<Result key={'result'} />
				) : (
					<div className='result-div'>
						{loading ? (
							<Loading height={28} width={28} />
						) : timeout ? (
							<h4>Tempo limite atingido, tente novamente.</h4>
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
