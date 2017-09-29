import React from 'react';

import './styles.css';

const HeaderNav = ({
  mobile,
}) => (
  <nav className={`${mobile ? 'mobile-header-nav' : 'header-nav'}`}>
    <ul className="unstyledList header-nav-menu">
      <li><a href="/" className="header-nav-menu-item">Home</a></li>
      <li><a href="/" className="header-nav-menu-item">Search</a></li>
      <li><a href="/" className="header-nav-menu-item">£8.95</a></li>
      <li><a href="/" className="header-nav-menu-item">Simon Rohrbach</a></li>
    </ul>
  </nav>
);

export default HeaderNav;

