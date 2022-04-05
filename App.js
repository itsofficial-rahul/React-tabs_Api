import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [value, setvalue] = useState(0);
  const data = "https://course-api.com/react-tabs-project";
  const fetchApi = async () => {
    const data1 = await fetch(data);
    const data2 = await data1.json();
    console.log(data2);

    setjobs(data2);
    setloading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="App">
      {jobs.map((item, index) => {
        return (
          <div>
            <button onClick={() => setvalue(index)}>{item.company}</button>
          </div>
        );
      })}
      <h1>{title} </h1>
      <h4>{dates}</h4>
      {duties.map((item) => {
        return (
          <div>
            <li>{item}</li>
          </div>
        );
      })}
    </div>
  );
}
export default App;
