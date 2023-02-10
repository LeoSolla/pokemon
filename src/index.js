import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';

import pokemonsReducer from './features/Pokemons';

const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer,
    },
});

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
