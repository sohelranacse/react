import { Helmet } from 'react-helmet'
import NumberList from './NumberList'
import NumberList2 from './NumberList2'
import BlogList from './BlogList'
import NumberList3 from './NumberList3'

export default function ListsandKeys() {

    // const numbers = [1, 2, 3, 4, 5];
    // const doubled = numbers.map((number) => number * 3);
    // console.log(doubled);

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    console.log(listItems);

    const posts = [
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];


    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Lists and Keys</title>
            </Helmet>

            <h2 className="mb-4">Lists and Keys</h2>
            <p>First, let’s review how you transform lists in JavaScript.</p>
            <ul>
                <li>we use the map() function to take an array of numbers and double their values.</li>
                <li>We assign the new array returned by map() to the variable doubled and log it:</li>
            </ul>
            <hr />

            <h6>Rendering Multiple Components</h6>
            <ul>
                {listItems}
            </ul>

            <hr />
            <h6>Basic List Component</h6>
            <NumberList numbers={numbers} />

            <hr />
            <h6>Keys</h6>
            <ul>
                <li>Keys help React identify which items have changed, are added, or are removed.</li>
                <li>Keys should be given to the elements inside the array to give the elements a stable identity</li>
                <li>We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.</li>
            </ul>
            <NumberList2 numbers={numbers} />

            <hr />
            <h6>Keys Must Only Be Unique Among Siblings</h6>
            <ul>
                <li>Keys used within arrays should be unique among their siblings.</li>
                <li>They don’t need to be globally unique. We can use the same keys when we produce two different arrays</li>
            </ul>
            <BlogList posts={posts} />

            <NumberList3 numbers={numbers} />


        </div>
    )
}
