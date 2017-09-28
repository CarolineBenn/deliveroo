import React from 'react';
import renderer from 'react-test-renderer';

import RestaurantListItem from '..';

// Mock components that have their own snapshot tests
jest.mock('../../Arrow', () => 'Arrow');

test('RestaurantListItem renders correctly', () => {
  const tree = renderer.create(
    <RestaurantListItem />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});