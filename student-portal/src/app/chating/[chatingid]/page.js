"use client";

import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

export default function ChattingId(props) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const [chatUserName, setChatUserName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const showName = async () => {
    let data = await fetch("http://localhost:3000/api/userchat", {
      cache: "no-cache",
    });
    data = await data.json();
    let users = data.result;

    let currentId = props.params.chatingid;
    let userResult = users.find((obj) => obj._id === currentId);
    if (userResult) {
      setChatUserName(userResult.name);
    }
  };

  const scrollUpMessage = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (socket) {
      socket.emit("message", msg);
      setMsg("");
    }
  };

  useEffect(() => {
    showName();

    const newSocket = io("http://localhost:3001");

    newSocket.on("message", (newAdminMessage) => {
      setMessages((prevMessages) => [...prevMessages, newAdminMessage]);
      scrollUpMessage(); 
    });

    newSocket.on("typing", () => {
      setIsTyping(true);
    });

    newSocket.on("stopTyping", () => {
      setIsTyping(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("userTyping", () => {
      setIsTyping(true);
    });

    socket.on("userStopTyping", () => {
      setIsTyping(false);
    });

    return () => {
      socket.off("userTyping");
      socket.off("userStopTyping");
    };
  }, [socket]);

  useEffect(() => {
    scrollUpMessage(); 
  }, [messages]);

  return (
    <div className="container-sm rounded">
      <div className="card">
        <a className="navbar-brand bg-primary bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>{" "}
          {chatUserName}
          
          {isTyping && (
            <span className="ms-auto justify-content-end"> is Typing...</span>
          )}
          {!isTyping && (
            <span className="ms-auto justify-content-end"> is Online</span>
          )}
        </a>

        <div className="card-body">
          <div className="message scroll">
            {messages.map((msg, ind) => (
              <div
                key={ind}
                className="container d-flex justify-content-end"
              >
                <div className="row row-cols-auto">
                  <div className="col p-2 bg-secondary text-white rounded m-1 show-message">
                    {msg}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> 
          </div>
        </div>
        <br />
        <div className="form-group d-flex justify-content-between align-items-center">
          <input
            id="messageInput"
            className="form-control rounded-pill bg-secondary bg-opacity-10 m-2"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
              socket.emit("typing");
            }}
            onBlur={() => socket.emit("stopTyping")}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Enter message"
            required
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary rounded-pill m-1"
          >
            Send
          </button>
        </div>
        <br />
        <div className="form-group"></div>
      </div>
    </div>
  );
}





