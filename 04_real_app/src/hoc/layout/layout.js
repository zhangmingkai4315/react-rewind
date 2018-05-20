import React, { Component } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './layout.css'

class Layout extends Component {
  state = {
    showNav: false
  }
  toggleSideNav =(action)=>{
    this.setState({
      showNav:action
    })
  }
  render () {
    return (
      <div>
        <Header showNav={this.state.showNav} 
                onOpenNav={()=> this.toggleSideNav(true)}
                onHideNav={()=> this.toggleSideNav(false)}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Layout