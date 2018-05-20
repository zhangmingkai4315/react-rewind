import React from 'react'

import style from './header.css'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import SideNav from './sidenav/sidenav'

const Header = (props) => {
  const navBars = () =>(
    <div className={style.bars}>
      <FontAwesome name="bars" 
                  style={{color:"#dfdfdf",padding:"10px",cursor:"pointer"}}>
      </FontAwesome>
    </div>
  )
  const logo = () =>{
    <Link to="/" className={style.logo}>
      <img alt="nba" src="/images/nba_logo.png"/>
    </Link>
  }
  return (
    <header className={style.header}>
      <SideNav {...props}/>
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}


export default Header