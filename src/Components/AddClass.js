import DataContext from "../Context/DataContext";
import React, { useState, useContext } from "react";
import "./SideBar.css";
import Button from "./Button";
import { v4 as uuid } from "uuid";
// import ListData from "./ListData";
// import Axios from "axios";

const AddClass = () => {
  const { data, setData } = useContext(DataContext);

  const unique_id = uuid();
  const d = data;
  // const url = "http://localhost:3000/Classes";

  const [stdClass, setStdClass] = useState("");
  const classData = {
    Cid: unique_id,
    CName: stdClass,
    Subject: [],
  };

  const handleClassSubmit = (e) => {
    e.preventDefault();
    d.push(classData);
    const f = [...d];
    setData(f);

    // Axios.post(url, { classData });
  };

  return (
    <>
      <form onSubmit={handleClassSubmit}>
        <input type="text" onChange={(e) => setStdClass(e.target.value)} />
        <Button type="submit">Add Class</Button>
      </form>

      {/* <ListData data={d} /> */}
      {/* <div className="container">
        {d.map((i) => (
          <div key={i.Cid} className="border border-dark">
            {" "}
            {i.CName}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default AddClass;
