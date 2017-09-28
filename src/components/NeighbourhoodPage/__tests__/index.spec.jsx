import React from 'react';
import renderer from 'react-test-renderer';

import { neighbourhood } from '../../../data';

import NeighbourhoodPage from '..';

// Mock components that have their own snapshot tests
jest.mock('../../RestaurantList', () => 'RestaurantList');

test('NeighbourhoodPage renders correctly', () => {
  const tree = renderer
    .create(<NeighbourhoodPage {...neighbourhood} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});