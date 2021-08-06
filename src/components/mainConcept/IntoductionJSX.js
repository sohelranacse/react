import React from 'react'
import { Helmet } from 'react-helmet'

export default function IntoductionJSX() {

    // const element = <p>JSX Testing element.</p>;

    const name = 'Sohel Rana';
    const element = (
        <p>
            Hello, {name}
        </p>
    );


    function formatName(user) {
        if (user) {
            return user.firstName + ' ' + user.lastName;
        }
        return <span>Nothing</span>;

    }
    const user = {
        firstName: 'Rabeya',
        lastName: 'Rana',
        avatarUrl: 'https://scontent.fdac66-1.fna.fbcdn.net/v/t1.6435-9/220267147_1497410067276094_3779583136786866779_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGJR8KG5XqW0fKhaprN-KIEn5j0DRz-YpCfmPQNHP5ikIV0l_w0n2znRo4BSkbn07dFpssI8-vxFPRTUoOavD3h&_nc_ohc=e2SuWKM9ukUAX84Pkdl&_nc_ht=scontent.fdac66-1.fna&oh=afb29bfab3d2bbfa8bb903daa77d8143&oe=612F3523'
    };

    const element2 = (
        <p>
            Hello, {formatName(user)}!
        </p>
    );
    const element3 = (
        <p>
            Hello, {formatName()}!
        </p>
    );


    const element4 = <img src={user.avatarUrl} alt="Cover" />;


    const element5 = (
        <div>
            <h5>Hello!</h5>
            <p>Good to see you here.</p>
        </div>
    );


    const title = user.potentiallyMaliciousInput;
    // This is safe:
    const element6 = <p>{title}</p>;


    const element_obj = (
        <p className="greeting">
            Hello, world!
        </p>
    );

    const element8 = React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello, world!'
    );
    console.log(element8);

    const element9 = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    };    
    console.log(element9);

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Introduction JSX</title>
            </Helmet>
            <h2 className="mb-4">Introduction JSX</h2>
            {element}
            <p>It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.</p>
            <p>JSX produces React “elements”. </p>

            <p>React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>

            <div>
                <strong>Embedding Expressions in JSX</strong>
                <div>Hello, {name}</div>
                You can put any valid JavaScript expression inside the curly braces in JSX.<br />
                For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
                {element2}
            </div>

            <div>
                <strong>JSX is an Expression Too</strong>
                {element3}
            </div>

            <div>
                <strong>Specifying Attributes with JSX</strong><br />
                {element4}
            </div>
            <hr />
            <div>
                <strong>Specifying Children with JSX</strong>
                {element5}
            </div>

            <div>
                <strong>JSX Prevents Injection Attacks</strong>
                {element6}
            </div>

            <div>
                <strong>JSX Represents Objects</strong>
                <p>Babel compiles JSX down to React.createElement() calls.</p>
                {element_obj}
                <br />
                {element8.props.children}
            </div>


        </div>
    )
}
