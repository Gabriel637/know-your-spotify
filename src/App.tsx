// eslint-disable-next-line no-use-before-define
import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
      <GlobalStyles />
    </>
  )
}

export default App
