import React from 'react';
import renderer from 'react-test-renderer';

import { neighbourhood } from '../../../data';

import RestaurantList from '..';

// Mock components that have their own snapshot tests
jest.mock('../../RestaurantListItem', () => 'RestaurantListItem');

test('RestaurantList renders correctly', () => {
  const tree = renderer.create(
    <RestaurantList restaurants={neighbourhood.restaurants} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});