import React from 'react'

function Box(props) {
  const style = {
    width: props.w || '100%',
    height: props.h || 'fit-content',
    padding: props.p || null,
    paddingLeft: props.pl || null,
    paddingRight: props.pr || null,
    paddingBottom: props.pb || null,
    paddingTop: props.pt || null,
    margin: props.m || null,
    marginLeft: props.ml || null,
    marginRight: props.mr || null,
    marginBottom: props.mb || null,
    marginTop: props.mt || null,
  }
  return <div style={style}>{props.children}</div>
}

export default Box
