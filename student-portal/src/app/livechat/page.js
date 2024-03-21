"use client"
// import { useEffect, useState } from "react"
// import { useState } from "react";

// export default function LiveChat() {
//   return (
//     <div>
//       <div className="card chat-form live-chat ">
//         <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
//         <div className="card-body">
//             <div className=" send-message message">
//               <p className="small mb-0">
//                 Hello and thank you for visiting MDBootstrap. Please click the
//                 video below.
//               </p>
//             </div>
//             <br></br>
//             <div className="receve-message ">
//               <p className="small mb-0">
//                 Hello and thank you for visiting MDBootstrap. Please click the
//                 video below.
//               </p>
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleFormControlSelect2">Message</label>

//               <textarea
//                 className="form-control"
//                 name=""
//                 id=""
//                 cols="15"
//                 rows="5"
//                 required=""
//               ></textarea>
//             </div>
//             <br></br>
//             <div className="form-group">
//               <a href="" className="btn btn-primary">
//                 Send
//               </a>
//             </div>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io(); 

// export default function Home() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     socket.on('chat message', (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.off('chat message');
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim() !== '') {
//       socket.emit('chat message', input);
//       setInput('');
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>{msg}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }



// import { PORT } from "@/config/app"
// import { Socket, io } from "socket.io-client"

// export default function socketClient() {
//   const socket = io(`:${3000 + 1}`, { path: "/api/socket", addTrailingSlash: false })

//   socket.on("connect", () => {
//     console.log("Connected")
//   })

//   socket.on("disconnect", () => {
//     console.log("Disconnected")
//   })

//   socket.on("connect_error", async err => {
//     console.log(`connect_error due to ${err.message}`)
//     await fetch("/api/socket")
//   })

//   return socket
// }

// import { io } from "socket.io-client"
// export default function LiveChat(){
//   const [socket,setSocket]=useState(undefined);
//   const [inbox,setInbox]=useState([]);
//   const [message,setMessages]=useState("");

//   const handleSendMessage=()=>{
//     socket.emit("message",message)
//   }
//   useEffect(()=>{
//     const socket=io("http://localhost:3001")

//     socket.on("message",(message)=>{
//       setInbox([...inbox,message])
//       console.log("=============",message);
//     })
//     setSocket(socket)
//   },[])
//   return(
//     // <div>
//     <div className="card chat-form live-chat ">
//       <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
//       <div className="card-body">
//           <div className=" send-message message "  onSubmit={(event) => event.preventDefault()}>
//             {inbox.map((message,inbox)=>(
//                <div key={inbox} className="border rounded px-4 py-2">{message}</div>
//               // <p key={index}>{message}</p>
//             ))}
//           </div>
//           <br></br>
//           {/* <div className="receve-message ">
//             <p className="small mb-0">
//               Hello and thank you for visiting MDBootstrap. Please click the
//               video below.
//             </p>
//           </div> */}
//           <div className="form-group">
//             <label htmlFor="exampleFormControlSelect2">Message</label>

//             <textarea
//             onChange={(e)=>{setMessages(e.target.value)}}
//               className="form-control"
//               cols="15"
//               rows="5"
//               required=""
//             ></textarea>
//           </div>
//           <br></br>
//           {/* <div className="form-group"> */}
//             <button onClick={handleSendMessage} className="btn btn-primary">
//               Send
//             </button>
//           {/* </div> */}
//           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//       </div>
//     </div>
  // </div>
  


import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function LiveChat() {
  const [socket, setSocket] = useState(undefined);
  const [inbox, setInbox] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };
  


  useEffect(() => {
    const newSocket = io("http://localhost:3001");

    newSocket.on("message", (newMessage) => {
      setInbox((prevInbox) => [...prevInbox, newMessage]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className="card chat-form live-chat">
      <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
      <div className="card-body">
        <div className="send-message message">
          {inbox.map((message, index) => (
            <div key={index} className="user_m border rounded border-info px-4 py-2">
              {message}
            </div>
          ))}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            cols="15"
            rows="5"
            required=""
          ></textarea>
        </div>
        <br />
        <button  onClick={() => {
                  handleSendMessage();
                }} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}








