import Link from "next/link";

export default function Menu() {
  return (
  //   <div>
  //   <ul class="nav nav-pills bg-primary bg-opacity-50 menu">
  //   <li class="nav-item dropdown">
  //     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Features</a>
  //     <ul class="dropdown-menu">
  //       <li><a class="dropdown-item" href="#">Action</a></li>
  //       <li><a class="dropdown-item" href="#">Another action</a></li>
  //       <li><a class="dropdown-item" href="#">Something else here</a></li>
  //       <li><hr class="dropdown-divider"/></li>
  //       <li><a class="dropdown-item" href="#">Separated link</a></li>
  //     </ul>
  //   </li>
  //   <li class="nav-item dropdown">
  //     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Courses</a>
  //     <ul class="dropdown-menu">
  //       <li><a class="dropdown-item" href="#">Action</a></li>
  //       <li><a class="dropdown-item" href="#">Another action</a></li>
  //       <li><a class="dropdown-item" href="#">Something else here</a></li>
  //       <li><hr class="dropdown-divider"/></li>
  //       <li><a class="dropdown-item" href="#">Separated link</a></li>
  //     </ul>
  //   </li>
  //   <li class="nav-item dropdown">
  //     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tutorials</a>
  //     <ul class="dropdown-menu">
  //       <li><a class="dropdown-item" href="#">Action</a></li>
  //       <li><a class="dropdown-item" href="#">Another action</a></li>
  //       <li><a class="dropdown-item" href="#">Something else here</a></li>
  //       <li><hr class="dropdown-divider"/></li>
  //       <li><a class="dropdown-item" href="#">Separated link</a></li>
  //     </ul>
  //   </li>
  //   <li class="nav-item dropdown">
  //     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">HTML/CSS</a>
  //     <ul class="dropdown-menu">
  //       <li><a class="dropdown-item" href="#">Action</a></li>
  //       <li><a class="dropdown-item" href="#">Another action</a></li>
  //       <li><a class="dropdown-item" href="#">Something else here</a></li>
  //       <li><hr class="dropdown-divider"/></li>
  //       <li><a class="dropdown-item" href="#">Separated link</a></li>
  //     </ul>
  //   </li>
  //   <li class="nav-item dropdown">
  //     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">JavaScript</a>
  //     <ul class="dropdown-menu">
  //       <li><a class="dropdown-item" href="#">Action</a></li>
  //       <li><a class="dropdown-item" href="#">Another action</a></li>
  //       <li><a class="dropdown-item" href="#">Something else here</a></li>
  //       <li><hr class="dropdown-divider"/></li>
  //       <li><a class="dropdown-item" href="#">Separated link</a></li>
  //     </ul>
  //   </li>
  // </ul>
  // </div>


  <div>
  <nav class="navbar navbar-expand-lg  fixed-top bg-primary bg-opacity-50">
    <div class="container-fluid d-flex">
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
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >

<ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li class="nav-item ">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Features
        </a>
        <ul class="dropdown-menu ">
          <li><a class="dropdown-item" href="#">Registration</a></li>
          <li><a class="dropdown-item" href="#">Login</a></li>
          <li><a class="dropdown-item" href="#">Crousel &raquo;</a></li>
          <li><a class="dropdown-item" href="#">Built are &raquo;</a>
          <ul class="dropdown-menu dropdown-submenu ">
              <li>
                <a class="dropdown-item" href="#">Submenu item 1</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 2</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <a class="dropdown-item" href="#">Multi level 1</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Multi level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 4</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 5</a>
              </li>
            </ul>
            </li>
          <li><a class="dropdown-item" href="#">Notifications</a></li>
          <li><a class="dropdown-item" href="#">Other &raquo;</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Courses
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          HTML/CSS
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          JavaScript
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
   {/* <Menu/> */}
  </div>



  );
}
