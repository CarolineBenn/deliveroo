import React from 'react';

const RestaurantListItem = ({
  id,
  name,
  tags,
  priceCategory,
  time,
  permalink,
}) => (
  <li>{name}</li>
);

export default RestaurantListItem;
