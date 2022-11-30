import DataContext from "../Context/DataContext";
import React, { useState, useContext } from "react";
import "./SideBar.css";
import Button from "./Button";
import { v4 as uuid } from "uuid";

const AddSubject = () => {
  const d = useContext(DataContext);
  const unique_id = uuid();

  const [subClass, setSubClass] = useState();
  const [sub, setSub] = useState("");

  const subData = {
    Sid: unique_id,
    SName: sub,
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    d.filter((i) => i.CName === subClass).filter((j) =>
      j.Subject.push(subData)
    );
    console.log(d);
  };
  return (
    <form onSubmit={handleSubjectSubmit}>
      <input
        type="text"
        name="subName"
        onChange={(e) => setSub(e.target.value)}
      />
      <select onChange={(e) => setSubClass(e.target.value)}>
        <option> ---select Class---</option>
        {d.map((i) => (
          <option key={i.Cid} value={i.CName}>
            {i.CName}
          </option>
        ))}
      </select>
      <Button type="submit">Add Subject</Button>
    </form>
  );
};

export default AddSubject;
