import React from 'react';
import PropTypes from 'prop-types';

import RestaurantList from '../RestaurantList';

const NeighbourhoodPage = ({ name, description, count, restaurants }) => (
  <div>
    <h1>NeighbourhoodPage</h1>
    <RestaurantList restaurants={restaurants} />
  </div>
);

export default NeighbourhoodPage;

NeighbourhoodPage.propTypes = {
  /**
   * String name of Neighbourhood.
   */
  name: PropTypes.string.isRequired,
  /**
   * String paragraph describing local area.
   */
  description: PropTypes.string,
  /**
   * Number of restaurants serving neighbourhood.
   */
  count: PropTypes.number.isRequired,
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
