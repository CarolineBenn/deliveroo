import React from 'react';
import renderer from 'react-test-renderer';

import Header from '..';

// jest.mock('../components/HeaderNav', () => 'HeaderNav');

test('Header renders correctly', () => {
  const tree = renderer
    .create(<Header navId="menuNav" />).toJSON();
  expect(tree).toMatchSnapshot();
});
