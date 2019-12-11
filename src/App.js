import React from 'react'
import { Provider } from 'react-redux'
import store from './store/'
import { BrowserRouter as Router } from 'react-router-dom'

import 'assets/styles/reset.css'
import Layout from './pages/home/Layout'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout></Layout>
        </Router>
      </Provider>
    )
  }
}

export default App;
