import React from 'react';
import renderer from 'react-test-renderer';

import RestaurantList from '.';


test('RestaurantList renders correctly', () => {
  const tree = renderer.create(
    <RestaurantList />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});