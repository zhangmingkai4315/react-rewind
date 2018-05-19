import React from 'react'
import { css } from 'glamor'




const NewsItem = ({news}) => {
  let news_item = css({
    padding:'20px',
    boxSizing:'border-box',
    borderBottom:'1px solid grey',
    ':hover':{
      color:'red'
    },
    '@media(max-width: 500px)':{
      color:'yellow'
    }

  });
  let item_hover = css({
    ':hover':{
      backgroundColor:"grey"
    }
  })

  return (
    <div className={`${news_item} ${item_hover}`}>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  )
}

export default NewsItem