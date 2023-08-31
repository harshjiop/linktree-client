import React, { useState } from "react";

function Editlink({ id }) {
  // const [savedata, setsavedata] = useState([]);
  const editmylink = async (e) => {
    console.log("id12", id);
    try {
      e.preventDefault();
      console.log("click editmylink1");
    } catch (error) {
      console.log("note editmylink ");
    }
  };
  return (
    <div>
      {/* {savedata?.map((s) => {
            return ( */}
      <div className=" w-11/12 m-auto rounded-2xl p-4 my-2 bg-blue-700">
        <input
          className="block w-full h-12 border-2 border-sky-500 m-2 rounded-lg text-xl"
          type="text"
          defaultValue="golu"
          placeholder="Enter Your title"
          required
        />
        <input
          className="block w-full h-12 border-2 border-sky-500 m-2 rounded-lg text-xl"
          type="text"
          // value={"helllo"}
          placeholder="Enter Your Url"
          defaultValue="golu"
          required
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
          onClick={(e) => editmylink(e)}
        >
          Update
        </button>
      </div>
      {/* );
          })} */}
    </div>
  );
}

export default Editlink;
