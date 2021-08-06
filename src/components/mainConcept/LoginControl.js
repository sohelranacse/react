import React, { Component } from 'react'

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }


    render() {
        function UserGreeting(props) {
            return <h5>Welcome back!</h5>;
        }

        function GuestGreeting(props) {
            return <h5>Please sign up.</h5>;
        }

        function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }

        function LoginButton(props) {
            return (
                <button className="btn btn-success" onClick={props.onClick}>
                    Login
                </button>
            );
        }

        function LogoutButton(props) {
            return (
                <button className="btn btn-warning" onClick={props.onClick}>
                    Logout
                </button>
            );
        }

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}
