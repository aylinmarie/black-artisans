/***************************
 * Utilizing react-responsive-masonry
 * Pulling the library in here in order to add a few accessible features
 * Reference: https://github.com/cedricdelpoux/react-responsive-masonry
 ***************************/

import PropTypes from 'prop-types';
import React from 'react';

class Masonry extends React.Component {
  getColumns() {
    const { children, columnsCount } = this.props;
    const columns = Array.from({ length: columnsCount }, () => []);

    React.Children.forEach(children, (child, index) => {
      if (child && React.isValidElement(child)) {
        columns[index % columnsCount].push(child);
      }
    });

    return columns;
  }

  renderColumns() {
    // Allowing to pass element type for accessibility
    const { gutter, as = 'div' } = this.props;
    const Tag = as;

    return this.getColumns().map((column, i) => (
      <Tag
        key={i}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'stretch',
          flex: 1,
          width: 0,
          gap: gutter,
          // For list elements
          padding: 0,
          listStyleType: 'none',
        }}
      >
        {column.map((item) => item)}
      </Tag>
    ));
  }

  render() {
    const { gutter, className, style } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'stretch',
          boxSizing: 'border-box',
          width: '100%',
          gap: gutter,
          ...style,
        }}
        className={className}
      >
        {this.renderColumns()}
      </div>
    );
  }
}

Masonry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  columnsCount: PropTypes.number,
  gutter: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Masonry.defaultProps = {
  columnsCount: 3,
  gutter: '0',
  className: null,
  style: {},
};

export default Masonry;
