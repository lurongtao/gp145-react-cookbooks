import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setShow } from '../action-creators'


import ProfileUI from './ProfileUI'

@connect(state => ({
  checked: state.home.isShow
}), dispatch => ({
  changeStatus(checked) {
    dispatch(setShow(checked))
  }
}))
class Profile extends Component {
  render() {
    return <ProfileUI {...this.props}></ProfileUI>
  }
}

export default Profile