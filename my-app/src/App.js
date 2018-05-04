import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import './App.css';
import Header from './components/Header/Header';
import ExchangeRate from './containers/ExchangeRate/ExchangeRate';
import {
    BrowserRouter
} from 'react-router-dom';
import appReducer from './store/Reducer';

const store = createStore(appReducer, applyMiddleware(thunk));

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
