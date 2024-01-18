"use client"

import { useEffect,useState } from "react";

export default function login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(()=>{
    showUser();
},[]);

  const showUser= async ()=>{
    let userList = await fetch("http://localhost:3000/api/users");
    userList = await userList.json();
    let result= userList.result
    console.log("findResult======",result);
    let name=result.firstname;
    console.log("Your name====",name);

    
    // console.log(result.email);
    // console.log("==========", email);
    // if (result.email===email && result.password=== password){
    //     alert("Login successfully");
    //     window.location.href = "dashboard"

    // }else{
    //     alert("Your data is not matching")

    // }
  }

  return (
    <div className="card container p-4 col-md-4">
      <div className=" bg-white text-center">
        <h2>Login</h2>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0"></blockquote>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="name@gmail.com"
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
              placeholder="487845@#$561"
              required=""
            />
          </div>
          <div className="text-center">
          <button className="btn btn-primary btn-lg m-2 " >Submit</button>

          </div>
        </form>
      </div>
    </div>
  );
}
