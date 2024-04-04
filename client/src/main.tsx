import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
// import './index.css';
import "beercss";
import "material-dynamic-colors";
import { Provider } from 'react-redux';
import {store} from './app/redux/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  // </React.StrictMode>,
);

