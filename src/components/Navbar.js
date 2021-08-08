import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// import $ from 'jquery';

export default class Navbar extends Component {

    sidebarCollapse() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("active");
        // $('#sidebar').toggleClass('active');
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={this.sidebarCollapse}>
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>

                <div className="p-3">
                    <h1><NavLink exact to="/" className="logo">React</NavLink></h1>

                    <ul className="list-unstyled components mb-4">
                        <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>

                        <li className="active">
                            <a href="#mainConcept" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Main Concept</a>
                            <ul className="collapse list-unstyled" id="mainConcept">
                                <li><NavLink exact to="/hello-world" activeClassName="selected">Hello World</NavLink></li>
                                <li><NavLink exact to="/intorduction-jsx" activeClassName="selected">Introduction JSX</NavLink></li>
                                <li><NavLink exact to="/rendering-rlements" activeClassName="selected">Rendering Elements</NavLink></li>
                                <li><NavLink exact to="/components-and-props" activeClassName="selected">Components and Props</NavLink></li>
                                <li><NavLink exact to="/state-and-lifecycle" activeClassName="selected">State and Lifecycle</NavLink></li>
                                <li><NavLink exact to="/handling-events" activeClassName="selected">Handling Events</NavLink></li>
                                <li><NavLink exact to="/conditional-rendering" activeClassName="selected">Conditional Rendering</NavLink></li>
                                <li><NavLink exact to="/lists-and-keys" activeClassName="selected">Lists and Keys</NavLink></li>
                                <li><NavLink exact to="/forms" activeClassName="selected">Forms</NavLink></li>
                                <li><NavLink exact to="/lifting-state-up" activeClassName="selected">Lifting State Up</NavLink></li>
                                <li><NavLink exact to="/composition-vs-inheritance" activeClassName="selected">Composition vs Inheritance</NavLink></li>
                                <li><NavLink exact to="/thinking-in-react" activeClassName="selected">Thinking in React</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#AdvancedGuides" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Advanced Guides</a>
                            <ul className="collapse list-unstyled" id="AdvancedGuides">
                                <li><NavLink exact to="/accessibility" activeClassName="selected">Accessibility</NavLink></li>
                                <li><NavLink exact to="/code-splitting" activeClassName="selected">Code-Splitting</NavLink></li>
                                <li><NavLink exact to="/context" activeClassName="selected">Context</NavLink></li>
                                <li><NavLink exact to="/error-boundaries" activeClassName="selected">Error Boundaries</NavLink></li>
                                <li><NavLink exact to="/forwarding-refs" activeClassName="selected">Forwarding Refs</NavLink></li>
                                <li><NavLink exact to="/fragments" activeClassName="selected">Fragments</NavLink></li>
                                <li><NavLink exact to="/higher-order-components" activeClassName="selected">Higher-Order Components</NavLink></li>
                                <li><NavLink exact to="/integrating-with-other-libraries" activeClassName="selected">Integrating with Other Libraries</NavLink></li>
                                <li><NavLink exact to="/optimizing-performance" activeClassName="selected">Optimizing Performance</NavLink></li>
                                <li><NavLink exact to="/jsx-in-Depth" activeClassName="selected">JSX In Depth</NavLink></li>
                                <li><NavLink exact to="/profiler-api" activeClassName="selected">Profiler API</NavLink></li>
                                <li><NavLink exact to="/react-without-es6" activeClassName="selected">React Without ES6</NavLink></li>
                                <li><NavLink exact to="/react-without-jsx" activeClassName="selected">React Without JSX</NavLink></li>
                                <li><NavLink exact to="/reconciliation" activeClassName="selected">Reconciliation</NavLink></li>
                                <li><NavLink exact to="/refs-and-the-dom" activeClassName="selected">Refs and the DOM</NavLink></li>
                                <li><NavLink exact to="/render-props" activeClassName="selected">Render Props</NavLink></li>
                                <li><NavLink exact to="/static-type-checking" activeClassName="selected">Static Type Checking</NavLink></li>
                                <li><NavLink exact to="/strict-mode" activeClassName="selected">Strict Mode</NavLink></li>
                                <li><NavLink exact to="/typechecking-with-propTypes" activeClassName="selected">Typechecking With PropTypes</NavLink></li>
                                <li><NavLink exact to="/uncontrolled-components" activeClassName="selected">Uncontrolled Components</NavLink></li>
                                <li><NavLink exact to="/web-components" activeClassName="selected">Web Components</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#ApiReference" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">API Referrence</a>
                            <ul className="collapse list-unstyled" id="ApiReference">
                                <li><NavLink exact to="/react-api" activeClassName="selected">React Top-Level API</NavLink></li>
                                <li><NavLink exact to="/react-component" activeClassName="selected">React.Component</NavLink></li>
                                <li><NavLink exact to="/react-dom" activeClassName="selected">ReactDOM</NavLink></li>
                                <li><NavLink exact to="/react-dom-server" activeClassName="selected">ReactDOMServer</NavLink></li>
                                <li><NavLink exact to="/dom-elements" activeClassName="selected">DOM Elements</NavLink></li>
                                <li><NavLink exact to="/events" activeClassName="selected">SyntheticEvent</NavLink></li>
                                <li><NavLink exact to="/test-utils" activeClassName="selected">Test Utilities</NavLink></li>
                                <li><NavLink exact to="/test-renderer" activeClassName="selected">Test Renderer</NavLink></li>
                                <li><NavLink exact to="/javascript-environment-requirements" activeClassName="selected">JavaScript Environment Requirements</NavLink></li>
                                <li><NavLink exact to="/glossary" activeClassName="selected">Glossary of React Terms</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#Hooks" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hooks</a>
                            <ul className="collapse list-unstyled" id="Hooks">
                                <li><NavLink exact to="/introducing-hooks" activeClassName="selected">Introducing Hooks</NavLink></li>
                                <li><NavLink exact to="/hooks-at-a-glance" activeClassName="selected">Hooks at a Glance</NavLink></li>
                                <li><NavLink exact to="/using-the-state-hook" activeClassName="selected">Using the State Hook</NavLink></li>
                                <li><NavLink exact to="/using-the-effect-hook" activeClassName="selected">Using the Effect Hook</NavLink></li>
                                <li><NavLink exact to="/rules-of-hooks" activeClassName="selected">Rules of Hooks</NavLink></li>
                                <li><NavLink exact to="/building-your-own-hooks" activeClassName="selected">Building Your Own Hooks</NavLink></li>
                                <li><NavLink exact to="/hooks-api-reference" activeClassName="selected">Hooks API Reference</NavLink></li>
                                <li><NavLink exact to="/hooks-faq" activeClassName="selected">Hooks FAQ</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#Testing" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Testing</a>
                            <ul className="collapse list-unstyled" id="Testing">
                                <li><NavLink exact to="/testing-overview" activeClassName="selected">Testing Overview</NavLink></li>
                                <li><NavLink exact to="/testing-recipes" activeClassName="selected">Testing Recipes</NavLink></li>
                                <li><NavLink exact to="/testing-environments" activeClassName="selected">Testing Environments</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#Experiment" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Experiment</a>
                            <ul className="collapse list-unstyled" id="Experiment">
                                <li><NavLink exact to="/counting" activeClassName="selected">Counting</NavLink></li>
                                <li><NavLink exact to="/todo" activeClassName="selected">Todo</NavLink></li>
                                <li><NavLink exact to="/todo-line-through" activeClassName="selected">Todo Line Through</NavLink></li>
                                <li><NavLink exact to="/todo-list" activeClassName="selected">Todo List</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink exact to="/about" activeClassName="selected">About</NavLink></li>
                        <li><NavLink exact to="/readme" activeClassName="selected">Readme</NavLink></li>
                    </ul>

                    <div className="footer">
                        <p>
                            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Source</a> | &nbsp;
                            <a href="https://programmingd.com" target="_blank" rel="noopener noreferrer">Github</a> | &nbsp;
                            <a href="https://github.com/sohelranacse/react" target="_blank" rel="noopener noreferrer">Sohel</a>
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
}
