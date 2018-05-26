import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardinfo';

const VideoTemplate = (props) => {
  return props.data.map((item,i)=>{
    const team = props.teams.find((i)=>{
      return i.id === item.team;
    })
    let teamName = ''
    if(team){
      teamName=team.name
    }
    // console.log(teamName)
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className={styles.videoListItem_wrapper}>
          <div className={styles.left} style={{background:`url(/images/videos/${item.image})`}}>
            <div></div>
          </div>
          <div className={styles.right}>
            <CardInfo date={item.date} teamName={teamName}/>
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    )
  })
}

export default VideoTemplate