import React from 'react';
import PropTypes from 'prop-types';

const VisuallyHidden = ({ children }) => {
  const styles = {
    display: 'none',
  };

  return <span style={styles}>{children}</span>;
};

VisuallyHidden.propTypes = {
  children: PropTypes.node,
};

export default VisuallyHidden;
