import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
    
          <div>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
            </Routes>
          </div>
        
    
    </div>
  );
}

export default App;
