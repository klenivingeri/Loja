import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { Header } from './components/organisms/header';

import './App.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
