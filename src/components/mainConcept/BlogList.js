import React from 'react'

export default function BlogList(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-6">{sidebar}</div>
                <div className="col-md-6">{content}</div>
            </div>
        </div>
    );
}
