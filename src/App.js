import React, { useState, useEffect } from "react";
import "./App.css";
import Accordions from "./Components/Acordion";

// API verileri
import ApiObj from "./FetchedApi";

// Apod verileri
import ApodComponent from "./Apod";

const App = () => {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    let counter = prompt("How many media would you like to see ? ");
    const fetchApodData = async () => {
      try {
        const fetchedData = await ApiObj.fetchData(counter); // API'den veri çek
        setApodData(fetchedData);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };

    fetchApodData();
  }, []);

  return (
    <div className="App">
      {apodData.length > 1 ? (
        apodData.map((item, index) => (
          <Accordions key={index} apodData={item} />
        ))
      ) : (
        <p>{apodData.msg}</p>
      )}

      {/* {apodData.length > 1 ? (
        apodData.map((item, index) => (
          <ApodComponent key={index} apodData={item} />
        ))
      ) : (
        <p>{apodData.msg}</p>
      )} */}
    </div>
  );
};

export default App;
