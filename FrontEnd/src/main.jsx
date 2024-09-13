import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './redux/store';
=======
>>>>>>> 774da2384b5a9b3540bb7490a77607188c894804

import GlobalStyle from './components/globalstyle';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
<<<<<<< HEAD
		<Provider store={store}>
			<GlobalStyle>
				<App />
			</GlobalStyle>
		</Provider>
=======
		<GlobalStyle>
			<App />
		</GlobalStyle>
>>>>>>> 774da2384b5a9b3540bb7490a77607188c894804
	</React.StrictMode>,
);
