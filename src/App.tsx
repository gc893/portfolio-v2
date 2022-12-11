import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuContainer from './menu-container/menu-container';
import HeaderComponent from './header-component/header-component';
import AboutMeComponent from './about-me-component/about-me-component';
import HtmlCssComponent from './html-css-component/html-css-component';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <HeaderComponent />
        <div className='body-container d-flex'>
          <MenuContainer />
          <Routes>
            <Route path="/" element={<AboutMeComponent />} />
            <Route path="html-css" element={<HtmlCssComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
