import React from "react";

const NoteCard = ({ stdNum, std }) => {
  return (
    <div className="class">
      <h2 className="cls-txt">{stdNum}</h2>
      {std}
    </div>
  );
};

export default NoteCard;
