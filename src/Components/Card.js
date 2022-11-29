import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.css"



const Card = ({stdNum, std}) => {
    const navigate = useNavigate();


    return (
        <div className="class" onClick={()=>
            navigate(`/class/${stdNum}`)
            // navigate("/class/Subject")
        }
        >
            <h2 className="cls-txt">
                {stdNum} 
            </h2>
                {std}
        </div>
    )
}

export default Card
