import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const HeaderNav = ({
  expanded,
  mobile,
  navId,
}) => (
  <nav id={navId} className={`${mobile ? 'mobile-header-nav' : 'header-nav'}`} aria-expanded={expanded}>
    <ul className="unstyledList header-nav-menu">
      <li><a href="/" className="header-nav-menu-item">Home</a></li>
      <li><a href="/" className="header-nav-menu-item">Search</a></li>
      <li><a href="/" className="header-nav-menu-item">£8.55</a></li>
      <li><a href="/" className="header-nav-menu-item">Simon Rohrbach</a></li>
    </ul>
  </nav>
);

export default HeaderNav;

HeaderNav.propTypes = {
  /**
   * Bool to describe whether navigation is expanded or not (mobile)
   */
  expanded: PropTypes.bool,
  /**
   * Bool to describe whether component is being rendered on mobile or not.
   */
  mobile: PropTypes.bool,
  /**
   * String ID for the nav component.
   */
  navId: PropTypes.string,
};

HeaderNav.defaultProps = {
  expanded: false,
  mobile: false,
  navId: 'menuNav',
}