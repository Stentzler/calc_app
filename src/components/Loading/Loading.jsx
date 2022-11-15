import ReactLoading from 'react-loading';

function Loading({height, width}) {
	return (
		<>
			<ReactLoading
				className='loading'
				type={'bubbles'}
				color={'#777'}
				height={height ? `${height}%` : '15%'}
				width={width ? `${width}%` : '15%'}
			/>
		</>
	);
}

export default Loading;
