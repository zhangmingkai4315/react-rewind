import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/layout/layout';
import NewsArticle from './components/Articles/News/Post'
import NewsMain from './components/Articles/News/main'
import VideoMain from './components/Articles/Videos/main'
import VideosArticle from './components/Articles/Videos/Video'
import DashBoard from './components/dashboard/dashboard'
import SignIn from './components/signin/signin'
class Routes extends Component {
  render () {
    return ( 
      <Layout user={this.props.user}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" exact component={NewsMain}/>
          <Route path="/videos" exact component={VideoMain}/>
          <Route path="/articles/:id" exact component={NewsArticle}/> 
          <Route path="/videos/:id" exact component={VideosArticle}/>
          <Route path="/sign-in" exact component={SignIn}/>
          <Route path="/dashboard" exact component = {DashBoard}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes