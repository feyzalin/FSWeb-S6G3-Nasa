import React from "react";

const ApodComponent = (props) => {
  const { apodData } = props;

  //console.log(apodData);

  return (
    <div className="Apod">
      <h1>{apodData.title}</h1>
      <h2>{apodData.date}</h2>
      <img className="img" src={apodData.url} />
      <p>{apodData.explanation}</p>
    </div>
  );
};

export default ApodComponent;

// object;{8;}
// copyright: " Julien Cadena & Mickael Coulon; Text: Natalia Lewandowska (SUNY Oswego) ";
// date: "2024-02-12";
// explanation: "Planetary nebulae like Heckathorn-Fesen-Gull 1 (HFG1) and Abell 6 in the constellation Cassiopeia are remnants from the last phase of a medium sized star like our Sun. In spite of their shapes, planetary nebulae have nothing in common with actual planets. Located in the bottom left part of the featured photo, HFG1 was created by the binary star system V664 Cas, which consists of a white dwarf star and a red giant star. Both stars orbit their center of mass over about half an Earth day. Traveling with the entire nebula at a speed about 300 times faster than the fastest train on Earth, V664 Cas generates a bluish arc shaped shock wave. The wave interacts most strongly with the surrounding interstellar medium in the areas where the arc is brightest. After roughly 10,000 years, planetary nebulae become invisible due to a lack of ultraviolet light being emitted by the stars that create them. Displaying beautiful shapes and structures, planetary nebulae are highly desired objects for astrophotographers.";
// hdurl: "https://apod.nasa.gov/apod/image/2402/Hfg1Abell6_CadenaCoulon_6140.jpg";
// media_type: "image";
// service_version: "v1";
// title: "HFG1 & Abell 6: Planetary Nebulae";
// url: "https://apod.nasa.gov/apod/image/2402/Hfg1Abell6_CadenaCoulon_1080.jpg";
