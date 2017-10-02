import React, { Component } from 'react';

import { neighbourhood } from '../../data';

import Header from '../Header';
import NeighbourhoodPage from '../NeighbourhoodPage';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header navd="menuNav" />
        <NeighbourhoodPage {...neighbourhood} />
      </div>
    );
  }
}

export default App;
