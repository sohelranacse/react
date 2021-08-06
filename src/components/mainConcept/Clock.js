import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: new Date()
        }
    }
    
    render() {
        return (
            <div>
                {/* <h5>{this.props.date.toLocaleTimeString()}</h5> */}
                <strong>Adding Local State to a Class</strong><br />
                <p>We will move the date from props to state in three steps:</p>
                <ol>
                    <li>Create an ES6 class, with the same name, that extends React.Component.</li>
                    <li>Add a class constructor that assigns the initial this.state:</li>
                    <li>Remove the date prop from the Clock element:</li>
                </ol>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}