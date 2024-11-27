import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import AuthCallback from './AuthCallback';
import './i18n';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Dynamically match any subpath */}
        <Route path="/*" element={<App />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('byk-va'),
);
