import React from 'react';
import './menu-container.scss';

function MenuContainer() {
  const menuItems = [
    {title: 'Lorem ipsum dolor sit amet', link: '#'},
    {title: 'Projects', link: '#'},
    {title: 'Templates', link: '#'},
    {title: 'Posts', link: '#'},
    {title: 'Contact', link: '#'},
  ];

  return (
    <div className='menu-container text-end p-2 p-md-5'>
      <ul className='menu-list'>
        {menuItems.map((item) => (
        <li>
          <a href={item.link}>{item.title}</a>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuContainer;
