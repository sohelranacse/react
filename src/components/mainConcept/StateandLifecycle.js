import { Helmet } from 'react-helmet'
import Clock from './Clock'
import LifecycleClock from './LifecycleClock'

export default function StateandLifecycle() {
    function TestClock(props) {
        return (
            <div>
                <h5>Hello, world!</h5>
                <h6>It is {props.date.toLocaleTimeString()}.</h6>
            </div>
        );
    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>State and Lifecycle</title>
            </Helmet>

            <h2 className="mb-4">State and Lifecycle</h2>
            <p>In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.</p>

            <TestClock date={new Date()} />

            <p>However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.</p>

            <div>
                <strong>Converting a Function to a Class</strong><br />
                <ul>
                    <li>Create an ES6 class, with the same name, that extends React.Component.</li>
                    <li>Add a single empty method to it called render().</li>
                    <li>Move the body of the function into the render() method.</li>
                    <li>Replace props with this.props in the render() body.</li>
                    <li>Delete the remaining empty function declaration.</li>
                </ul>
                {/* <Clock date={new Date()} /> */}
                <Clock />
            </div>
            
            <div>
                <h6>Adding Lifecycle Methods to a Class</h6>
                <ul>
                    <li>In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.</li>
                    <li>We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.</li>
                    <li>We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.</li>
                    <li>We can declare special methods on the component class to run some code when a component mounts and unmounts:</li>
                </ul>
            </div>
            <LifecycleClock />

            <div>
                <h6>Using State Correctly</h6>
                <p>There are three things you should know about setState().</p>
                <p>State Updates May Be Asynchronous</p>
            </div>

            <div>
                <h6>To show that all components are truly isolated, we can create an App component that renders three Clock's:</h6>
                <LifecycleClock />
                <LifecycleClock />
                <LifecycleClock />
            </div>

        </div>
    )
}