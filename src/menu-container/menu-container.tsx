import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../shared/menu-items';
import './menu-container.scss';

function MenuContainer() {
  const items = [
    {title: menuItems.ABOUTME, link: '/'},
    {title: menuItems.HTMLCSS, link: 'html-css'},
    {title: menuItems.JS, link: 'js'},
    {title: menuItems.NODEBE, link: 'node-be'},
    {title: menuItems.PROJECTS, link: 'projects'},
    {title: menuItems.CONTACT, link: 'contact'},
  ];

  return (
    <div className='menu-container text-end p-2 pt-5 p-md-5'>
      <ul className='menu-list d-flex flex-column align-items-end'>
        {items.map((item) => (
        <li key={item.title} className='list-item mb-2'>
          <NavLink to={item.link}>{item.title}</NavLink>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuContainer;
