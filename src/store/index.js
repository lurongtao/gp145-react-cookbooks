import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import Immutable from 'immutable'

const rootState = Immutable.Map()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  rootState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store