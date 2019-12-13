import React, { Component } from 'react'
import { Switch } from 'antd-mobile'

export default class Profile extends Component {
  state = {
    checked: true
  }

  render() {
    return (
      <div style={{padding: 20}}>
        是否显示地图：
        <Switch
          checked={this.state.checked}
          onChange={checked => {
            this.setState(state => ({
              checked: !state.checked
            }))
          }}
        />
      </div>
    )
  }
}
