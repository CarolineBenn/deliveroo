import React, { Component } from 'react';

import { neighbourhood } from '../../data';

import NeighbourhoodPage from '../NeighbourhoodPage';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <NeighbourhoodPage {...neighbourhood} />
      </div>
    );
  }
}

export default App;
