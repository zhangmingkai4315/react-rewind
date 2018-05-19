import React from 'react'
import {Link} from 'react-router-dom'
const Profile = (props) => {
  const redirectUser = ()=>{
    props.history.push('/')
  }
  return (
    <div>
      Profile
      <Link to={{
        pathname:`${props.match.url}/posts`
      }}>Take me to /profile/posts</Link>
      {redirectUser()}
    </div>
  )
}

export default Profile