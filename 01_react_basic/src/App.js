import React,{Component} from 'react'
import {Header, NewsList} from './components'
import db from './db.json'
class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <NewsList db={db}>
          Enjoy coding!
        </NewsList>
      </div>
    )
  }
}

export default App