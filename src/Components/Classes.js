import React from 'react'
import Card from './Card'
import "./Class.css";

const Classes = () => {
  return (
    <div>
      <div className="container">
        <h2 className='header'>Select Class:</h2>
        <div className="row">

        <Card className="col-lg-2" stdNum="1st" std="Standard" />
        <Card className="col-lg-2" stdNum="1st" std="Standard" />
      </div>
    </div>
    </div>
  )
}

export default Classes
