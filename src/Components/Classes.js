import React, { useContext } from "react";
import Card from "./Card";
import "./Class.css";
import DataContext from "../Context/DataContext";

const Classes = () => {
  const a = useContext(DataContext);
  console.log(a);
  return (
    <div>
      <div className="container">
        <h2 className="header">Select Class:</h2>
        <div className="row">
          {a.map((i) => (
            <Card className="col-lg-2" stdNum={i.CName} std="Standard" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
