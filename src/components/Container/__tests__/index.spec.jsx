import React from 'react';
import renderer from 'react-test-renderer';

import Container from '..';

test('Container renders correctly', () => {
  const tree = renderer
    .create(
      <Container>Child</Container>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});