import DataContext from "../Context/DataContext";
import React, { useState, useContext } from "react";
import "./SideBar.css";
import Button from "./Button";
import { v4 as uuid } from "uuid";
// import Axios from "axios";

const AddClass = () => {
  const d = useContext(DataContext);
  const unique_id = uuid();

  // const url = "http://localhost:3000/Classes";

  const [stdClass, setStdClass] = useState("");
  const classData = {
    Cid: unique_id,
    CName: stdClass,
  };

  const handleClassSubmit = (e) => {
    e.preventDefault();
    d.push(classData);
    // Axios.post(url, { classData });
    console.log(d);
  };

  return (
    <form onSubmit={handleClassSubmit}>
      <input type="text" onChange={(e) => setStdClass(e.target.value)} />
      <Button type="submit">Add Class</Button>
    </form>
  );
};

export default AddClass;
