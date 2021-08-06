import React from 'react'

export default function Greeting(props) {
    function UserGreeting(props) {
        return <h5>Welcome back!</h5>;
    }

    function GuestGreeting(props) {
        return <h5>Please sign up.</h5>;
    }

    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
