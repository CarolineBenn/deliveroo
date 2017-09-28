import React from 'react';
import PropTypes from 'prop-types';

const arrowRight = ({ fill }) => (
  <svg className="restaurantListItem__arrow" width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M1.423.494A.834.834 0 0 0 .244 1.673l4.203 4.202-4.203 4.202a.833.833 0 0 0 1.179 1.18l5.38-5.382L1.424.494" fill={fill} fillRule="evenodd" /></svg>
);

export default arrowRight;

arrowRight.propTypes = {
  /**
   * String hex value to color component.
   */
  fill: PropTypes.string,
};

arrowRight.defaultProps = {
  fill: '#1EBAB2',
};
