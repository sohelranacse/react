import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Counting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    Increment = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }
    Decrement = () => {
        this.setState(
            {
                count: this.state.count - 1
            }
        );
    }

    render() {
        const { count } = this.state;
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <Helmet>
                    <title>Counting</title>
                </Helmet>
                <h3>Count: {count}</h3>
                <button className="btn btn-primary" onClick={this.Increment}>+</button>&nbsp;
                <button className="btn btn-info" onClick={this.Decrement} disabled={count === 0 ? true : false}>-</button>
            </div>
        )
    }
}
