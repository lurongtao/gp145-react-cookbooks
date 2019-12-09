import React from 'react'
import { Provider } from 'react-redux'
import store from './store/'
import 'assets/styles/reset.css'
import Layout from './pages/home/Layout'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    )
  }
}

export default App;
