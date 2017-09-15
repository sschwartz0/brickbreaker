import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './modules/App'

ReactDOM.render(
  <AppContainer>
    <Provider>
      <App />
    </Provider>
  </AppContainer>
, document.getElementById('app'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./modules/App', () => {
    const NextApp = require('./modules/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}