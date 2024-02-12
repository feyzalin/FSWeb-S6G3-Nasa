import React, { useState, useEffect } from "react";
import "./App.css";

import ApiObj from "./FetchedApi"; // API verileri
import ApodComponent from "./Apod"; // Apod verileir

const App = () => {
  const [apodData, setapodData] = useState([]);

  useEffect(async () => {
    // todo get data from api..
    const fetchData = await ApiObj.fetchData(5);
    setapodData(fetchData);
  }, []);

  return (
    <div className="App">
      apodData ?<p>Loading...</p>
    </div>
  );
};

export default App;
