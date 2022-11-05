import React from 'react'

function Col(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: props.w || '100%',
    height: props.h || 'fit-content',
    justifyContent: props.justifyContent || null,
    alignItems: props.alignItems || null,
    rowGap: props.rowGap || null,
    colGap: props.colGap || null,
    position: props.position || null,
  }
  return <div style={style}>{props.children}</div>
}

export default Col
