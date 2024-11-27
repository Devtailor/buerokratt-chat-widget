import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import AuthCallback from './AuthCallback';
import './i18n';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/test">
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/auth/callback" Component={AuthCallback} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('byk-va'),
);
