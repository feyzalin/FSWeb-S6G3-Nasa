const ApiObj = {
  apiKey: "PZFKbJy2Kf1sJfXoFn9lUHAdXCOvIRYYTqN6dRKw", // Tek bir anahtar kullanılabilir
  fetchData: async function (count) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let result = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&count=${count}`,
      requestOptions
    ).then((response) => response.json());
    return result;
  },
  // `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&count=${count}`,
};

export default ApiObj;
