"use client";
import React, { useState, useEffect } from "react";

// Define a type for the weather data (adjust this as needed)
interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
  // Add other properties as needed
}

function getCurrentDate() {
    const currentDate = new Date();
    const options = { month: "long" as const };
    const monthName = currentDate.toLocaleString("en-US", options);
    const date = new Date().getDate() + ", " + monthName;
    return date;
}



const Yweather: React.FC = () => {
  const date = getCurrentDate();
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const [city, setCity] = useState<string>("");

  async function fetchData(cityName: string) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/weather?address=" + cityName
      );
      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchDataByCoordinates(latitude: number, longitude: number) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/weather?lat=${latitude}&lon=${longitude}`
      );
      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          fetchDataByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  }, []);

  return (
    <main className="">
      <article className="">
        <form
          className=""
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            fetchData(city);
          }}
        >
          <input
            className=""
            placeholder="Enter city name"
            type="text"
            id="cityName"
            name="cityName"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="" type="submit">
            Search
          </button>
        </form>
        {weatherData && weatherData.weather && weatherData.weather[0] ? (
          <>
            <div className="">
              <div className="">
                {weatherData?.weather[0]?.description === "rain" ||
                weatherData?.weather[0]?.description === "fog" ? (
                  <i className=""></i>
                ) : (
                  <i className=""></i>
                )}
              </div>
              <div className="">
                <div className="">
                  <span>
                    {(weatherData?.main?.temp - 273.5).toFixed(2) +
                      String.fromCharCode(176)}
                  </span>
                </div>
                <div>
                  {weatherData?.weather[0]?.description?.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="">{weatherData?.name}</div>
            <div className="">{date}</div>
          </>
        ) : (
          <div className="">Loading...</div>
        )}
      </article>
    </main>
  );
};

export default Yweather;
