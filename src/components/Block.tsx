import React from 'react';

type Props = {
  color: string,
}

export default function Block({ color }: Props) {
  const styling = React.useMemo(() => getStyling(color), [color]);

  return <div style={styling} />;
}

function getStyling(color: string) {
  return {
    display: 'inline-block',
    backgroundColor: color,
    height: 20,
    width: 20,
  };
}
