import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Linkform() {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [url, seturl] = useState("");
  const Addnowbtn = async (event) => {
    try {
      event.preventDefault();
      const responce = await axios.post(
        "http://127.0.0.1:3001/api/u1/addnewlink",
        {
          title,
          url,
        }
      );
      if (responce.data.success) {
        navigate("/dashbord");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className=" w-11/12 m-auto rounded-2xl p-4 my-2 bg-blue-700">
        <input
          className="block w-full h-12 border-2 border-sky-500 m-2 rounded-lg text-xl"
          type="text"
          placeholder="Enter Your Title"
          required
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="block w-full h-12 border-2 border-sky-500 m-2 rounded-lg text-xl"
          type="text"
          placeholder="Enter Your Url"
          required
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <div className=" m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>

        <button
          className="border-2 border-sky-500 w-full h-30 m-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-3xl justify-center hover:text-white"
          type="Submit"
          onClick={(e) => Addnowbtn(e)}
        >
          Add now
        </button>
      </div>
      <div>{/* <Showlink/> */}</div>
    </>
  );
}

export default Linkform;
