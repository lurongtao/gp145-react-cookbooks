import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header'
import Search from '@/search/Search'

import Classify from '@/category/Category'
import Material from '@/category/Category'

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
        <Switch>
          <Route 
            path="/category"
            render={() => (
              <Classify
                defaultItem="热门"
                type="category"
              ></Classify>
            )}
          />
          <Route
            path="/material"
            render={() => (
              <Material
                defaultItem="肉类"
                type="material"
              ></Material>
            )}
          />
          <Redirect
            from="/"
            to="/category"
          />
        </Switch>
      </CateWrap>
    )
  }
}
