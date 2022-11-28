import React from 'react'
import Card from './Card'
import "./Class.css";
// import {  useNavigate } from "react-router-dom";

const division=[1,2,3,4,5,6,7,8,9,10]

const Classes = () => {
// const navigate= useNavigate();

  return (
    <div>
      <div className="container">
        <h2 className='header'>Select Class:</h2>
        <div className="row">

        {division.map((d)=>
        <Card className="col-lg-2" stdNum={d} std="Standard"/>)}
      </div>
    </div>
    </div>
  )
}

export default Classes
