// all imports from outside dependency 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider is a component from react-redux
import { createStore } from 'redux';    // createStore function fromm redux library
// all imports created internally 
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    
    document.querySelector('#root')
);