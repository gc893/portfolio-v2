import React from 'react';
import './header-component.scss';

function HeaderComponent() {

  return (
    <header className='header-container'>
      <div className='header-content h-100 d-flex justify-content-between align-items-center px-5 py-3'>
        <p className='m-0'>Gaby Cabrera</p>
        <div className='avatar-container'>
          <div className='avatar'></div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
