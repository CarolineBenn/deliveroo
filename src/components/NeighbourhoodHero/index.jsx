import React from 'react';

import Container from '../Container';

import './styles.css';

const NeighbourhoodHero = ({ count, description, hero, name }) => (
  <div className="neighbourhood__hero-container" style={{ backgroundImage: `url(${hero})` }}>
    <Container>
      <div className="neighbourhood__hero-details">
        <span>{count} restaurants delivering to</span>
        <h1 className="neighbourhood_hero-name">{name}</h1>
        <p className="neighbourhood_hero-description">{description}</p>
      </div>
      </Container>
    <div className="overlay" />
  </div>
);

export default NeighbourhoodHero;
