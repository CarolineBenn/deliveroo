import React, { Component } from 'react';

import HeaderNav from './components/HeaderNav';

import './styles.css';

/**
 * Header contatainer component.
 */
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
    const { navId } = this.props;
    return (
      <header className="header">
        <div className="container header-inner-container">
          <a className="site-name" href="/">
            <img
              src="/images/logo.png"
              className="logo hideBelowMD"
              alt="Deliveroo Logo"
              title="Deliveroo Logo"
            />
            <span className="srOnly hideBelowMD">Deliveroo</span>
            <span className="hideAboveMD brand-name">Deliveroo</span>
          </a>
          <button className="reset menu-icon" onClick={this.toggleNav} aria-controls={navId}>
            <span className="srOnly">Toggle navigation</span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          {showNav &&
            // `mobile` prop indicates that HeaderNav is for mobile size only.
            <HeaderNav key="SM" mobile expanded={showNav} navId={navId} />}
          <HeaderNav key="MDLG" />
        </div>
      </header>
    );
  }
}

export default Header;
