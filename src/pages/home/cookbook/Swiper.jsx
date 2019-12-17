import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'

import { SwiperWrap } from './styledCookbook'

import { GETLIST } from '../action-types'

const mapState = state => {
  // console.log(state.getIn(['home', 'list']))
  return ({
    list: state.getIn(['home', 'list'])
  })
}

const mapDispatch = dispatch => ({
  loadData() {
    dispatch({
      type: GETLIST,
      url: '/api/list'
    })
  }
})

@connect(mapState, mapDispatch)
class Swiper extends Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    // console.log(this.props.list)
    return (
      <SwiperWrap>
        {
          this.props.list.length && (
            <Carousel
              autoplay={true}
              infinite
            >
              {
                this.props.list.slice(0, 5).map((value) => {
                  return (
                    <img key={value.id} src={value.img} alt=""/>
                  )
                })
              }
            </Carousel>
          )
        }
      </SwiperWrap>
    )
  }
}

export default Swiper
