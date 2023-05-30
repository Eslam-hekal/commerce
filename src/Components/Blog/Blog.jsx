import React, { Component } from 'react'
import About from '../About/About'

export default class Blog extends Component {
  render() {
    let {name,age,phone,gender} = this.props.informations
   
    return (
      <>
      <h1>Hello From Blog Components</h1>
      <About/>
      <h5><span>Name :</span>{name}</h5>
      <h5><span>Age :</span>{age}</h5>
      <h5><span>Phone :</span>{phone}</h5>
      <h5><span>Gender :</span>{gender}</h5>
      <button onClick={this.props.welcome} className='btn btn-info'>Click</button>
    
        
      </>
    )
  }
}
