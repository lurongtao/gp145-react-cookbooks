import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setShow } from '../action-creators'


import ProfileUI from './ProfileUI'

@connect(state => ({
  checked: state.getIn(['home', 'isShow'])
}), dispatch => ({
  changeStatus(checked) {
    dispatch(setShow(checked))
  }
}))
class Profile extends Component {
  state = {
    pic: ''
  }

  scanQRCode = () => {
    wx.ready(() => {
      wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          alert(result)
        }
      })
    })
  }

  takePicture = () => {
    wx.ready(() => {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          var result = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          alert(result)
          // this.setState({
          //   pic: result['localIds'][0]
          // })
        }
      })
    })
  }

  render() {
    return <ProfileUI {...this.props} 
      scanQRCode={this.scanQRCode} 
      takePicture={this.takePicture}
      pic={this.state.pic}
    ></ProfileUI>
  }
}

export default Profile