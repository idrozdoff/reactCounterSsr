import React from 'react'
import { Switch, Route } from 'react-router'
import LoadableHOC from '&/utils/LoadableHOC'
const AsyncHome = LoadableHOC({ loader: () => import(/* webpackChunkName: 'Home' */ './containers/Home') })
const AsyncProfile = LoadableHOC({ loader: () => import(/* webpackChunkName: 'Profile' */ './containers/Profile') })

export default function App() {
  return(
    <Switch>
      <Route exact path="/" component={AsyncHome}/>
      <Route path="/profile" component={AsyncProfile} />
    </Switch>
  )
}
