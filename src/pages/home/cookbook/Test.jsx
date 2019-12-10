import React, { Component } from 'react'

function connect(mapState, mapDispatch) {
  return (target) => {
    target.prototype.conn = {
      title: mapState({title: 'a'}).title,
      setTitle: mapDispatch().setTitle
    }
  }
}

@connect(state => {
  return {
    title: state.title
  }
}, () => {
  return {
    setTitle() {
      console.log(0)
    }
  }
})
class Test extends Component {
  render() {
    console.log(this.conn.title)
    this.conn.setTitle()
    return (
      <div>
        test
      </div>
    )
  }
}

export default Test
