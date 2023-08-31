import { Link } from "react-router-dom";
import Addlink from "../Addlink/Addlink";

function Sidebar() {
  return (
    <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 flex">
      <div className=" ">
        {/* <div className=" "> */}
        <div className="bg-gray-600 rounded-xl lg:flex md:w-60 md:flex-col hidden">
          <div className="flex-col pt-5 flex overflow-y-auto ">
            <div className="h-full flex-col justify-between px-4 flex">
              <div className="space-y-4">
                <div className="bg-top bg-cover space-y-1">
                  <Link
                    to="/"
                    className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to=""
                    className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                  >
                    Profile
                  </Link>
                  <Link
                    to=""
                    className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                  >
                    Social media
                  </Link>
                </div>
              </div>
              <div className="mt-12 pb-4">
                <div className="bg-top bg-cover space-y-1">
                  <Link
                    to="/"
                    className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className=" w-full h-full mr-4 ml-4">
        <Addlink />
      </div>
    </div>
  );
}

export default Sidebar;
