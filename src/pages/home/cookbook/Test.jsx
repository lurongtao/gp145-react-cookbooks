import React, { Component } from 'react'

// 柯里化函数
function connect(mapState, mapDispatch) {
  return Target => {
    return class extends Component {
      render() {
        return (
          <Target
            {...mapState({title: 'hello'})}
            {...mapDispatch()}
          ></Target>
        )
      }
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
    console.log(this.props)
    return (
      <div>
        test
      </div>
    )
  }
}

export default Test
