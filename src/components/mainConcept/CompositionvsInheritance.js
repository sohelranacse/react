import { Helmet } from 'react-helmet'
import SignUpDialog from './SignUpDialog'

export default function CompositionvsInheritance() {

    function FancyBorder(props) {
        // console.log(props.children);
        return (
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
        );
    }

    function Contacts() {
        return <div className="Contacts" />;
    }
    function Chat() {
        return <div className="Chat" />;
    }
    function SplitPane(props) {
        return (
            <div className="SplitPane row">
                <div className="SplitPane-left col-md-6 col-sm-6" style={{ background: "gray", height: "100px" }}>
                    {props.left}
                </div>
                <div className="SplitPane-right col-md-6 col-sm-6" style={{ background: "silver", height: "100px" }}>
                    {props.right}
                </div>
            </div>
        );
    }

    function Dialog(props) {
        return (
            <FancyBorder color="blue">
                <h4 className="Dialog-title">
                    {props.title}
                </h4>
                <p className="Dialog-message">
                    {props.message}
                </p>
            </FancyBorder>
        );
    }
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Composition vs Inheritance</title>
            </Helmet>
            <h2 className="mb-4">Composition vs Inheritance</h2>
            <p>React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>

            <FancyBorder color="blue">
                <h4 className="Dialog-title">
                    Welcome
                </h4>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>

            <hr />
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                }
            />

            <hr />
            <h6>Specialization</h6>
            <p>In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:</p>
            <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!" />
            <hr />
            <p>Composition works equally well for components defined as classes:</p>
            <SignUpDialog />

            <hr />
            <h6>So What About Inheritance?</h6>
            <ul>
                <li>At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.</li>
                <li>Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way.</li>
                <li>Remember that components may accept arbitrary props, including primitive values, React elements, or functions.</li>
                <li>If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module.</li>
                <li>The components may import it and use that function, object, or a class, without extending it.</li>
            </ul>
        </div>
    )
}
