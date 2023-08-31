import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async () => {
    try {
    //   event.preventDefault();
      const responce = await axios.post("http://127.0.0.1:3001/api/u1/login", {
        email,
        password,
      });

      if (responce.data.success) {
        navigate("/dashbord");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <p className="mb-8 text-3xl text-center">Login</p>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            onClick={() => handleLogin()}
          >
           
            Login
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              to="forget"
            >
              Forget Password Now
            </Link>
          </div>
        </div>

        {/* <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <Link className="no-underline border-b border-blue text-blue" to="../login">
                            Log in
                        </Link>.
                    </div> */}
      </div>
    </div>
  );
}

export default Login;
