import React, { useState } from "react";
import "./SideBar.css";
import Button from "./Button";

const SideBar = () => {
  const [stdClass, setStdClass] = useState("");
  const [subInputs, setSubInputs] = useState([
    {
      subName: "",
      subClassName: "",
    },
  ]);

  const handleSubChange = (e) => {
    const newvalues = subInputs.map((i) => {
      i[e.target.name] = i[e.target.value];
      return i;
    });
    setSubInputs(newvalues);
  };

  const handleClassSubmit = (e) => {
    e.preventDefault();
    console.log(stdClass);
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    console.log(subInputs);
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
                  name="classname"
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
                  onChange={(e) => handleSubChange(e)}
                />
                <select
                  name=""
                  onChange={(e) => handleSubChange(e)}
                >
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
                <input type="text" name="classname" />
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
