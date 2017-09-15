import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducers'
import App from './modules/App'

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
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
        <Provider store={store}>
          <NextApp/>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}