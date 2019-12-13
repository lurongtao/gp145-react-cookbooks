import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default (Category) => {
  return props => {
    return (
      <CSSTransition
        in={true}
        timeout={1000}
      >
        <Category {...props}></Category>
      </CSSTransition>
    )
  }
}