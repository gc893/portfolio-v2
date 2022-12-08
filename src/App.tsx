import React from 'react';
import './App.scss';
import MenuContainer from './menu-container/menu-container';
import ContentContainer from './content-container/content-container';
import HeaderComponent from './header-component/header-component';

function App() {
  return (
    <div className='app-container'>
      <HeaderComponent />
      <div className='body-container d-flex'>
        <MenuContainer />
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;
