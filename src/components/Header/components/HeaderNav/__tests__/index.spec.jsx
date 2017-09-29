import React from 'react';
import renderer from 'react-test-renderer';

import HeaderNav from '..';

test('HeaderNav renders correctly', () => {
  const tree = renderer
    .create(<HeaderNav />).toJSON();
  expect(tree).toMatchSnapshot();
});