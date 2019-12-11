import React, { Component } from 'react'
import Header from './Header'
import Search from '@/search/Search'

import Classify from '@/category/Category'

import { CateWrap } from './styledCategory'

export default class Category extends Component {
  render() {
    return (
      <CateWrap>
        <Header></Header>
        <Search
          width="0"
          radius={5}
          background="#efefef"
          wrapperBgc="#fff"
        ></Search>
        <Classify></Classify>
      </CateWrap>
    )
  }
}
