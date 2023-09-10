import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyle'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<PersistGate loading={null} persistor={persistor}>
		<Provider store={store}>
			<HashRouter basename='rentcar'>
				<GlobalStyles />
				<App />
			</HashRouter>
		</Provider>
	</PersistGate>
)
