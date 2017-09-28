import React from 'react';
import renderer from 'react-test-renderer';

import { neighbourhood } from '../../../data';

import NeighbourhoodPage from '..';

test('NeighbourhoodPage renders correctly', () => {
  const tree = renderer
    .create(<NeighbourhoodPage {...neighbourhood} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});