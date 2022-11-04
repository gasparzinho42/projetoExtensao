import React from 'react'

function Row(props) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    width: props.w || '100%',
    height: props.h || 'fit-content',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'center',
    gap: props.gap || null,
    rowGap: props.rowGap || null,
    colGap: props.colGap || null,
  }
  return <div style={style}>{props.children}</div>
}

export default Row
