import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-x5d5w1yo.us.auth0.com
// odQX0DPUMo16HIENiFI8lIOynyeLvF6H
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-x5d5w1yo.us.auth0.com"
      clientId="odQX0DPUMo16HIENiFI8lIOynyeLvF6H"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
