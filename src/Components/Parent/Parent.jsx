import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state = {
        informationList: [
            {
                id: 1,
                name: "mohamed",
                phone: 1221,
                gender: "male",
                salary: 5000

            },
           
            {
                id: 2,
                name: "Ahmed",
                phone: 1221,
                gender: "male",
                salary: 5000

            },
            {
                id: 3,
                name: "Ali",
                phone: 1221,
                gender: "male",
                salary: 5000

            },
            {
                id: 4,
                name: "Samy",
                phone: 1221,
                gender: "male",
                salary: 5000

            },
            {
                id: 5,
                name: "mark",
                phone: 1221,
                gender: "male",
                salary: 5000

            },
            {
                id: 6,
                name: "sam",
                phone: 1221,
                gender: "male",
                salary: 5000

            },
            {
                id: 7,
                name: "mohamed",
                phone: 1221,
                gender: "male",
                salary: 5000

            }
        ]

    }

    deleteEmp=(index)=>{
        // Deep Copy From Original List
        let informationList = [...this.state.informationList]
        // Logic 
        informationList.splice(index, 1)
        // update State
        this.setState({informationList})
    }

    increaseSalary=(index)=>{
        //Deep Copy
        let informationList = [...this.state.informationList];
        // logic
        informationList[index].salary+=100
        // update
        this.setState({informationList})

    }
    decreaseSalary=(index)=>{
        //Deep Copy
        let informationList = [...this.state.informationList];
        // logic
        informationList[index].salary-=100
        // update
        this.setState({informationList})

    }
    render() {
        return (
            <>
                <div className='m-auto '>
                    <div className='contianer'>
                        <div className='row gx-2 gy-2'>
                            <h1>Parent Class</h1>
                            {this.state.informationList.map((info, index) => {
                                return <Child 
                                key={index}
                                empIndex={index} 
                                info={info}
                                delete={this.deleteEmp}
                                increase={this.increaseSalary}
                                decrease={this.decreaseSalary}
                                />

                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
