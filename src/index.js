import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Redux/Reducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
  {/* <BrowserRouter> */}
    <App />
  {/* </BrowserRouter> */}
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
