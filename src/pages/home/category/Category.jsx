import React, { Component } from 'react'
import Header from './Header'
import Search from '@/search/Search'

export default class Category extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Search
          width="0"
          radius={5}
          background="#efefef"
          wrapperBgc="#fff"
        ></Search>
      </>
    )
  }
}
