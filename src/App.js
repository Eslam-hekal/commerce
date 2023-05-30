import React, { Component } from 'react'
import Blog from './Components/Blog/Blog'
import Parent from './Components/Parent/Parent'

export default class App extends Component {
  state ={
    name:'Mohamed',
    age:23,
    phone:213,
    gender:"Male"
  }

  welcome=()=>{
    alert("Welcome from App Component ")
  }
  render() {
    return (
      <>
       {/* <h1 className='bg-info'>Hello from app</h1>
       <i className="fa fa-address-book" aria-hidden="true"></i>
       <button className='btn btn-danger' onClick={this.welcome}>Click Here</button>
       <Blog welcome={this.welcome} informations={this.state}/> */}
       <Parent/>
      </>
    )
  }
}
