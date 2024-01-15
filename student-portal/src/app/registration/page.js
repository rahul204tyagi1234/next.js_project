"use client"
// import {redirect} from 'next/navigation';
import { useState } from "react";

export default function registration() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");

  const addUser = async () => {
    let result = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
        Gender,
        Address,
      }),
    });
    result = await result.json();
    if (result.success) {
      alert("Add new user ");
      window.location.href = "login"
    }

  };

  return (
    <div class="card container p-4 col-md-4 ">
      <div class=" bg-white text-center">
        <h2>Registration</h2>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0"></blockquote>
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              class="form-control"
              placeholder="Enter the name"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Last name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              class="form-control"
              placeholder="Enter the father name"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              placeholder="name@gmail.com"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              placeholder="487845@#$561"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              class="form-control"
              placeholder="487845@#$561"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Gender</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
              name="gender"
            />{" "}
            Male &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              name="gender"
            />{" "}
            Female
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Address</label>
            <textarea
                class="form-control"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                name=""
                cols="15"
                rows="5"
                required=""
              ></textarea>{" "}
          </div>
          <div id="registerButton" class="text-center">
          <button className="btn btn-primary btn-lg m-2 " onClick={addUser}>Register User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
