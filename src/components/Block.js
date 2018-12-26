import React from 'react';

export default function Block({ color }) {
  const styling = React.useMemo(() => getStyling(color), [color]);

  return <div style={styling} />;
}

Block.defaultProps = {
  color: 'grey',
};

function getStyling(color) {
  return {
    backgroundColor: color,
    height: 20,
    width: 20,
  };
}
