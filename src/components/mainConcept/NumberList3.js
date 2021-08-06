import React from 'react'

export default function NumberList3(props) {
    const numbers = props.numbers;
    
    function ListItem(props) {
        return <li>{props.value}</li>;
    }

    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                    value={number} />
            )}
        </ul>
    );
}
