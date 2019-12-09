import { combineReducers } from 'redux'
import { reducers as list } from 'pages/home/'

export default combineReducers({
  home: list
})