import React, { Component } from 'react'

import { Route, Switch} from 'react-router-dom';

import Control from './compomnents/control'
import Uncontrol from './compomnents/uncontrol'
import User from './compomnents/user'
import Layout from './layout'


class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={User}/>
          <Route path="/user" exact component={User}/>
          <Route path="/control" exact component={Control}/>
          <Route path="/uncontrol" exact component={Uncontrol}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes