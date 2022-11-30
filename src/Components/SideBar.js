import React, { useState } from "react";
import "./SideBar.css";
import Button from "./Button";
import Axios from "axios";
import { v4 as uuid } from "uuid";

const SideBar = () => {
  const url = "http://localhost:3000/Classes";

  const unique_id = uuid();

  const [stdClass, setStdClass] = useState("");
  const [subClass, setSubClass] = useState("");
  const [sub, setSub] = useState("");

  const handleClassSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, { Cid: "50", CName: "stdClass" }).then((res) => {
      console.log(res.stdClass);
    });
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    console.log(sub);
    console.log(subClass);
  };

  const handleNotesSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add Classes
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form onSubmit={handleClassSubmit}>
                <input
                  type="text"
                  // name="classname"
                  onChange={(e) => setStdClass(e.target.value)}
                />
                <Button type="submit">Add Class</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Add Subjects
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form onSubmit={handleSubjectSubmit}>
                <input
                  type="text"
                  name="subName"
                  onChange={(e) => setSub(e.target.value)}
                />
                <select onChange={(e) => setSubClass(e.target.value)}>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                </select>
                <Button type="submit">Add Subject</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Notes
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form onSubmit={handleNotesSubmit}>
                <input type="text" />
                <select onChange={(e) => setSubClass(e.target.value)}>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                </select>
                <select onChange={(e) => setSubClass(e.target.value)}>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                </select>
                <Button type="submit">Add Class</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
