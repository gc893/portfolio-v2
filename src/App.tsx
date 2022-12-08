import React from 'react';
import './App.css';
import MenuContainer from './menu-container/menu-container';
import ContentContainer from './content-container/content-container';

function App() {
  return (
    <div className='app-container d-flex align-items-center'>
      <MenuContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
