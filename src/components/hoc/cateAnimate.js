import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import 'assets/styles/animation.css'

export default (Category) => {
  const CateAnimate = props => {
    return (
      <CSSTransition
        in={!!props.match}
        timeout={300}
        classNames={{
          enter: 'animated',
          enterActive: props.type === 'category' ? 'slideInLeft' : 'slideInRight',
          exit: 'animated',
          exitActive: props.type === 'category' ? 'slideOutLeft' : 'slideOutRight',
        }}
        mountOnEnter
        unmountOnExit
      >
        <Category {...props}></Category>
      </CSSTransition>
    )
  }

  return withRouter(CateAnimate)
}