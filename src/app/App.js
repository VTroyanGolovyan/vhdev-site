import React from "react";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { logger, crashReporter } from './common/store/middlewares/logger'

import Header from './components/header/header'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'

import { rootReducer } from './common/store/reducers/rootReducer.js'

import './App.scss';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, crashReporter)
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
