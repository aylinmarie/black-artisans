import PropTypes from 'prop-types';
import React from 'react';

import cx from 'classnames';
import * as stylesheet from './block.module.css';

const Block = ({ children, className, ...rest }) => {
  const classList = cx(stylesheet.root, className);

  return (
    <div className={cx(classList)} {...rest}>
      {children}
    </div>
  );
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Block;
