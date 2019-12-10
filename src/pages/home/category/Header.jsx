import React, { Component } from 'react'
import { HeaderWrap, SliderArea } from './styledCategory'

export default class Header extends Component {
  state = {
    dir: 'left'
  }

  handleClick = dir => {
    return () => {
      this.setState({
        dir
      })
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
            onClick={this.handleClick('left')}
            className={this.state.dir === 'left' ? 'active' : ''}
          >分类</li>
          <li
            onClick={this.handleClick('right')}
            className={this.state.dir === 'right' ? 'active' : ''}
          >食材</li>
          <li className={`slider ${this.state.dir === 'right' ? 'right' : ''}`}></li>
        </SliderArea>
      </HeaderWrap>
    )
  }
}
