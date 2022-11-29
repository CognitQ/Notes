import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Cards = ({ stdNum, stdId, std }) => {
  const navigate = useNavigate();

  return (
    <div className="class" onClick={() => navigate(`/${stdId}/${stdNum}`)}>
      <h2 className="cls-txt">{stdNum}</h2>
      {std}
    </div>
  );
};

export default Cards;
