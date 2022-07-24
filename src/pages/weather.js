import React, { useEffect } from 'react';
import { useState } from "react";
function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/current.json?key=d0b793ed611b46c884c41545221107&q=bhubaneswar&aqi=yes", {
      method: "GET",
    }).then((res) => res.json()).then((res) => {
      console.log(res.current);
      setWeatherData(res)
      setLoader(false);
    });
  }, []);
  return (
    <div>{loader ? <p  className="text-red-700">Loading Data</p> : <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Clothes</a>
                  <a href="/hair" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Hair</a>
                  <a href="/weather" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Weather</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container px-2 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-2 flex-1">
            <div className="max-w-sm text-white rounded-lg shadow-md dark:text-gray-800 dark:border-gray-700">
              <h6 className="text-red-700 text-xl font-bold px-4">Weather Report</h6>
              <p  className="text-red-700">Temperature: {weatherData.current.temp_c} C</p>
              <p  className="text-red-700">Day/Night: {weatherData.current.is_day ? "Day" : "Night"}</p>
              <p  className="text-red-700">Wind kph: {weatherData.current.wind_kph} </p>
              <p  className="text-red-700">wind Dir: {weatherData.current.wind_dir} </p>
              <p  className="text-red-700">Humidity: {weatherData.current.humidity} </p>
              <p  className="text-red-700">Rain in mm: {weatherData.current.precip_in} </p>
            </div>
            {
              weatherData.current.precip_in > 0.01 ? <div className="max-w-sm text-white rounded-lg shadow-md dark:text-gray-800 dark:border-gray-700">
                Its Raining outside
                <img src="https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/110121865_1724811241003534_2047178005258992955_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=U0Yx6kMjcTQAX8Bb4xN&_nc_ht=scontent.fdel29-1.fna&oh=00_AT_clelG2DunT93mNvR9T1NP3EFkDZnHVzEksmly5XOKkw&oe=62F23C60" alt="asdasd"></img>
              </div> : <></>
            }

          </div>
        </div>
      </div>
    </>}
    </div>
  )
}
export default Weather;