import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/layout/layout';
import NewsArticle from './components/Articles/News/Post'
import VideosArticle from './components/Articles/Videos/Video'
class Routes extends Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/articles/:id" exact component={NewsArticle}/> 
          <Route path="/videos/:id" exact component={VideosArticle}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes