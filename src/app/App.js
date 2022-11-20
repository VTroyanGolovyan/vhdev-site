import React from "react";

import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
