import Display from './components/Display';
import {APIProvider} from './context/APIContext';
import GlobalStyle from './styles/global';

function App() {
	return (
		<APIProvider>
			<GlobalStyle />
			<div className='app'>
				<Display />
			</div>
		</APIProvider>
	);
}

export default App;
