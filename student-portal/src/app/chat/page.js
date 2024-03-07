"use client"
import { useState } from "react";
import LiveChat from "../livechat/page";

export default function Chat() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const addChatUser=async()=>{
    let result= await fetch("http://localhost:3000/api/userchat",{
      method:"POST",
      body:JSON.stringify({
        name,
        email,
        message,
      }),
    });
    alert("Your message sending succesfully")
    result=await result.json();
    // <LiveChat/>
  }
    return(
        <div className="card container me-5 p-4 col-md-2 chat-form ">
        <div className="bg-white text-center">
          <h4>Contact Us</h4>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0"></blockquote>
          <form >
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Email</label>
              <input
                type="text"
                className="form-control"
                required=""
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Message</label>
  
              <textarea
                className="form-control"
                name=""
                id=""
                cols="15"
                rows="5"
                required=""
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-lg m-2" onClick={addChatUser}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
    
}