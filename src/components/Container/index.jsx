import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * Container presentational component.
 */
const Container = ({ children }) => (
  <div className="container">{children}</div>
);

Container.propTypes = {
  /**
   * Child contents of Container.
   */
  children: PropTypes.any,
};

Container.defaultProps = {
  children: null,
};

export default Container;
