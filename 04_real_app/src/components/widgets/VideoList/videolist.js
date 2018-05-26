import React, { Component } from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import axios from 'axios';

import {API_URL} from '../../config';
import Button from '../Buttons/button'
import VideoTemplate from './video_template'
import styles from './styles.css'

class VideoList extends Component {
  state = {
    teams:[],
    videos:[],
    start:this.props.start,
    end: this.props.start + this.props.amount
  }
  componentWillMount(){
    this.request(this.state.start,this.state.end)
  }
  renderTitle =(title)=>{
    return title ? <h3><strong>NBA </strong>Videos</h3>:''
  }
  request = (start,end) =>{
    if(this.state.teams.length<1){
      axios.get(`${API_URL}/teams`).then(res=>{
        this.setState({teams:res.data})
      })
    }
    axios.get(`${API_URL}/videos?_start=${start}&_end=${end}`)
    .then(res=>{
      this.setState({
        videos:[...this.state.videos,...res.data],
        start:end,
        end: end+this.props.amount
      })
    })
  }
  loadmore=()=>{
    this.request(this.state.start,this.state.end)
  }
  renderButton=()=>{
    return this.props.loadMore?(
      <Button 
      type="loadmore"
      title="Load More Videos"
      click={()=>{this.loadmore()}}/>
    ):(
      <Button type="linkTo" title="More Videos" linkTo="/videos"/>
    );
  }

  renderVideos = (type) =>{
    let template = null;
    switch(type){
      case('card'):
        template = <VideoTemplate data = {this.state.videos} teams ={this.state.teams} /> 
        break;
      default:
        template=''

    }
    return template
  }

  render () {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle(true)}
        {this.renderVideos(this.props.type)}
        {this.renderButton() }
      </div>
    )
  }
}

export default VideoList