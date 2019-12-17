import { Map } from 'immutable'
import { LOADDATA, SETSHOW } from './action-types'

// const defaultState = fromJS({
//   list: [],
//   isShow: localStorage.getItem('isShow') === 'false' ? false : true
// })

const defaultState = Map({
  list: [],
  isShow: localStorage.getItem('isShow') === 'false' ? false : true
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return state.set('list', action.data)
    case SETSHOW:
      return state.set('isShow', action.data)
    default:
      return state
  }
}