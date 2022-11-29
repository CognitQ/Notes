import DataContext from "./DataContext";
import React, { useState, useEffect } from "react";
const DataState = (props) => {
  //code for fetch  data from api
  const [data, fetchData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/Classes")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // aws fetching ends

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
export default DataState;
