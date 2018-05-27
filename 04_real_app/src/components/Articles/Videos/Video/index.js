import React, { Component } from 'react'
import Axios from 'axios';
import { API_URL } from '../../../config'
import styles from '../../styles.css';
import Header from './header';
import VideoRelated from './video_related'
class VideoArticle extends Component {

  state = {
    article:[],
    team:[],
    teams:[],
    related:[]
  }

  componentWillMount(){
    Axios.get(`${API_URL}/videos?id=${this.props.match.params.id}`)
         .then(res=>{
          //  console.log(res.data)
            let article = res.data[0]
            Axios.get(`${API_URL}/teams?id=${article.team}`)
                 .then(res=>{
                   this.setState({article,
                   team:res.data});

                   this.getRelated();
                 })
            
         })
  }

  getRelated = ()=>{
    Axios.get(`${API_URL}/teams`).then(res => {
      let teams = res.data
      Axios.get(`${API_URL}/videos?q=${this.state.team[0].city}&_limit=3`)
           .then(res=>{
             this.setState({
                teams,
                related: res.data
             })
           })
    })
  }
  render () {
    const article = this.state.article;
    const team = this.state.team;

    return (
      <div>
        <Header teamData={team[0]}/> 
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe title="videoplayer" width="100%" height="300px" src={`http://youtube.com/embed/${article.url}`}>
          </iframe>

          <VideoRelated data={this.state.related} teams={this.state.teams}/>
        </div>
      </div>
    )
  }
}

export default VideoArticle