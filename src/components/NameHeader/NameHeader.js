import React from 'react'

export default ({text, order}) => {
  const height = window.innerHeight / 6
  return (
    <svg viewBox={`0 0 ${window.innerWidth} ${height}`}>
      <text
        fill={'#ffe682'}
        textAnchor={'middle'}
        x={window.innerWidth / 2}
        y={height / 2}
        // dx={'8%'}
        dy={height / 3}
      >
        {text}
      </text>
    </svg>
  )
}
