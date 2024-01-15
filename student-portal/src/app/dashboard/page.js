import Link from "next/link";

export default function dashBoard() {
  return (
     <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card" >
            <div class="card-header text-center" ><b>Options</b></div>
             <div id="show">
             <ul class="list-group list-group-flush">
              <div id="show">
              <li class="list-group-item active"> 
              <Link href="/dashboard/courses" class="nav-link active text-white">
                   Courses</Link>
             
                {/* <a class="nav-link " href="javascript:void(0)" onclick="showCourses('/courses.html')">Courses</a> */}
              </li>
              <li class="list-group-item "> 
              <Link href="/dashboard/profile" class="nav-link active ">
                   Profile</Link>              </li>
              <li class="list-group-item"> 
              <Link href="/dashboard/payment" class="nav-link active">
                   Payment</Link>              </li>
              <li class="list-group-item"> 
              <Link href="/dashboard/result" class="nav-link active ">
                   Result</Link>              </li>
            </div>
             </ul>
          
          </div>
        </div>
        </div>

        <div class="col-md-9">
            <div class="card" >
              <div class="card-header text-center " ><b>Dasboard</b></div>
              <ul class="list-group list-group-flush">
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
