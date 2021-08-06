import React, { Component } from 'react'

export default class LifecycleClock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {

        function FormattedDate(props) {
            return <h4>Formatted date is {props.date.toLocaleTimeString()}.</h4>;
        }
        
        return (
            <div>
                <h4>{this.state.date.toLocaleTimeString()}.</h4>
                <FormattedDate date={this.state.date} />
            </div>
            
        )
    }
}
