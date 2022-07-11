import React, { useEffect } from 'react';
import { useState } from "react";
function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/current.json?key=d0b793ed611b46c884c41545221107&q=bhubaneswar&aqi=yes", {
      method: "GET",
    }).then((res) => res.json()).then((res) => {
      console.log(res);
      setWeatherData(res)
      setLoader(false)
    });
  }, []);
  return (
    <div>{loader ? <p>Loading Data</p> : <>
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
              <h6 className="text-black-700 text-xl font-bold px-4">Weather Report</h6>
              <p>Temperature: {weatherData.current.temp_c} C</p>
              <p>Day/Night: {weatherData.current.is_day ? "Day" : "Night"}</p>
              <p>Wind kph: {weatherData.current.wind_kph} </p>
              <p>wind Dir: {weatherData.current.wind_dir} </p>
              <p>Humidity: {weatherData.current.humidity} </p>
              <p>Temperature: {weatherData.current.temp_c} </p>
            </div>
          </div>
        </div>
      </div>
    </>}
    </div>
  )
}
export default Weather;