import React from 'react'
import { Switch, Button } from 'antd-mobile'

export default props => {
  return (
    <>
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
      <div style={{padding: 20}}>
        扫描二维码：
        <Button onClick={props.scanQRCode}>扫描</Button>
      </div>
    </>
  )
}