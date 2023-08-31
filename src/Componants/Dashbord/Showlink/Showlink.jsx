import React, { useEffect, useState } from "react";
import axios from "axios";
import Editlink from "../Editlink/Editlink";
function Showlink({ id, title, url, webavtar }) {
  const [Edit, setEdit] = useState(false);
  const [removedValue, setRemovedValue] = useState("");

  // const editmylink = async (e) => {
  //   e.preventDefault();
  //   setEdit(!Edit);
  //   console.log("click editmylink");
  // };
  const deletemylink = async (e) => {
    try {
      e.preventDefault();
      await setRemovedValue(e.currentTarget.id);

      const responce = await axios.delete(
        "http://127.0.0.1:3001/api/u1/addnewlink",
        {
          data: {
            removedid: await removedValue,
          },
        }
      );
      // const linksresponce = responce.data.data.links;

      // const linksmap = linksresponce.map((e) => {
      //   return {
      //     id: e._id,
      //     title: e.title,
      //     link: e.link,
      //     webavtar: e.webavtar,
      //   };
      // });
      // setsavedata(linksmap);
    } catch (error) {
      console.log("note deletemylink");
    }
  };

  return (
    <div>
      <div className=" w-11/12 m-auto rounded-2xl p-4 my-2 bg-blue-700">
        <div className="flex">
          <div className="">
            <img className="w-16 h-8 rounded-3xl" src={webavtar} alt="" />
          </div>
          <div className="ml-8 text-purple-50 text-xl font-medium">
            <p>
              Your Title {id}:- <span>{title}</span>
            </p>
          </div>
          <div className="ml-8 text-purple-50 text-xl font-medium">
            <p>
              Your url:- <span>{url}</span>
            </p>
          </div>
        </div>

        <div className="flex">
          <button
            className="border-2 border-sky-500 w-full h-30 m-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-3xl justify-center hover:text-white"
            type="Submit"
            // id={s.id}
            // onClick={(e) => editmylink(e)}
          >
            Edit
          </button>
          <button
            className="border-2 border-sky-500 w-full h-30 m-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-3xl justify-center hover:text-white"
            type="Submit"
            id={id}
            onClick={(e) => deletemylink(e)}
          >
            Delete
          </button>
        </div>
      </div>

      {Edit && <Editlink />}
    </div>
  );
}

export default Showlink;
