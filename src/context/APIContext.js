import {ErrorResponse} from '@remix-run/router';
import {createContext, useState} from 'react';
import api from '../services';

const APIContext = createContext();

export const APIProvider = ({children}) => {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState({});
	const [showResult, setShowResult] = useState(false);
	const [timeout, setTimeout] = useState(false);

	const requestPaymentInfo = async formData => {
		try {
			setTimeout(false);
			setLoading(true);
			setShowResult(false);

			if (!formData.days) {
				const response = await api.post('', {
					amount: formData.valor,
					installments: formData.parcelas,
					mdr: formData.mdr,
				});
				setResult(response.data);
			} else {
				const daysArr = formData.days
					.split(',')
					.map(element => Number(element))
					.splice(0, 8);

				const response = await api.post('', {
					amount: formData.valor,
					installments: formData.parcelas,
					mdr: formData.mdr,
					days: daysArr,
				});
				setResult(response.data);
			}
			setLoading(false);
			setShowResult(true);
		} catch (error) {
			setLoading(false);
			if (error.response.status === 408) {
				setTimeout(true);
			}
		}
	};

	return (
		<APIContext.Provider
			value={{requestPaymentInfo, showResult, result, timeout, loading}}
		>
			{children}
		</APIContext.Provider>
	);
};

export default APIContext;
