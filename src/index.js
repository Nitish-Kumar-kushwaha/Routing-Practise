import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import About from './routes/About';

import Project from './routes/Project';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

  <Routes>
    <Route path='/' element={<App/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>}/>

  </Routes>

  </BrowserRouter>
  
    
  
);

