import React from 'react';
import PropTypes from 'prop-types';

import RestaurantListItem from '../RestaurantListItem';

import './styles.css';

const RestaurantList = ({ restaurants }) => (
  <ul className="unstyledList restaurantList">
    {restaurants.map(restaurant => (
      <RestaurantListItem key={restaurant.id} {...restaurant} />
    ))}
  </ul>
);

export default RestaurantList;

RestaurantList.propTypes = {
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
};
