import React from 'react'
import "./Card.css"



const Card = (props) => {
    return (
        <div className="class">
            <h2 className="cls-txt">
                {props.stdNum} 
            </h2>
                {props.std}
        </div>
    )
}

export default Card
