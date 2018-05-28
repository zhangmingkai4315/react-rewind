import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './router'
import './styles.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

export default App