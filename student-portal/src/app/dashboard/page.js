import  User  from "../lib/model/connect";
import Result from "./result/page";
import Profile from "./profile/page";
import Payment from "./payment/page";
import Courses from "./courses/page";
import Footer from "../footer/page";
import Link from "next/link";

export default function dashBoard() {
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
              <a className="nav-link  " type="button">
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
              <div className="card-header text-center">
                <b>Options</b>
              </div>
              <div id="show">
                <ul className="list-group list-group-flush">
                  <div id="show">
                    <li className="list-group-item ">
                      <Link
                        href="/dashboard/courses"
                        className="nav-link active "
                      >
                        Courses
                      </Link>

                      {/* <a class="nav-link " href="javascript:void(0)" onclick="showCourses('/courses.html')">Courses</a> */}
                    </li>
                    <li className="list-group-item active ">
                      <Link
                        href="/dashboard/profile"
                        className="nav-link active "
                      >
                        Profile
                      </Link>{" "}
                    </li>
                    <li className="list-group-item">
                      <Link
                        href="/dashboard/payment"
                        className="nav-link active"
                      >
                        Payment
                      </Link>{" "}
                    </li>
                    <li className="list-group-item">
                      <Link
                        href="/dashboard/result"
                        className="nav-link active "
                      >
                        Result
                      </Link>{" "}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-header text-center ">
                <b>Dasboard</b>
              </div>
              <ul className="list-group list-group-flush">
                <br></br>
                {/* <div><Payment/></div>
              <div><Result/></div>
              <div><Courses/></div> */}
                <div>
                  <Profile />
                  {/* <Payment/>
                  <Courses/>
                  <Result/> */}
                </div>

                <br></br>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
