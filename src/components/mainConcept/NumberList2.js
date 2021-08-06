import React from 'react'

export default function NumberList2(props) {
    function ListItem(props) {
        // Correct! There is no need to specify the key here:
        return <li>{props.value}</li>;
    }
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
