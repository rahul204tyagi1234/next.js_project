// "use client"
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// export default function ChatingId() {
//   const[socket,setSocket]=useState(undefined);
//   const[preves,setPreves]=useState([]);
//   const[msg,setMsg]=useState("")

//   const sendMessage=()=>{
//     socket.emit("admin_message",msg);
//     setMsg("")
//   }

//   useEffect(()=>{
//     const socket = io("http://localhost:3001");
//     socket.on("admin_message", (new_admin_message) => {
//       setPreves((preves) => [...preves, new_admin_message]);
//     });
//     setSocket(socket);

//     // Clean up function to disconnect socket on unmount
//     return () => {
//       socket.disconnect();
//     };
//   },[])
//   return (
//     // <-------------------Start chat page ------------------>
//     <div className="container-sm rounded">
//       <div className="card  ">
//         <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
//         <div className="card-body">
//           <div className=" form-control chat-message-input-colur">
//             {preves.map((msg,ind)=>(
//                <div key={ind} className="small mb-0">{msg} </div>
//             ))}
//           </div>
//           <br></br>
//           <div className=" form-control chat-message-colur">
//             <p className="small mb-0">
//               Hello and thank you for visiting MDBootstrap. Please click the
//               video below.
//             </p>
//           </div>
//           <div className="form-group ">
//             <label htmlFor="exampleFormControlSelect2">Message</label>

//             <textarea
//               className="form-control"
//               onChange={(e) => setMsg(e.target.value)}
//               name=""
//               id=""
//               cols="15"
//               rows="5"
//               required=""
//             ></textarea>
//           </div>
//           <br></br>
//           <div className="form-group">
//           <button onClick={sendMessage} className="btn btn-primary">
//           Send
//         </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <-------------------End chat page--------------------->
//   );
// }
"use client"

// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// export default function ChatingId() {
//   const [socket, setSocket] = useState(undefined);
//   const [preves, setPreves] = useState([]);
//   const [msg, setMsg] = useState("");

//   const sendMessage = () => {
//     socket.emit("admin_message", msg);
//     setMsg("");
//   };

//   useEffect(() => {
//     const newSocket = io("http://localhost:3001");
//     newSocket.on("admin_message", (new_admin_message) => {
//       setPreves((preves) => [...preves, new_admin_message]);
//     });
//     setSocket(newSocket);

//     // Clean up function to disconnect socket on unmount
//     return () => {
//       newSocket.disconnect();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   return (
//     <div className="container-sm rounded">
//       <div className="card  ">
//         <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
//         <div className="card-body">
//           <div className=" form-control chat-message-input-colur">
//             {preves.map((msg, ind) => (
//               <div key={ind} className="small mb-0">
//                 {msg}
//               </div>
//             ))}
//           </div>
//           <br></br>
//           <div className=" form-control chat-message-colur">
//             <p className="small mb-0">
//               Hello and thank you for visiting MDBootstrap. Please click the
//               video below.
//             </p>
//           </div>
//           <div className="form-group ">
//             <label htmlFor="exampleFormControlSelect2">Message</label>

//             <textarea
//               className="form-control"
//               onChange={(e) => setMsg(e.target.value)}
//               value={msg}
//               name=""
//               id=""
//               cols="15"
//               rows="5"
//               required=""
//             ></textarea>
//           </div>
//           <br></br>
//           <div className="form-group">
//             <button onClick={sendMessage} className="btn btn-primary">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// export default function ChatingId() {
//   const [socket, setSocket] = useState(undefined);
//   const [preves, setPreves] = useState([]);
//   const [msg, setMsg] = useState("");

//   const sendMessage = () => {
//     socket.emit("admin_msg", msg); 
//     setMsg("");
//   };
//   const sendMsg = () => {
//     socket.emit("message", msg); 
//     setMsg("");
//   };

//   useEffect(() => {
//     const newSocket = io("http://localhost:3001");
//     newSocket.on("admin_msg", (new_admin_message) => {
//       setPreves((preves) => [...preves, new_admin_message]);
//     });
//     setSocket(newSocket);

//     // Clean up function to disconnect socket on unmount
//     return () => {
//       newSocket.disconnect();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   return (
//     <div className="container-sm rounded">
//       <div className="card  ">
//         <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
//         <div className="card-body">
//           {/* <div className=" form-control chat-message-input-colur">
//             {preves.map((msg, ind) => (
//               <div key={ind} className="small mb-0">
//                 {msg}
//               </div>
//             ))}
//           </div> */}
//           <div className="send-message  message">
//           {preves.map((msg, ind) => (
//             <div key={ind} className="admin_m border rounded  border-info px-4 py-2">
//               {msg}
//             </div>
//           ))}
//         </div>
//           <br></br>
//           {/* <div className=" form-control chat-message-colur">
//             <p className="small mb-0">
//               Hello and thank you for visiting MDBootstrap. Please click the
//               video below.
//             </p>
//           </div> */}
//           <div className="form-group ">
//             <label htmlFor="exampleFormControlSelect2">Message</label>

//             <textarea
//               className="form-control"
//               onChange={(e) => setMsg(e.target.value)}
//               value={msg}
//               name=""
//               id=""
//               cols="15"
//               rows="5"
//               required=""
//             ></textarea>
//           </div>
//           <br></br>
//           <div className="form-group">
//             <button  onClick={() => {
//                   sendMessage();
//                   sendMsg();
//                 }} className="btn btn-primary">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function ChattingId() {
  const [socket, setSocket] = useState(null); 
  const [messages, setMessages] = useState([]); 
  const [msg, setMsg] = useState(""); 

  const sendMessage = () => {
    if (socket) {
      socket.emit("message", msg); 
      setMsg(""); 
    }
  };

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    
    newSocket.on("message", (newAdminMessage) => {
      setMessages((prevMessages) => [...prevMessages, newAdminMessage]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []); 

  return (
    <div className="container-sm rounded">
      <div className="card">
        <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
        <div className="card-body">
          {/* Render admin messages */}
          <div className="message">
            {messages.map((msg, ind) => (
              <div key={ind} className="admin_m border rounded border-info px-4 py-2">
                {msg}
              </div>
            ))}
          </div>
          <br />
          {/* Message input */}
          <div className="form-group">
            <label htmlFor="messageInput">Message</label>
            <textarea
              id="messageInput"
              className="form-control"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              rows="5"
              required
            ></textarea>
          </div>
          <br />
          {/* Send button */}
          <div className="form-group">
            <button onClick={sendMessage} className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


