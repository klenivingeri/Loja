import React from 'react';
import { Header } from './components/organisms/header';
import Home from './pages/Home';
import './App.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
