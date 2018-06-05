import React, { Component } from 'react'
import Axios from 'axios';
import { API_URL } from '../../../config'
import styles from '../../styles.css';
import Header from './header';
import VideoRelated from './video_related'

import { firebaseLoop, firebaseDB, firebaseTeams , firebaseVideos} from '../../../../firebase'

class VideoArticle extends Component {

  state = {
    article:[],
    team:[],
    teams:[],
    related:[]
  }

  componentWillMount(){
    // Axios.get(`${API_URL}/videos?id=${this.props.match.params.id}`)
    //      .then(res=>{
    //       //  console.log(res.data)
    //         let article = res.data[0]
    //         Axios.get(`${API_URL}/teams?id=${article.team}`)
    //              .then(res=>{
    //                this.setState({article,
    //                team:res.data});

    //                this.getRelated();
    //              })
            
    //      })

    firebaseDB.ref(`videos/${this.props.match.params.id}`).once("value")
    .then(snapshot=>{
      let article = snapshot.val();

      firebaseTeams.orderByChild("teamId")
      .equalTo(article.team)
      .once("value")
      .then(snap=>{
        const team = firebaseLoop(snap);
        this.setState({
          article,
          team
        })
      })
    })


  }

  getRelated = ()=>{
    firebaseTeams.once("value").then(snap=>{
      const teams = firebaseLoop(snap)
      firebaseVideos.orderByChild("team")
        .equalTo(this.state.article.team)
        .limitToFirst(3).once('value')
        .then(s=>{
          const related = firebaseLoop(s)
          this.setState({
            teams,
            related:related
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