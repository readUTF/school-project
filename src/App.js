import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage_1";
import CardList from "./components/todo/CardList";

export default function App(props) {
  const Login = (details) => {
    console.log(
      "http://localhost:8080/api/authentication/login?email=" +
        details.email +
        "&password=" +
        details.password
    );
    fetch(
      "http://localhost:8080/api/authentication/login?email=" +
        details.email +
        "&password=" +
        details.password,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((e) => {
        setError("Invalid Username or password");
      });
  };

  async function fetchSets() {
    const response = fetch(
      `http://localhost:8080/api/profile/sets?token=${user.token}&profileId=${user.profile_id}`
    )
      .then((response) => response.json())
      .catch((e) => {});

    return await response;
  }

  function register(details) {
    console.log(`http://localhost:8080/api/authentication/register?email=${details.email}&password=${details.password}`)
    fetch(
      `http://localhost:8080/api/authentication/register?email=${details.email}&password=${details.password}`,
      {
        method: "PUT",
      }
    ).then((response) => Login(details));
  }

  const [user, setUser] = useState({ token: "", profileId: "" });
  const [error, setError] = useState("");
  const [registering, setRegistering] = useState(false);

  if (user.token == "") {
    if (registering) {
      return (
        <div className="login">
          <RegisterPage register={register} error={error} setRegistering={setRegistering} />
        </div>
      );
    } else {
      return (
        <div className="login">
          <LoginPage
            Login={Login}
            error={error}
            setRegistering={setRegistering}
          />
        </div>
      );
    }
  } else {
    return (
      <div className="homepage">
        <HomePage user={user} setsResponse={fetchSets()}/>
      </div>
    )
  }
}
