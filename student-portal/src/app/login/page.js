"use client"

import { useEffect,useState } from "react";
import Header from "../header/page";
import Footer from "../footer/page";

let getAllUserData =[];
const getUser= async ()=>{
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  console.log("===============");
  let user= data.result;
  user.map((item)=>{
    getAllUserData=item
  console.log("----------",getAllUserData);
})
}

// const loginUser=()=> {
//   console.log("your new data",getAllUserData);
//   var newEmail= getAllUserData.email;
//   var newPassword=getAllUserData.password;
//   if (newEmail===email && newPassword===password) {
//     alert("your data")
//     console.log("=======",newEmail);
//     console.log("=======",newPassword);
//     alert("Login successfully");
//     window.location.href = "dashboard"
//   } else {
//     alert("Your data is not matching")
//   }
// }





 export default function login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(()=>{
    getUser();
    // loginUser();
  },[]);



  const loginUser=()=> {

    console.log("your new data",getAllUserData);
    var newemail= getAllUserData.email;
    var newpassword=getAllUserData.password;
    console.log("your old email",newemail);
    console.log("your old email",newpassword);
    console.log("your new email",email);
    console.log("your new password",password);
    if (newemail===email || newpassword===password) {
      alert("Login successfully");
       window.location.href = "./dashboard"

    } else {
      alert("Your data is not matching")
    }
  }
 

  // if (item.email===email && item.password===password) {
  //   alert("Login successfully");
  //   window.location.href = "dashboard"
  // } else {
  //   alert("Your data is not matching")
  // }
  

  return (
    <div>
      <Header />
    <div className="card container p-4 col-md-4">
      <div className=" bg-white text-center">
        <h2>Login</h2>
        <p>Login into  your account</p>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0"></blockquote>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              // placeholder="name@gmail.com"
              required=""
            />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              // placeholder="487845@#$561"
              required=""
            />
          </div>
          <div className="text-center">
          <button className="btn btn-primary btn-lg m-2 "onClick={loginUser}>Submit</button>

          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
