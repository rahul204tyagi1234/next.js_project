// "use client"
// import { useEffect } from "react";

import Link from "next/link";

export default async function Chating() {
  let data = await fetch("http://localhost:3000/api/userchat", {
    cache: "no-cache",
  });
  data = await data.json();
  let users = data.result;
  return (
    <div>
      <h2 className=" title text-center">
        <b>-: Chating Users List :-</b>
      </h2>
      <br></br>
      <table className="table table-hover  table-info container-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((result) => (
            <tr>
              <td>{result._id}</td>
              <td>{result.name}</td>
              <td>{result.email}</td>
              <td>{result.message}</td>
              <td>
                <Link href={`/chating/${result._id}`}>Chat</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
