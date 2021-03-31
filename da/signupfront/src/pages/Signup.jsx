import React, { useState } from "react";
import axios from "axios";
require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;
 

function Signup(props) {
  const username = useFormInput("");
  const password = useFormInput("");
  const reFill = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleSignup = () => {
    console.log(apiUrl);
    setError(null);
    setLoading(true);
    if (password.value === reFill.value ) {
      axios
        .post(`http://localhost:4000/signup`, {
          username: username.value,
          password: password.value,
        })
        .then((response) => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          // if (error.response.status === 401)
            setError(error.response.data.message);
          setError("Failed! Email is already in use!");
        });
    }
    else {setError("Invalid Email or Password and Confirm password should match!")}
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            {...username}
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            {...password}
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            {...reFill}
          />
          {error && (
            <>
              <small style={{ color: "red" }}>{error}</small>
              <br />
            </>
          )}
          <span
            class="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold"
            type="button"
            value={loading ? "Loading..." : "Signup"}
            onClick={handleSignup}
            disabled={loading}
          >
            Signup
          </span>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a
            class="no-underline border-b border-blue text-blue"
            href="../Sign-in/"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Signup;

