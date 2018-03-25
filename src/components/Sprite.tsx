import React, { SFC } from 'react';
import styled from 'styled-components';

type Props = { x: number; y: number; className?: string };

const Sprite: SFC<Props> = ({ x, y, className }) => (
  <svg x={x} y={y} className={className}>
    <circle fill="red" cx={100} cy={100} r={100} />
    <text x={100} y={100}>
      {x}
    </text>
    <text x={150} y={100}>
      {y}
    </text>
  </svg>
);

export default styled(Sprite)`
  background-color: blue;
  border: 1px solid black;
`;
