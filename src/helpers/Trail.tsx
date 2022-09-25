import { a, useTrail } from '@react-spring/web';
import React from 'react';
const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 2, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    height: open ? 280 : 0,
    from: { opacity: 0, x: 0, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className='trailsText' style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
