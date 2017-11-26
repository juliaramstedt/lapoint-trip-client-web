import React, { Component } from 'react'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dashboard from './components/protected/Dashboard'
import { firebaseAuth } from './config/constants'
import './App.css'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authed: false,
      loading: true,
      user: null
    }
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: {
            displayName: user.email
          }
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render () {
    return this.state.loading ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <Navbar authed={this.state.authed} user={this.state.user}/>
          <div className='container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <PublicRoute authed={this.state.authed} path='/login' component={Login} />
              <PublicRoute authed={this.state.authed} path='/register' component={Register} />
              <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
