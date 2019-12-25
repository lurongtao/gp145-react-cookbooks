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
  scanQRCode = () => {
    wx.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        alert(result)
      }
    })
  }

  render() {
    return <ProfileUI {...this.props} scanQRCode={this.scanQRCode}></ProfileUI>
  }
}

export default Profile