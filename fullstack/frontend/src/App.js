import './App.css';
import React, { useEffect, useRef } from 'react';
import Naver from './components/Naver.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js';
import List_all from './pages/List_all.js';
import Emperor from './pages/Emperor.js';

function App() {
  return (
      <BrowserRouter>
          <Naver/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/list_all" element={<List_all/>} />
                <Route exact path="/emperor/:id" element={<Emperor/>} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
