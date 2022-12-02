import DataContext from "../Context/DataContext";
import React, { useState, useContext } from "react";
import "./SideBar.css";
import Button from "./Button";
import { v4 as uuid } from "uuid";

const AddNotes = () => {
  const { data, setData } = useContext(DataContext);
  const d = data;
  const unique_id = uuid();

  const [note, setNote] = useState();
  const [notesub, setNoteSub] = useState();
  const [noteClass, setNoteClass] = useState();

  const noteData = {
    Nid: unique_id,
    Nname: note,
  };

  const handleNotesSubmit = (e) => {
    e.preventDefault();
    // d.filter((i) => i.CName === noteClass)
    //   .filter((j) => j.Subject.filter((l) => l.SName === notesub))
    //   .filter((k) => k.Notes.push(noteData));
    console.log(
      d
        .filter((i) => i.CName === noteClass)
        .filter((j) => j.Subject.filter((l) => l.SName === notesub))
    );
    setData(d);
  };

  return (
    <form onSubmit={handleNotesSubmit}>
      <input type="text" onChange={(e) => setNote(e.target.value)} />

      <select onChange={(e) => setNoteClass(e.target.value)}>
        <option> ---select Class---</option>
        {d.map((i) => (
          <option key={i.Cid} value={i.CName}>
            {i.CName}
          </option>
        ))}
      </select>

      <select onChange={(e) => setNoteSub(e.target.value)}>
        <option> ---select Subject---</option>
        {d
          .filter((k) => k.CName === noteClass)
          .map((i) =>
            i.Subject.map((j) => (
              <option key={j.Sid} value={j.SName}>
                {j.SName}
              </option>
            ))
          )}
      </select>

      <Button type="submit">Add Notes</Button>
    </form>
  );
};

export default AddNotes;
