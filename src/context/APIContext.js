import {createContext, useState} from 'react';
import api from '../services';

const APIContext = createContext();

export const APIProvider = ({children}) => {
	const [loading, setLoading] = useState(false);
	const [timeout, setTimeout] = useState(false);
	const [internalError, setInternalError] = useState(false);
	const [disableButton, setDisableButton] = useState(false);
	const [result, setResult] = useState({});
	const [showResult, setShowResult] = useState(false);

	const requestPaymentInfo = async formData => {
		try {
			//Reseting old error/result messages and displaying Loading for the user
			setTimeout(false);
			setShowResult(false);
			setInternalError(false);
			setLoading(true);
			setDisableButton(true);

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
			// Setting loading to false, showing the results.
			setLoading(false);
			setShowResult(true);
			setDisableButton(false);
		} catch (error) {
			// Displaying error message, setting loading to false
			setLoading(false);
			setDisableButton(false);

			if (error.response.status === 408) {
				setTimeout(true);
			} else {
				setInternalError(true);
			}
		}
	};

	return (
		<APIContext.Provider
			value={{
				requestPaymentInfo,
				disableButton,
				showResult,
				result,
				timeout,
				loading,
				internalError,
			}}
		>
			{children}
		</APIContext.Provider>
	);
};

export default APIContext;
