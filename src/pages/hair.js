import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
function Hair() { 
    
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState("No Response Yet");
  const [uploadFile, setUpload] = useState("upload_placeholder.png");
  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      var s = URL.createObjectURL(i);
      setUpload(s);
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res = await fetch("https://backend.agpro.co.in/hair", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    setResponse(res.label === 1 ? "Combed": "Uncombed");
  };
    return (
      <div><nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Clothes</a>
                          <a href="/hair" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">hair</a>
                          <a href="/weather" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Weather</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container px-2 mx-auto">
              <div className="flex flex-wrap">
                  <div className="w-full px-2 flex-1">
                      <div className="max-w-sm text-white rounded-lg shadow-md dark:text-gray-800 dark:border-gray-700">
                          <h6 className="text-black-700 text-xl font-bold px-4">Input</h6>
                          <img
                              id="inputImage"
                              className="p-8 rounded-t-lg"
                              src={uploadFile}
                              alt="product"
                          />
                          <input
                              type="file"
                              {...register("file")}
                              onChange={handleChange}
                          />
                      </div>
                  </div>
                  <div className="w-full px-4 flex-1 grid content-center">
                      <button
                          className="text-black active:text-black-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                          onClick={handleSubmit}
                      >
                          Predict
                      </button>
                  </div>
                  <div className="w-full px-4 flex-1 grid content-center">
                      <div className="w-full px-4 flex-1">
                          <div className="max-w-sm text-white rounded-lg shadow-md dark:text-gray-800 dark:border-gray-700">
                              <h6 className="text-black-700 text-xl font-bold px-4">
                                  Output:
                              </h6>
                              <p className="text-black-700 text-xl font-bold px-4">
                                  {response}
                              </p>                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </form>
  </div>
    )  
}  
export default Hair;