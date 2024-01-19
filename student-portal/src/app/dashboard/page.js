import Link from "next/link";

export default function dashBoard() {
  return (
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <div className="card-header text-center" ><b>Options</b></div>
             <div id="show">
             <ul className="list-group list-group-flush">
              <div id="show">
              <li className="list-group-item active"> 
              <Link href="/dashboard/courses" className="nav-link active text-white">
                   Courses</Link>
             
                {/* <a class="nav-link " href="javascript:void(0)" onclick="showCourses('/courses.html')">Courses</a> */}
              </li>
              <li className="list-group-item "> 
              <Link href="/dashboard/profile" className="nav-link active ">
                   Profile</Link>              </li>
              <li className="list-group-item"> 
              <Link href="/dashboard/payment" className="nav-link active">
                   Payment</Link>              </li>
              <li className="list-group-item"> 
              <Link href="/dashboard/result" className="nav-link active ">
                   Result</Link>              </li>
            </div>
             </ul>
          
          </div>
        </div>
        </div>

        <div className="col-md-9">
            <div className="card" >
              <div className="card-header text-center " ><b>Dasboard</b></div>
              <ul className="list-group list-group-flush">
                <br></br>
              <div id="profile"></div>
              <br></br>
              </ul>
            </div>
        </div>
       </div>
    </div>
   
  );
}
