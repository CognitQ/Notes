import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import { useParams } from "react-router-dom";
import NoteCard from "./NoteCard";
import "./Card.css";

const QpNotes = () => {
  const d = useContext(DataContext);
  const { classes, subject } = useParams();
  return (
    <div>
      <div className="container">
        <h2 className="header">Downloads:</h2>
        <div className="row">
          {d
            .filter((sub) => sub.CName === classes)
            .map((i) =>
              i.Subject.filter((sub2) => sub2.SName === subject).map((j) =>
                j.Notes.map((k) => (
                  <NoteCard
                    key={k.Nid}
                    className="col-lg-2"
                    stdNum={k.Nid}
                    std={k.Nname}
                  />
                ))
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default QpNotes;
