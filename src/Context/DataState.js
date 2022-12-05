import DataContext from "./DataContext";
import React, { useState, useEffect } from "react";
const DataState = (props) => {
  const getLocalNotesData = () => {
    const notesData = localStorage.getItem("notesData");

    if (notesData) {
      return JSON.parse(localStorage.getItem("notesData"));
    } else {
      return [
        {
          Cid: 1,
          CName: "1st",
          Subject: [
            {
              Sid: 2,
              SName: "Maths",
              Notes: [
                {
                  Nid: 3,
                  Nname: "NotesBySaurabh",
                },
                {
                  Nid: 4,
                  Nname: "2020QuestionSet",
                },
              ],
            },
            {
              Sid: 5,
              SName: "English",
              Notes: [
                {
                  Nid: 6,
                  Nname: "NotesBySaurabhSir",
                },
                {
                  Nid: 7,
                  Nname: "2021QuestionSet",
                },
              ],
            },
          ],
        },

        {
          Cid: 8,
          CName: "2nd",
          Subject: [
            {
              Sid: 9,
              SName: "Marathi",
              Notes: [
                {
                  Nid: 10,
                  Nname: "NotesBySaurabh",
                },
                {
                  Nid: 11,
                  Nname: "2020QuestionSet",
                },
              ],
            },
            {
              Sid: 12,
              SName: "Computer",
              Notes: [
                {
                  Nid: 13,
                  Nname: "NotesBySaurabhSir",
                },
                {
                  Nid: 14,
                  Nname: "2021QuestionSet",
                },
              ],
            },
          ],
        },
      ];
    }
  };
  const [data, setData] = useState(getLocalNotesData());

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(data));
    console.log(data);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
