import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SchedulerContainer from './containers/SchedulerContainer'
import ListSchedulerContainer from './containers/ListSchedulerContainer'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SchedulerContainer} />
      <Route path="/list"  component={ListSchedulerContainer} />
    </Switch>
  )
}
