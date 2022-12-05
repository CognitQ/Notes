import React from "react";

const ListData = ({ data }) => {
  return (
    <div className="container">
      {data.map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
};

export default ListData;
