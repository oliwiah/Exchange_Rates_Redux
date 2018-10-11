import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import './App.css';
import Header from './components/Header/Header';
import ExchangeRate from './containers/ExchangeRate/ExchangeRate';
import {
    BrowserRouter
} from 'react-router-dom';
import appReducer from './store/Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk))); 

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header />
                        <ExchangeRate />
                    </div>
                </BrowserRouter>
            </div>
            </Provider>
        );
    }
}

export default App;
