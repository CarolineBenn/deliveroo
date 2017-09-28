import React from 'react';
import renderer from 'react-test-renderer';

import { neighbourhood } from '../../../data';

import NeighbourhoodHero from '..';

test('NeighbourhoodHero renders correctly', () => {
  const tree = renderer
    .create(
      <NeighbourhoodHero
        name={neighbourhood.name}
        description={neighbourhood.description}
        count={neighbourhood.count}
        hero={neighbourhood.hero}
      />,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});