import React from 'react';
import renderer from 'react-test-renderer';

import Restaurant from '.';


test('Restaurant renders correctly', () => {
  const tree = renderer.create(
    <Restaurant />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});