import React, { Component } from 'react'
import { HeaderWrap, SliderArea } from './styledCategory'
import { withRouter } from 'react-router-dom'

@withRouter
class Header extends Component {
  state = {
    dir: this.getPath(this.props)
  }

  getPath(props) {
    return props.location.pathname === '/' ? 'category' : props.location.pathname.substr(1)
  }

  handleClick = dir => {
    return () => {
      this.setState({
        dir
      })
      this.props.history.push(`/${dir}`)
    }
  }

  render() {
    return (
      <HeaderWrap>
        <SliderArea
          width='1px'
          color="#fff"
          radius={15}
        >
          <li
            onClick={this.handleClick('category')}
            className={this.state.dir === 'category' ? 'active' : ''}
          >分类</li>
          <li
            onClick={this.handleClick('material')}
            className={this.state.dir === 'material' ? 'active' : ''}
          >食材</li>
          <li className={`slider ${this.state.dir === 'material' ? 'right' : ''}`}></li>
        </SliderArea>
      </HeaderWrap>
    )
  }
}

export default Header