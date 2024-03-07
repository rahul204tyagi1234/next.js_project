"use client";
import { useEffect, useState } from "react";
import React, { useRef } from "react";

import Chat from "../chat/page";
import LiveChat from "../livechat/page";
export default function Button() {
  const CrouselArea = () => {  
    const targetElement = document.getElementById('carouselExampleCaptions container between');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const builtArea = () => {    
      const targetElement = document.getElementById('Built area');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const notificationsArea = () => {    
      const targetElement = document.getElementById('Notifications area');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollDown = () => {
      const scrollAmount = 5000;
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
    };
    const scrollUp = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  useEffect(() => {
  });
  const [selectedOption, setSelectedOption] = useState();
  const loadChat = () => {
    switch (selectedOption) {
      case "chat":
        return (
          <div>
            <Chat />
            {/* <LiveChat/> */}
            <div className="btn-group dropup  close-buttom">
              <button
                className="btn btn-dark rounded-circle"
                onClick={() => setSelectedOption("null")}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        );
        case "chating":
          return (
            <div>
              <LiveChat />
              {/* <LiveChat/> */}
              <div className="btn-group dropup  close-buttom">
                <button
                  className="btn btn-dark rounded-circle"
                  onClick={() => setSelectedOption("null")}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          );
      case "null":
        return null;
      default:
        return null;
    }
  };
  return (
    <div>
     {loadChat()}
      <div className="d-grid gap-2 d-md-flex scroll-bottom">
        <button
          type="button"
          className="btn btn-primary glyphicon glyphicon-refresh  "
          data-bs-toggle="dropdown"
          aria-expanded="false"
          // onClick={bubbleClick}
        >
          &#9851;Scroll
        </button>
        <ul className="dropdown-menu ">
          <li className="list-group-item">
            <a className="dropdown-item" onClick={scrollUp}>
              Scroll Up
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={CrouselArea}>
              Crausel Area
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={builtArea}>
              Built Area
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={notificationsArea}>
              Notification Area
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={scrollDown}>
              Scroll Down
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-group dropup  chat-bottom">
        <button
          className="btn btn-dark rounded-circle"
          onClick={() => setSelectedOption("chat")}
          type="button"
        >
          Chat
        </button>
      </div>
    </div>
  );
}
