import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { get } from 'utils/http'
import { HotcatWrap, HotCatHeader } from './styledCookbook'

export default class HotCate extends Component {
  state = {
    hotList: []
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/hotcate'
    })

    let data = result.map(value => ({
      key: value.id,
      title: value.title,
      icon: value.img
    }))

    data.push({
      key: 'a001',
      title: '更多...',
      icon: ''
    })

    this.setState({
      hotList: data
    })
  }

  _renderItem = dataItem => (
    <div className='item'>
      {
        dataItem.icon && <img src={dataItem.icon} alt=""/>
      }
      <span>{dataItem.title}</span>
    </div>
  )
  
  render() {
    return (
      <HotcatWrap>
        <HotCatHeader
          width="0 0 1px 0"
        >热门分类</HotCatHeader>
        <Grid data={this.state.hotList}
          columnNum={3}
          hasLine={false}
          renderItem={this._renderItem}
        />
      </HotcatWrap>
    )
  }
}
