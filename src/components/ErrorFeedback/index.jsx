import {useContext} from 'react';
import APIContext from '../../context/APIContext';
import Loading from '../Loading/Loading';

function ErrorFeedback() {
	const {loading, timeout, internalError} = useContext(APIContext);

	return (
		<div className='result-div'>
			{loading ? (
				<Loading height={28} width={28} />
			) : timeout ? (
				<h4 className='timeout'>Tempo limite atingido, tente novamente.</h4>
			) : internalError ? (
				<h4 className='error'>Desculpe, ocorreu um erro.</h4>
			) : (
				<h4>Preencha o formulário</h4>
			)}
		</div>
	);
}

export default ErrorFeedback;
