import React from 'react'

export default ({text, order}) => {
  const vMax = Math.max(window.innerWidth, window.innerHeight)
  const height = window.innerHeight / 6
  return (
    <svg viewBox={`0 0 ${window.innerWidth} ${height}`}>
      <text
        // fontSize={`${window.innerWidth / 12}px`}
        fill={'#ffe682'}
        textAnchor={'middle'}
        // letterSpacing={'.25vw'} //trythis
        // letterSpacing={`${window.innerWidth / 400}px`}
        // dx={'8%'}
        x={window.innerWidth / 2}
        y={height / 2}
        dy={height / 6}
      >
        {text}
      </text>
    </svg>
  )
}
