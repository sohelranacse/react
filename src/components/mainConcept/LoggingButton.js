import React, { Component } from 'react'

export default class LoggingButton extends Component {
    handleClick = () => {
        console.log('this is:', this);
        alert(this);
    }

    handleClick2() {
        console.log('this is:', this);
        alert(this);
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleClick}>
                    Button 1
                </button>
                &nbsp;
                <button className="btn btn-info" onClick={() => this.handleClick2()}>
                    Button 2
                </button>

                {/* <h6>Passing Arguments to Event Handlers</h6> */}
                {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */}
                {/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
            </div>
        )
    }
}
