import { Helmet } from 'react-helmet'
import FilterableProductTable from './FilterableProductTable'

export default function ThinkinginReact() {
    const PRODUCTS = [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ];
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Thinking in React</title>
            </Helmet>
            <h2 className="mb-4">Thinking in React</h2>
            <p>React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.</p>
            <p>One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.</p>
            <h6>Start With A Mock</h6>
            <p>Imagine that we already have a JSON API and a mock from our designer. </p>

            <FilterableProductTable products={PRODUCTS} />

            <hr />
            <ul>
                <li>You have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity.</li>
                <li>To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.</li>
                <li>Props are a way of passing data from parent to child.</li>
                <li>If you’re familiar with the concept of state, don’t use state at all to build this static version.</li>
                <li>There are two types of “model” data in React: props and state.</li>
            </ul>

            <p>Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you’re used to, remember that code is read far more than it’s written, and it’s less difficult to read this modular, explicit code.</p>
            <p>As you start to build large libraries of components, you’ll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink.</p>
        </div>
    )
}
