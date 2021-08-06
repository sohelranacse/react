import React from 'react'

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, i) =>
        <li key={i}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
