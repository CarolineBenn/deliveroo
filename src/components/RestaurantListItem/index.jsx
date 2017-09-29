import React from 'react';

import Arrow from '../Arrow';

import './styles.css';

const RestaurantListItem = ({
  id,
  name,
  tags,
  priceCategory,
  time,
  permalink,
}) => (
<li className="restaurantListItem__container">
  <h3 className="restaurantListItem__name">{name}</h3>
  <div className="restaurantListItem__row">
    <div className="restaurantListItem__details">
      <span className="restaurantListItem__detail">{`${time} minutes`}</span>
      <span className="hideBelowMDInline">{priceCategory}</span>
      <span className="restaurantListItem__detail">{tags && tags.join('・')}</span>
    </div>
    <div><Arrow fill="#1EBAB2" /></div>
  </div>
</li>
);

export default RestaurantListItem;
