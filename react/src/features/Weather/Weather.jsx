import { useEffect, useState } from "react";

const apiKey = '1d260c5f4897b555ae217809965ad963';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&appid=${apiKey}`;

function kToC(degK) {
  return (degK - 273.15).toFixed(1);
}

export function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  // if(!data) {
  //   return <strong>Loading...</strong>;
  // }
  
  return (
    <>
      <h1>Weather</h1>
      {!data && <strong>Loading...</strong>}
      {data && (
        <>
          <p>Temp: {kToC(data.main.temp)} &deg;C</p>
          <p>Min: {kToC(data.main.temp_min)} &deg;C</p>
          <p>Max: {kToC(data.main.temp_max)} &deg;C</p>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
        </>
      )}
    </>
  );
}
