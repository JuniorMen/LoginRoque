import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// (Auth0Provider) proveedor que almacenara la autenticacion de nuestros usuarios y proveera metodos para loguear y desloguerlos
ReactDOM.render(
  <React.StrictMode>
    
    <Auth0Provider domain="dev-qems38v5.us.auth0.com" clientId="PPUhFNnQuDYpeK6njWRBBUoP60osxzK3" redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
