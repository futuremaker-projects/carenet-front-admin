import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import "./support/config/locales/I18n";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from './support/redux/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)
