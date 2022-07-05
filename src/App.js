import React from "react";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState("No Response Yet");
  const [responseImg, setResponseImg] = useState([]);
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

    const res = await fetch("https://backend.agpro.co.in/", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    setResponse(res.label);
    setResponseImg(res.suggestion);
  };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container px-2 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-2 flex-1">
              <div className="max-w-sm text-white rounded-lg shadow-md dark:text-gray-800 dark:border-gray-700">
                <h6 className="text-black-700 text-xl font-bold px-4">Input</h6>
                {/* <input type="file" ref={hiddenFileInput} accept="image/*" style={{ display: 'none' }} onChange={handleChange} />
                            <button onClick={handleClick}>
                                <img id="inputImage" className="p-8 rounded-t-lg" src={uploadFile} alt="product image" />
                            </button> */}
                <img
                  id="inputImage"
                  className="p-8 rounded-t-lg"
                  src={uploadFile}
                  alt="product image"
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
                  <div className="grid grid-rows-2 
                     grid-flow-col gap-4 auto-cols-auto">
                    {responseImg.map((item, index) => {
                      return (
                        <img
                          className="p-8 rounded-t-lg"
                          src={item}
                          height="300"
                          width="300"
                          alt="product image"
                          key={index}
                        />
                      );
                    })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
