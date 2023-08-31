import React, { useEffect, useState } from "react";
// import Showlink from "../Showlink/Showlink";
import Linkform from "./Linkform";
import Showlink from "../Showlink/Showlink";
import axios from "axios";
function Addlink() {
  const [Addnewform, setAddnewform] = useState(false);
  const [savedata, setsavedata] = useState([]);

  const form = () => {
    setAddnewform(!Addnewform);
  };
  const getmyallink = async (e) => {
    console.log("run get my all link");
    try {
      const responce = await axios.get(
        "http://127.0.0.1:3001/api/u1/addnewlink"
      );
      const linksresponce = responce.data.data.links;

      const linksmap = linksresponce.map((e) => {
        return {
          id: e._id,
          title: e.title,
          link: e.link,
          webavtar: e.webavtar,
        };
      });
      // console.log(linksmap);
      setsavedata(linksmap);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getmyallink();
  }, []);
  // const deletemylink = async (e) => {
  //   try {
  //     e.preventDefault();
  //     await setRemovedValue(e.currentTarget.id);

  //     const responce = await axios.delete(
  //       "http://127.0.0.1:3001/api/u1/addnewlink",
  //       {
  //         data: {
  //           removedid: await removedValue,
  //         },
  //       }
  //     );
  //     const linksresponce = responce.data.data.links;

  //     const linksmap = linksresponce.map((e) => {
  //       return {
  //         id: e._id,
  //         title: e.title,
  //         link: e.link,
  //         webavtar: e.webavtar,
  //       };
  //     });
  //     setsavedata(linksmap);
  //   } catch (error) {
  //     console.log("note deletemylink");
  //   }
  // };
  return (
    <div className="  md:flex  ">
      <div className=" md:flex-auto">
        <div className="">
          <button
            className="m-2 text-center w-full h-16 bg-blue-600 rounded text-3xl font-medium hover:text-white "
            onClick={form}
          >
            {Addnewform ? "Remove" : "Add new link"}
          </button>
        </div>

        <div className="">{Addnewform && <Linkform />}</div>
        <div className="">
          {/* <Showlink data={savedata}/> */}
          {savedata.map((d) => (
            <Showlink
              key={d.id}
              id={d.id}
              title={d.title}
              url={d.link}
              webavtar={d.webavtar}
            />
          ))}
        </div>
      </div>
      <div className=" md:flex-auto bg-red-600 ml-4 ">preview side</div>
    </div>
  );
}

export default Addlink;
