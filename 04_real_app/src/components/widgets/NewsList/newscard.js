import React from 'react'
import {Link} from 'react-router-dom'
import styles from './style.css'

const NewsCard = ({item,index}) => {

  return (
    <div className={styles.newslist_item}>
      <Link to={`/articles/${item.id}`}>
        <h2>{item.title}</h2>
      </Link>
    </div>
  )
}

export default NewsCard