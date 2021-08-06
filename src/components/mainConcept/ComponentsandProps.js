import { Helmet } from 'react-helmet'
export default function ComponentsandProps(props) {
    function Myfunc(props) {
        return <p>Hello, {props.name}</p>;
    }
    function Welcome(props) {
        return <h6>Hello, {props.name}</h6>;
    }


    function formatDate(date) {
        return date.toLocaleDateString();
    }
    function Avatar(props) {
        return (
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        );
    }
    function UserInfo(props) {
        return (
            <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        );
    }
    function Comment(props) {
        return (
            <div className="Comment">
                <div className="UserInfo">

                    {/* <img className="Avatar"
                        src={props.author.avatarUrl}
                        alt={props.author.name}
                    />                     */}
                    {/* <Avatar user={props.author} /> */}

                    {/* <div className="UserInfo-name">
                        {props.author.name}
                    </div> */}
                    <UserInfo user={props.author} />

                </div>

                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://scontent.fdac66-1.fna.fbcdn.net/v/t1.6435-9/220267147_1497410067276094_3779583136786866779_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGJR8KG5XqW0fKhaprN-KIEn5j0DRz-YpCfmPQNHP5ikIV0l_w0n2znRo4BSkbn07dFpssI8-vxFPRTUoOavD3h&_nc_ohc=e2SuWKM9ukUAX84Pkdl&_nc_ht=scontent.fdac66-1.fna&oh=afb29bfab3d2bbfa8bb903daa77d8143&oe=612F3523',
        },
    };

    // function sum(a, b) {
    //     return a + b;
    // }





    // console.log(props.name);
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Components and Props</title>
            </Helmet>

            <h2 className="mb-4">Components and Props</h2>
            <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components</p>

            <div>
                <strong>Function and Class Components</strong><br />
                Hello, {props.name} <br />
                <Myfunc name="Rabeya" />
            </div>


            <div>
                <strong>Composing Components</strong>
                <p>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.</p>

                <Welcome name="Mukul" />
                <Welcome name="Juwel" />
                <Welcome name="Russel" />
            </div>

            <div>
                <strong>Extracting Components</strong>
                <p>Don’t be afraid to split components into smaller components.</p>
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
            </div>

            <div>
                <strong>Props are Read-Only</strong><br />
                <p>Whether you declare a component as a function or a class, it must never modify its own props.</p>

            </div>
        </div>
    )
}
