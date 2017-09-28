import React from 'react';

import './styles.css';

const NeighbourhoodHero = ({ count, description, hero, name }) => (
  <div className="neighbourhood__hero-container" style={{ backgroundImage: `url(${hero})` }}>
    <div className="neighbourhood__hero-details">
      <span>{count} restaurants delivering to</span>
      <h1 className="neighbourhood_hero-name">{name}</h1>
      <p>{description}</p>
    </div>
    <div className="overlay" />
  </div>
);

export default NeighbourhoodHero;
