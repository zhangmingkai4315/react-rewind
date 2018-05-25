import React, { Component } from 'react'
import SlideTemplates from './slider_template';
import axios from 'axios'

import {API_URL} from '../../config'
class NewsSlider extends Component {
  state = {
    news:[]
  } 
  componentWillMount(){ 
    axios.get(`${API_URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
         .then(res=>{
           this.setState({news:res.data})
         })
  }
  render() {
    return (
      <div>
        <SlideTemplates data={this.state.news} setting={this.props.setting} type={this.props.type}/>
      </div>
    )
  }
}

export default NewsSlider