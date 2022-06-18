import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'
import MainSection from './components/MainSection/MainSection';
import Menu from './components/Menu/Menu';
import Blog from './components/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from './components/Reservation/Reservation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavigationBar />} >
        <Route path='/' element={<MainSection />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservation' element={<Reservation />} /> 
        <Route path='/blog' element={<Blog />} />  
      </Route>
    </Routes>
  </BrowserRouter>
);

