import React, { Component } from 'react'

export class ClassComp extends Component {
  render() {
    return (
        <>
        <div  className="CC">
        <h1> This is created Class Components</h1>
        <p>This is done using External CSS</p>
        <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
        </>
    )
  }
}

export default ClassComp