import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let {id,name,phone,gender,salary} = this.props.info
    console.log(this.props);
    return (
      <>
      <div className='col-md-4'>
        <div className='bg-light p-5 rounded-3 border'>
        <h6><span>Id :</span>{id}</h6>
        <h6><span>Name :</span>{name}</h6>
        <h6><span>Phone :</span>{phone}</h6>
        <h6><span>Gender :</span>{gender}</h6>
        <h6><span>Salary :</span>{salary}</h6>
        <button onClick={()=>{this.props.delete(this.props.empIndex)}} className='btn btn-outline-danger w-100'>Delete</button>
        <button onClick={()=>{this.props.increase(this.props.empIndex)}}  className='btn btn-outline-warning mx-3 mt-2'>Increse Salary</button>
        <button onClick={()=>{this.props.decrease(this.props.empIndex)}}  className='btn btn-outline-info mt-2'>Decrease Salary</button>

        </div>
      </div>
      </>
    )
  }
}


