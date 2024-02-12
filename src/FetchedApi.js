// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

const api_key = "2eaQ2SCg0hlohQgOCeoLkxmtcTgc2sC1Of4chlr9";

let ApiObj = {
  fetchData: async function (count) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let result = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${count}",
      requestOptions
    ).then((response) => response.text());

    return JSON.parse(result);
  },
};

export default ApiObj;
