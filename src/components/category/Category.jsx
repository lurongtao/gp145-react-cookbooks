import React, { Component } from 'react'
import { CateWrap } from './styledCategory'
import { get } from 'utils/http'

export default class Category extends Component {
  state = {
    datasource: null,
    defaultItem: '',
    currentItem: ''
  }

  static getDerivedStateFromProps(props, state) {
    if (props.defaultItem !== state.defaultItem) {
      return {
        defaultItem: props.defaultItem,
        currentItem: props.defaultItem
      }
    }
    return null
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/cate'
    })
    this.setState({
      datasource: result.data
    })
  }

  handleItemClick = (item) => {
    return () => {
      this.setState({
        currentItem: item
      })
    }
  }

  render() {
    let { type } = this.props
    let items = this.state.datasource 
      ? Object.keys(this.state.datasource[type]) 
      : []
    let contents = this.state.datasource 
      ? this.state.datasource[type][this.state.currentItem] 
      : []

    return (
      <CateWrap
        width="1px 0 0 0"
      >
        <div>
          <ul>
            {
              items.map(value => {
                return (
                  this.state.currentItem === value 
                    ? <li key={value} className="active"><span>{value}</span></li> 
                    : <li key={value} onClick={this.handleItemClick(value)}>{value}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <ul>
            {
              contents.map((value) => (
                <li key={value}>{value}</li>
              ))
            }
          </ul>
        </div>
      </CateWrap>
    )
  }
}
