import React from 'react'
import { Route, Switch } from 'react-router-dom'

// component routes
import Dashboard from './dashboard'
import Search from './search'
import NotFound from './not-found'

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/search" component={Search} />
    <Route component={NotFound} />
  </Switch>
)
