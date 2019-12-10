import React, { Component } from 'react'
import { HotListWrap } from './styledCookbook'
import { connect } from 'react-redux'

@connect((state) => {
  return {
    hotlist: state.home.list
  }
})
class HotList extends Component {
  render() {
    return (
      <HotListWrap>
        <header>精品好菜</header>
        <div>
          {
            this.props.hotlist.slice(0, 10).map(value => (
              <figure key={value.id}>
                <img src={value.img} alt={value.name} />
                <figcaption>
                  <h3>{value.name}</h3>
                  <h5>{value.all_click}浏览 {value.favorites}收藏</h5>
                </figcaption>			
              </figure>
            ))
          }
        </div>
      </HotListWrap>
    )
  }
}

export default HotList