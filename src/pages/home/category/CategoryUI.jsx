import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Search from '@/search/Search'

import Cate from '@/category/Category'

import { CateWrap } from './styledCategory'

export default props => {
  return (
    <CateWrap>
      <Header></Header>
      <Search
        width="0"
        radius={5}
        background="#efefef"
        wrapperBgc="#fff"
      ></Search>
      <div className="cate-box">
        <Route 
          path="/category"
          children={() => (
            <Cate
              defaultItem="热门"
              type="category"
            ></Cate>
          )}
        />
        <Route
          path="/material"
          children={() => (
            <Cate
              defaultItem="肉类"
              type="material"
            ></Cate>
          )}
        />
        <Redirect
          from="/"
          to="/category"
        />
      </div>
    </CateWrap>
  )
}