import FormInterface from './components/FormInterface';
import {APIProvider} from './context/APIContext';
import GlobalStyle from './styles/global';

function App() {
	return (
		<APIProvider>
			<GlobalStyle />
			<div className='app'>
				<FormInterface />
			</div>
		</APIProvider>
	);
}

export default App;
