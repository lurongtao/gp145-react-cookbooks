import React from 'react'
import { connect } from 'react-redux'

import { TabBar } from 'antd-mobile'

import cookbook from 'assets/images/cookbook.png'
import cookbookActive from 'assets/images/cookbook-active.png'
import location from 'assets/images/location.png'
import locationActive from 'assets/images/location-active.png'
import menu from 'assets/images/menu.png'
import menuActive from 'assets/images/menu-active.png'
import more from 'assets/images/more.png'
import moreActive from 'assets/images/more-active.png'

import { CookBook, Category, Map, Profile } from './index'

@connect((state) => ({
  isShow: state.home.isShow
}))
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0, overflow: 'hidden' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          prerenderingSiblingsNumber={Infinity}
          hidden={this.state.hidden}
        >
          {
            [
              <TabBar.Item
                title="美食大全"
                key="cookbook"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${cookbook}) center center /  28px 28px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${cookbookActive}) center center /  28px 28px no-repeat` }}
                />
                }
                selected={this.state.selectedTab === 'cookbook'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'cookbook',
                  });
                }}
              >
                <CookBook></CookBook>
              </TabBar.Item>,
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${menu}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="分类"
                key="category"
                selected={this.state.selectedTab === 'category'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'category',
                  });
                }}
              >
                <Category></Category>
              </TabBar.Item>,
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${location}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="美食地图"
                key="map"
                selected={this.state.selectedTab === 'map'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'map',
                  });
                }}
              >
                <Map></Map>
              </TabBar.Item>,
              <TabBar.Item
                icon={{ uri: more }}
                selectedIcon={{ uri: moreActive }}
                title="更多"
                key="more"
                selected={this.state.selectedTab === 'more'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'more',
                  });
                }}
              >
                <Profile></Profile>
              </TabBar.Item>
            ].filter((Item, index) => {
              return (index === 2 && this.props.isShow) || index !== 2
            })
          }
        </TabBar>
      </div>
    );
  }
}

export default Layout