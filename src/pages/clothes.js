import React, {useEffect} from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
function Clothes() {
    const [loader, setLoader] = useState(true);
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
    useEffect(() => {
        console.log(loader)
    }, [loader])
    const onSubmit = async (data) => {        
        setLoader(true);
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("https://backend.agpro.co.in/", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        setResponse(res.label);
        setResponseImg(res.suggestion);
        setLoader(false);
    };
    return (
        <React.Fragment><nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Clothes</a>
                                <a href="/hair" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Hair</a>
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
                                {/* <input type="file" ref={hiddenFileInput} accept="image/*" style={{ display: 'none' }} onChange={handleChange} />
                            <button onClick={handleClick}>
                                <img id="inputImage" className="p-8 rounded-t-lg" src={uploadFile} alt="product image" />
                            </button> */}
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
                                    <div className="grid grid-rows-2 
                     grid-flow-col gap-4 auto-cols-auto">
                                        {responseImg.map((item, index) => {
                                            return (
                                                <img
                                                    className="p-8 rounded-t-lg"
                                                    src={item}
                                                    height="300"
                                                    width="300"
                                                    alt="product"
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
        </React.Fragment>
    )
}
export default Clothes;