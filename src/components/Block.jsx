import React from 'react';

export default function Block({ color }) {
  const styling = React.useMemo(() => getStyling(color), [color]);

  return <div style={styling} />;
}

function getStyling(color) {
  return {
    display: 'inline-block',
    backgroundColor: color,
    height: 20,
    width: 20,
  };
}
