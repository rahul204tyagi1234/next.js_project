"use client";
import { useState } from "react";
import Link from "next/link";
import Result from "./result/page";
import Profile from "./profile/page";
import Payment from "./payment/page";
import Courses from "./courses/page";
import Footer from "../footer/page";
import Chating from "../chating/page";
// import { useState } from "react";

export default function DashBoard() {

  const logOut=()=>{
    confirm("Are you sure")
    window.location.href = "/";
  }
  const [selectedOption,setSelectedOption] = useState("Courses");

  const renderPage = () => {
    switch (selectedOption) {
      case "Courses":
        return <Courses />;
      case "Profile":
        return <Profile />;
      case "Payment":
        return <Payment />;
      case "Result":
        return <Result />;
      // case "Chating":
      //   return <Chating />;
      default:
        return null;
    }
  };

  return (
    <div>
          <nav className="navbar navbar-expand-lg fixed-top bg-primary bg-opacity-50">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="https://shivshankar9.github.io/Student-portal/images/logo.png"
              alt=""
              width="50"
              height="50"
              className="d-inline-block"
            />
            <b className="">Student portal</b>
          </a>
          <button className="navbar-toggler" type="button" id="navbarToggle">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto" id="ul">
              <a className="nav-link  " onClick={logOut} type="button">
                {" "}
                <b>Logout</b>
              </a>
              <li id="login" className="nav-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="50"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
            <div className="card-header text-center bg-primary bg-opacity-50">
                <b>Options</b>
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className={`list-group-item ${
                    selectedOption === "Courses" ? "active" : ""
                  }`}
                >
                  <Link
                    href="/dashboard"
                    as="/dashboard"
                    className="nav-link active"
                    onClick={() => setSelectedOption("Courses")}
                  >
                    Courses
                  </Link>
                </li>
                <li
                  className={`list-group-item ${
                    selectedOption === "Profile" ? "active" : ""
                  }`}
                >
                  <Link
                    href="/dashboard"
                    as="/dashboard"
                    className="nav-link active"
                    onClick={() => setSelectedOption("Profile")}
                  >
                    Profile
                  </Link>
                </li>
                <li
                  className={`list-group-item ${
                    selectedOption === "Payment" ? "active" : ""
                  }`}
                >
                  <Link
                    href="/dashboard"
                    as="/dashboard"
                    className="nav-link active"
                    onClick={() => setSelectedOption("Payment")}
                  >
                    Payment
                  </Link>
                </li>
                <li
                  className={`list-group-item ${
                    selectedOption === "Result" ? "active" : ""
                  }`}
                >
                  <Link
                    href="/dashboard"
                    as="/dashboard"
                    className="nav-link active"
                    onClick={() => setSelectedOption("Result")}
                  >
                    Result
                  </Link>
                </li>
                {/* <li
                  className={`list-group-item ${
                    selectedOption === "Chating" ? "active" : ""
                  }`}
                >
                  <Link
                    href="/dashboard"
                    as="/dashboard"
                    className="nav-link active"
                    onClick={() => setSelectedOption("Chating")}
                  >
                    Chating List
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-header text-center bg-primary bg-opacity-50 ">
                <b>Dashboard</b>
              </div>
              <ul className="list-group list-group-flush">
                <br></br>
                <div>{renderPage()}</div>
                <br></br>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
