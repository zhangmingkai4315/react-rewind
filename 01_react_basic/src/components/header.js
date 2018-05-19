import React from 'react'
import '../css/styles.css'
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      header:'default header'
    }
  }
  onHeaderClick(){
      console.log('header clicked')
  }
  onInputChange=(e)=>{
      console.log('input changed')
      this.setState({
        header:e.target.value
      })
  }
  render(){
    const newDate = new Date()
    const author = {
      name : 'mike',
      city: 'beijing'
    }
    const styles={
      background:""
    }
    if(this.state.header ===""){
      styles.background="red"
    }else{
      styles.background=""
    }
    return (
     <div className="header" style={styles}>
      <p className="header_title" onClick={this.onHeaderClick}>{this.state.header}</p>
      <p className="header_small">Author : {author.name}@{author.city} Date:{newDate.getFullYear()}</p>
      <input type="text" onChange={this.onInputChange}/>
    </div>     
    )
  }
}


export default Header