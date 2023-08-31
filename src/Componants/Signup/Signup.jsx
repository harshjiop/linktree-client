import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSignup = async () => {
    // console.log(name, UserName, email, password);
    try {
      // event.preventDefault();
      const responce = await axios.post(
        "http://127.0.0.1:3001/api/u1/register",
        {
          name,
          UserName,
          email,
          password,
        }
      );
      if (responce.data.success) {
        navigate("/login");
      }
      // .then((result) => console.log("reselte", result))
      // .catch((err) => console.log("err", err));

      // console.log(name, UserName, email, password);
      //  console.log(password);
      //  console.log(name);
    } catch (error) {}
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <p className="mb-8 text-3xl text-center">Sign up</p>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="Username"
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button
            type="submit"
            className="w-full text-center py-3  bg-green-600 text-white rounded-xl hover:bg-green-dark focus:outline-none my-1"
            onClick={() => handleSignup()}
          >
            Create Account
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default Signup;
