import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <iframe 
        src="/cookbook/map.html" 
        frameBorder="0" 
        title="ifrm"
        style={{
          width: '100%',
          height: '100%'
        }}
      ></iframe>
    )
  }
}
