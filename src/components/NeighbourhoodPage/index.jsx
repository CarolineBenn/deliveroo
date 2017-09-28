import React from 'react';
import PropTypes from 'prop-types';

import RestaurantList from '../RestaurantList';
import NeighbourhoodHero from '../NeighbourhoodHero';

const NeighbourhoodPage = ({ name, description, hero, count, restaurants }) => (
  <div>
    <NeighbourhoodHero
      name={name}
      description={description}
      count={count}
      hero={hero}
    />
    <h1>NeighbourhoodPage</h1>
    <RestaurantList restaurants={restaurants} />
  </div>
);

export default NeighbourhoodPage;

NeighbourhoodPage.propTypes = {
  /**
   * Number of restaurants serving neighbourhood.
   */
  count: PropTypes.number.isRequired,
  /**
   * String paragraph describing local area.
   */
  description: PropTypes.string,
  /**
   * String URL of hero image.
   */
  hero: PropTypes.string.isRequired,
  /**
   * String name of Neighbourhood.
   */
  name: PropTypes.string.isRequired,
  /**
   * Array of establishments serving neighbourhood.
   */
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Numerical id of restaurant.
     */
    id: PropTypes.number.isRequired,
    /**
     * String name of restaurant.
     */
    name: PropTypes.string.isRequired,
    /**
     * Array of tags for restaurant (e.g. ['Vietnamese', 'Noodles']).
     */
    tags: PropTypes.arrayOf(PropTypes.string),
    /**
     * String indication of restuarant price.
     */
    priceCategory: PropTypes.string.isRequired,
    /**
     * Estimated delivery time.
     */
    time:  PropTypes.string.isRequired,
    /**
     * String link to restaurant page.
     */
    permalink:  PropTypes.string.isRequired,
  })).isRequired,
}
