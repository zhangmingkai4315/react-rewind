import React, { Component } from 'react'

class Control extends Component {
  render () {
    return (
      <div className="container">
        <form>
          <div className="form_element">
            <label>Enter Name</label>
            <input type="text"/>
          </div>

          <div className="form_element">
            <label>Enter LastName</label>
            <input type="text"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Control