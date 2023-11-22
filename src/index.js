import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers } from 'redux';
import formReducer from './reducers/formReducer';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
