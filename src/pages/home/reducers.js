import { LOADDATA } from './action-types'

const defaultState = {
  list: []
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        list: action.data
      }
    default:
      return state
  }
}