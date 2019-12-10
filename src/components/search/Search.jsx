import React, { Component } from 'react'
import searchImg from 'assets/images/search.png'
import { SearchWrap, InputWrap } from './styledSearch'

export default class Search extends Component {
  render() {
    return (
      <SearchWrap {...this.props}>
        <InputWrap {...this.props}>
          <img src={searchImg} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </InputWrap>
      </SearchWrap>
    )
  }
}
