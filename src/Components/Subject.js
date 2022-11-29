import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import { useParams } from "react-router-dom";
import Cards from "./Cards";

const Subject = () => {
  const d = useContext(DataContext);
  const { classes } = useParams();
  return (
    <div>
      <div className="container">
        <h2 className="header">Select Subject:</h2>
        <div className="row">
          {d
            .filter((sub) => sub.CName === classes)
            .map((i) =>
              i.Subject.map((j) => (
                <Cards
                  key={j.Sid}
                  className="col-lg-2"
                  stdNum={j.SName}
                  stdId={classes}
                />
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default Subject;
