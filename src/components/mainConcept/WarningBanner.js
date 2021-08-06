import React, { Component } from 'react'

export default class WarningBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        function WarningB(props) {
            if (!props.warn) {
                return null;
            }

            return (
                <div className="warning">
                    Warning!
                </div>
            );
        }
        return (
            <div>
                <WarningB warn={this.state.showWarning} />
                {/* <button className="btn btn-primary" onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button> */}
                {
                    this.state.showWarning
                        ? <button className="btn btn-danger" onClick={this.handleToggleClick}>Hide</button>
                        : <button className="btn btn-info" onClick={this.handleToggleClick}>Show</button>
                }

            </div>
        );
    }
}
