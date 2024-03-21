"use client"

import { useEffect } from "react";

let getAllUserData =[];
const getUser= async ()=>{
  let data = await fetch("http://localhost:3000/api/users",{cache:"no-cache"});
  data = await data.json();
  let user= data.result;
  user.map((item)=>{
    getAllUserData=item
})
}


export default function  profile(){
  let firstname=getAllUserData.firstname
  let lastname=getAllUserData.lastname
  let email=getAllUserData.email
  let Address=getAllUserData.Address
  let password=getAllUserData.password

    useEffect(()=>{
      getUser();
    },[]);

    return(
        <div>
             <div id="profile"></div>
    
    <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">Your Profile</h3>
           
          </div>
        </div>
      
        <div className="row text-center justify-content-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="card testimonial-card">
              {/* <div class="card-up" style="background-color: #9d789b;"></div>  */}
              <div className="avatar mx-auto bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="130" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </div>
              <div id="id" className="card-body">
                 <h4>{firstname}&nbsp;&nbsp;{lastname}</h4>
                <hr />
            
                <b>Email :</b> {email} <br></br>
                <b>Address :</b> {Address} <br></br>
                <b>Password :</b> {password} 
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary btn-lg m-2">Download-Profile</button>
        </div>
        </div>
      </section>
        </div>
        
    )
}