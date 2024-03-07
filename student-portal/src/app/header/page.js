import Link from "next/link";
import Menu from "../menu/page";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top bg-primary bg-opacity-50">
        <div className="container-fluid d-flex">
          <div>
            <a className="navbar-brand">
              <img
                src="https://shivshankar9.github.io/Student-portal/images/logo.png"
                alt=""
                width="50"
                height="50"
                className=""
              />
              <b className="ml-3">Student portal</b>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Registration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Crousel &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Crousel item{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Crousel image{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Crousel responsive &raquo;{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Laptop 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Crousel Area
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Crousel Features
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Built area &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Built area item{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Built area images
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Built area responsive &raquo;{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Laptop 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Built area{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Built area Features
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Other
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JavaScript &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          JavaScript Statements
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          JavaScript Comments
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          JavaScript Variabals &raquo;{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              var 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              const 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          JavaScript Data Types
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          JavaScript Functions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Node js &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Node.js Introduction
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Node.js Modules
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Node.js File System Module &raquo;{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              {" "}
                              File Server
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Read Files
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          What is NPM?
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Node.js Upload Files
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mongodb
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      React
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HTML/CSS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML Introduction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML Elements &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          My First Heading.
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          My First paragraph.
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tag Name &raquo;{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Head, body
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              H1,P,B,I
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          HTML Comments
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          HTML Colors
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML Headings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CSS Syntax{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CSS Selectors &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          CSS id Selectors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          CSS class Selectors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          CSS tag Selectors &raquo;{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              CSS h1 Selectors
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              CSS p,li Selectors
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          CSS div Selectors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          CSS body Selectors
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      How To Add CSS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  JavaScript
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      JavaScript Introduction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JavaScript Syntax &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          How to create variables:
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          How to use variables:
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Fixed values are called Literals.
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Strings are text,
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Variable values are called Variables.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JavaScript Arithmetic
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/registration" className="nav-link active ">
                  Registration
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link href="/login" className="nav-link active ">
                  Login
                </Link>{" "}
              </li>
              <li className="nav-item ">
                <Link href="/contact" className="nav-link active ">
                  Contact
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
