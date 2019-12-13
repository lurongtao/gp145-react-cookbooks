import React from 'react'
import { Switch } from 'antd-mobile'

export default props => {
  return (
    <div style={{padding: 20}}>
      是否显示地图：
      <Switch
        checked={props.checked}
        onChange={checked => {
          props.changeStatus(checked)
          localStorage.setItem('isShow', checked)
        }}
      />
    </div>
  )
}