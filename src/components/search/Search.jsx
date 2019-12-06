import React, { Component } from 'react'
import searchImg from 'assets/images/search.png'
import { SearchWrap, InputWrap } from './styledSearch'

export default class Search extends Component {
  render() {
    return (
      <SearchWrap>
        <InputWrap
          width="1px"
          color="#ee742f"
          radius={5}
        >
          <img src={searchImg} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </InputWrap>
      </SearchWrap>
    )
  }
}
