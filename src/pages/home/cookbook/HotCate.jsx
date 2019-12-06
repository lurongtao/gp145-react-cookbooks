import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

import { HotcatWrap, HotCatHeader } from './styledCookbook'

const data1 = Array.from(new Array(9)).map(() => ({
  title: 'ok',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class HotCate extends Component {
  render() {
    return (
      <HotcatWrap>
        <HotCatHeader
          width="0 0 1px 0"
        >热门分类</HotCatHeader>
        <Grid data={data1}
          columnNum={3}
          hasLine={false}
          renderItem={dataItem => (
            <div className='item'>
              <img src={dataItem.icon} alt=""/>
              <span>{dataItem.title}</span>
            </div>
          )}
        />
      </HotcatWrap>
    )
  }
}
