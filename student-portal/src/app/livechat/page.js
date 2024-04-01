"use client";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function LiveChat() {
  const [socket, setSocket] = useState(undefined);
  const [inbox, setInbox] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };
  const scrollUpMessage = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const newSocket = io("http://localhost:3001");

    newSocket.on("message", (newMessage) => {
      setInbox((prevInbox) => [...prevInbox, newMessage]);
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
  }, [inbox]);

  return (
    <div className="card chat-form live-chat rounded">
      <a className="navbar-brand bg-primary bg-opacity-50 " href="#">
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
        Live Chat
        {isTyping && (
          <span className="ms-auto justify-content-end"> is Typing...</span>
        )}
        {!isTyping && (
          <span className="ms-auto justify-content-end"> is Online</span>
        )}
      </a>
      <div className="card-body">
        <div className=" live-scroll">
          {inbox.map((message, index) => (
            <div key={index} className="container d-flex justify-content-start">
              <div className="row row-cols-auto">
                <div className="col p-2  bg-info bg-opacity-75 text-white rounded m-1 show-message">
                  {message}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <br />
        <div className="form-group d-flex justify-content-between align-items-center">
          <input
            id="messageInput"
            className="form-control rounded-pill bg-secondary bg-opacity-10 m-2"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              socket.emit("typing");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            onBlur={() => socket.emit("stopTyping")}
            placeholder="Enter message"
            required
          />
          <button
            onClick={() => handleSendMessage()}
            className="btn btn-primary rounded-pill m-1  "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
