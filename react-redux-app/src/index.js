import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './store/reducers';

import Image from './components/Image';

import './styles.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
    <h1>Random Dog Images</h1>
      <Image />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
