import React, { Component } from 'react';

import HeaderNav from './components/HeaderNav';

import './styles.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
    };
  }

  toggleNav = () => {
    // This function toggle the menu.
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    return (
      <header className="header">
        <a className="site-name" href="/">Deliveroo</a>
        <button className="reset menu-icon" onClick={this.toggleNav}>
          <span className="srOnly">Toggle navigation</span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>
    );
  }
}

export default Header;
