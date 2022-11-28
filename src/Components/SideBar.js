import React from "react";
import "./SideBar.css";
import Button from "./Button";

const SideBar = () => {
  const handleClassSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
  };

  const handleNotesSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-5">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <form onSubmit={handleClassSubmit}>
                <input type="text" name="classname" />
                <Button type="submit">Add Class</Button>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <form onSubmit={handleSubjectSubmit}>
                <input type="text" name="classname" />
                
                <Button type="submit">Add Class</Button>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
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
