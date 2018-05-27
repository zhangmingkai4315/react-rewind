import React, { Component } from 'react'
import Header from './header';
import Axios from 'axios';
import {API_URL} from '../../../config'
import styles from '../../styles.css'

class NewsArticles extends Component {
  state = {
    article:[],
    team:[]
  }

  componentWillMount(){
    Axios.get(`${API_URL}/articles?id=${this.props.match.params.id}`)
         .then(res=>{
          //  console.log(res.data)
            let article = res.data[0]
            Axios.get(`${API_URL}/teams?id=${article.team}`)
                 .then(res=>{
                   this.setState({article,
                   team:res.data});
                 })
         })
  }
  render () {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={styles.articleWrapper}>
        <Header teamData={team[0]} date={article.date} author={article.author}/>
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage} style={{background:`url('/images/articles/${article.image}')`}}>
          </div>
          <div className={styles.articleText}>
            {article.body}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsArticles