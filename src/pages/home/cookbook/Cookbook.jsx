import React, { Component } from 'react'
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/search/Search'
import HotCate from './HotCate'
import HotList from './HotList'

export default class Cookbook extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Swiper></Swiper>
        <Search
          width="1px"
          color="#ee742f"
          radius={5}
          wrapperBgc="transparent"
        ></Search>
        <HotCate></HotCate>
        <HotList></HotList>
      </>
    )
  }
}
