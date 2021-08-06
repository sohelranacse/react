import { Helmet } from 'react-helmet'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import WarningBanner from './WarningBanner'

export default function ConditionalRendering() {

    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;
        // console.log(unreadMessages.length);
        return (
            <div>
                <h6>Hello!</h6>
                {unreadMessages.length > 0 &&
                    <h5>
                        You have {unreadMessages.length} unread messages.
                    </h5>
                }
            </div>
        );
    }
    const messages = ['React', 'Re: React', 'Re:Re: React', 'PHP'];

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Conditional Rendering</title>
            </Helmet>

            <h2 className="mb-4">Conditional Rendering</h2>

            <Greeting isLoggedIn={true} />

            <hr />
            <h6>Element Variables</h6>
            <p>You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.</p>
            <LoginControl />

            <hr />

            <h6>Inline If with Logical &amp;&amp; Operator</h6>
            <p>You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element</p>
            <Mailbox unreadMessages={messages} />

            <hr />
            <h6>Inline If-Else with Conditional Operator</h6>
            <p>Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.</p>

            <hr />
            <h6>Preventing Component from Rendering</h6>
            <p>In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.</p>
            <WarningBanner />
        </div>
    )
}
