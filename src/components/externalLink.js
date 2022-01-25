import * as React from 'react';
import PropTypes from 'prop-types';

import VisuallyHidden from './visuallyHidden';

const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
      <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
};

export default ExternalLink;
