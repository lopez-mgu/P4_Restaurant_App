import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx'
import MainSection from './components/MainSection/MainSection.jsx';
import Menu from './components/Menu/Menu.jsx';
import Reservation from './components/Reservation/Reservation.jsx';
import Blog from './components/Blog/Blog.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavigationBar />} >
        <Route path='/' element={<MainSection />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservation' element={<Reservation />} /> 
        {/* <Route path='/blog' element={<Blog />} />   */}
      </Route>
    </Routes>
  </BrowserRouter>
);

