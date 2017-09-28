import React, { Component } from 'react';

import { neighbourhood } from '../data';

import NeighbourhoodPage from '../components/NeighbourhoodPage';

import './App.css';

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
