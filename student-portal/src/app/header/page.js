import Link from "next/link";

export default function Header(){
    return(
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
              <li className="nav-item">
                <Link href="/contact" className="nav-link active ">
                  Contact
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}