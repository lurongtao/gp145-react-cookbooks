import React, { Component } from 'react'

import { connect } from 'react-redux'
import { SETSHOW } from '../action-types'

import ProfileUI from './ProfileUI'

@connect(state => ({
  checked: state.home.isShow
}), dispatch => ({
  changeStatus(checked) {
    dispatch({
      type: SETSHOW,
      data: checked
    })
  }
}))
class Profile extends Component {
  render() {
    return <ProfileUI {...this.props}></ProfileUI>
  }
}

export default Profile