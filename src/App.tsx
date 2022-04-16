import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className="bg-dark h-100 w-100 text-light">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<HomePage/>}/>
            <Route path='single' element={<SinglePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
