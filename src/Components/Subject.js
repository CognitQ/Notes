import React from 'react'
import Card from './Card'

const Subject = () => {
    return (
        <div>
            <div className="container">
                <h2 className='header'>Select Subject:</h2>I
                <div className="row">

                    <Card className="col-lg-2" stdNum="Maths" />
                    <Card className="col-lg-2" stdNum="Science" />
                </div>
            </div>
        </div>
    )
}

export default Subject
