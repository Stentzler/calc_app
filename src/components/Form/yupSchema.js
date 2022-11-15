import * as yup from 'yup';

export const schema = yup.object().shape({
	valor: yup
		.number()
		.typeError('**Digite um Número')
		.min(1000, '**Valor mínimo R$1000')
		.max(100000000, '**Valor máximo R$100000000')
		.required('**Campo obrigatório'),
	parcelas: yup
		.number()
		.typeError('**Digite um Número')
		.min(1, '**Parcela mínima 1')
		.max(12, '**Parcela máxima 12')
		.required('**Campo obrigatório'),
	mdr: yup
		.number()
		.typeError('**Digite um Número')
		.min(0, '**Mínimo zero')
		.max(100, '**Máximo 100')
		.required('**Campo obrigatório'),
	days: yup
		.string()
		.matches(/^[0-9,]*$/, '**Apenas números separados por vírgulas'),
});
