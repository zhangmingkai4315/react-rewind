import React from 'react'
import {Link} from 'react-router-dom'
import CardInfo from '../CardInfo/cardinfo';

import styles from './style.css'

const NewsCard = ({item,index,teams}) => {
  let teamName=''
  if(teams.length>0){
    for(var i=0;i<teams.length;i++){
      if(teams[i].id===item.team){
        teamName=teams[i]['name']
        break;
      }
    }
  }
  return (
    <div className={styles.newslist_item}>
      <Link to={`/articles/${item.id}`}>
        <CardInfo date={item.date} teamName={teamName}/><h2>{item.title}</h2>
      </Link>
    </div>
  )
}

export default NewsCard