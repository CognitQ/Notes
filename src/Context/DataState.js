import DataContext from "./DataContext";
import React, { useState, useEffect } from "react";
const DataState = (props) => {
  //code for fetch  data from api

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
    // localStorage.getItem(setData(data));
    console.log(data);
  }, [data]);

  // const getData = () => {
  //   fetch("http://localhost:3000/Classes")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       fetchData(res);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  // aws fetching ends

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
