import React, { Component } from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import axios from 'axios';

import NewsCard from './newscard'
import {API_URL} from '../../config';
import Button from '../Buttons/button'
import styles from './style.css'

class NewsList extends Component {
  state = {
    items:[],
    teams:[],
    start:this.props.start,
    end: this.props.start + this.props.amount
  }
  
  componentWillMount(){
    this.request(this.state.start,this.state.end)
  }

  request = (start,end) =>{
    if(this.state.teams.length<1){
      axios.get(`${API_URL}/teams`).then(res=>{
        this.setState({teams:res.data})
      })
    }
    axios.get(`${API_URL}/articles?_start=${start}&_end=${end}`)
    .then(res=>{
      this.setState({
        items:[...this.state.items,...res.data],
        start:end,
        end: end+this.props.amount
      })
    })
  }

  loadmore=()=>{
    this.request(this.state.start,this.state.end)
  }

  renderNews(type){
    let template = null;
    switch(type){
      case('card'):
        template = this.state.items.map( (item,i) => (
        <CSSTransition 
          classNames={{
            enter:styles["fade-enter"],
            enterActive:styles["fade-enter-active"]
          }}
          key={i} 
          timeout={500}>
          <NewsCard item={item} teams={this.state.teams}/>
        </CSSTransition>
        ))
        break;
      default:
        template=null;
    }
    return template
  }

  
  render () {
    return (
      <div>
        <TransitionGroup className="news_list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button 
          type="loadmore"
          title="Load More News"
          click={()=>{this.loadmore()}}
        >
        </Button>
      </div>
    )
  }
}

export default NewsList