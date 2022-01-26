/***************************
 * Utilizing react-responsive-masonry
 * Pulling the library in here in order to add a few accessible features
 * Reference: https://github.com/cedricdelpoux/react-responsive-masonry
 ***************************/

import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const DEFAULT_COLUMNS_COUNT = 1;

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

const useWindowWidth = () => {
  const hasMounted = useHasMounted();
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);

  useEffect(() => {
    if (hasMounted) {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasMounted, handleResize]);

  return width;
};

const ResponsiveMasonry = ({
  columnsCountBreakPoints,
  children,
  className,
  style,
}) => {
  const windowWidth = useWindowWidth();
  const columnsCount = useMemo(() => {
    const breakPoints = Object.keys(columnsCountBreakPoints).sort(
      (a, b) => a - b,
    );
    let count =
      breakPoints.length > 0
        ? columnsCountBreakPoints[breakPoints[0]]
        : DEFAULT_COLUMNS_COUNT;

    breakPoints.forEach((breakPoint) => {
      if (breakPoint < windowWidth) {
        count = columnsCountBreakPoints[breakPoint];
      }
    });

    return count;
  }, [windowWidth, columnsCountBreakPoints]);

  return (
    <div className={className} style={style}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          key: index,
          columnsCount: columnsCount,
        }),
      )}
    </div>
  );
};

ResponsiveMasonry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  columnsCountBreakPoints: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

ResponsiveMasonry.defaultProps = {
  columnsCountBreakPoints: {
    350: 1,
    750: 2,
    900: 3,
  },
  className: null,
  style: null,
};

export default ResponsiveMasonry;
