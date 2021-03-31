import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css";
require("dotenv").config();
function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post(`http://localhost:4000/signin`, {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // if (error.response.status === 401)
        //   setError(error.response.data.message);
        setError("Some thing went wrong.Please try again!");
      });
  };

  return (
    <div
      class="login_form border-2 border-indigo-500 p-10 pt-5 shadow-sm mx-auto flex rounded"
      style={{ width: "500px" }}
    >
      <div class="sec flex-1">
        <h1 class="text-center text-2xl text-green-dark">Account Login</h1>
        {/* <img class="mb-3 mx-auto" style={{height: "150px;"}} src="https://www.fatcow.com/images/free-logos/World-Wide01.jpg" alt=""/> */}
        <span class="flex shadow-md mb-5 text-xs">
          <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
            Email
          </span>
          <input
            class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
            type="text"
            {...username}
            autoComplete="new-password"
            placeholder="someonespecial@example.com"
          />
        </span>
        <span class="flex shadow-md mb-5 text-xs">
          <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
            Password
          </span>
          <input
            class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
            type="password"
            {...password}
            autoComplete="new-password"
            placeholder=""
          />
        </span>
        <a
          class="text-indigo-500 hover:underline font-bold text-xs ml-auto cursor-pointer"
          href="../Signup/"
        >
          Don't have an account yet?  Sign Up
        </a>
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <span
          class="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold"
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
        >
          Login
        </span>
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

export default Login;
