import React, { Component } from 'react'

export default class ToggleEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn: 'OFF'
        }
    }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    render() {
        return (
            <button className="btn btn-info" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
