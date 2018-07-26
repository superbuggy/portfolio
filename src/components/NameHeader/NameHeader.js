import React from 'react'

export default ({text, order}) => {
  const height = window.innerHeight / 6
  return (
    <svg viewBox={`0 0 ${window.innerWidth} ${height}`} height={height}>
      <text
        fill={'#ffe682'}
        textAnchor={'middle'}
        x={window.innerWidth / 2}
        y={height / 2}
        dy={height / 3}
        paintOrder={'stroke'}
        stroke={'#ffe682'}
        strokeLinejoin={'round'}
        strokeWidth={'12'}
        strokeOpacity={'.15'}
      >
        {text}
      </text>
    </svg>
  )
}
