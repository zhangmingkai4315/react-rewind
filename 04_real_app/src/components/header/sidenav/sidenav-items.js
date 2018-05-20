import React from 'react'
import style from './sidenav.css'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome';

const SideNavItems = () => {
  const items = [
    {'text':'Home','icon':'home',link:'/',type:style.option},
    {'text':'News','icon':'file-text-o',link:'/news',type:style.option},
    {'text':'Videos','icon':'play',link:'/videos',type:style.option},
    {'text':'Sign-In','icon':'sign-in',link:'/sign-in',type:style.option},
    {'text':'Sign-Out','icon':'sign-out',link:'/sign-out',type:style.option}
  ]
  return (
      items.map((item,i)=> (<div className={item.type} key={i}>
        <Link to={item.link}>
          <FontAwesome name={item.icon}></FontAwesome>{item.text}
        </Link>
      </div>)
    )
  )
}

export default SideNavItems