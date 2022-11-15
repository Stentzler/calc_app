import {createContext, useState} from 'react';
import api from '../services';

const APIContext = createContext();

export const APIProvider = ({children}) => {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState({});
	const [showResult, setShowResult] = useState(false);

	const requestPaymentInfo = async formData => {
		try {
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
				const response = await api.post('', {
					amount: formData.valor,
					installments: formData.parcelas,
					mdr: formData.mdr,
					days: [formData.days],
				});
				setResult(response.data);
			}

			setLoading(false);
			setShowResult(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<APIContext.Provider
			value={{requestPaymentInfo, showResult, result, loading}}
		>
			{children}
		</APIContext.Provider>
	);
};

export default APIContext;
