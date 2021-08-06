import React from 'react'
import { Helmet } from 'react-helmet'

export default function Error() {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Not found</title>
            </Helmet>
            <h2 className="mb-4">404 not found</h2>
        </div>
    )
}
