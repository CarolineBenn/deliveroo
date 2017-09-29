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
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    const { showNav } = this.state;
    return (
      <header className="header">
        <div className="container header-inner-container">
          <a className="site-name" href="/">Deliveroo</a>
          <button className="reset menu-icon" onClick={this.toggleNav}>
            <span className="srOnly">Toggle navigation</span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          {showNav &&
            // `mobile` prop indicates that 
            <HeaderNav key="SM" mobile />}
          <HeaderNav key="MDLG" />
        </div>
      </header>
    );
  }
}

export default Header;
