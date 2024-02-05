import React from "react";
import "./chatbox.css";

export default function Chatbox() {
  return (
    <>
    <div id="chatbox">
            <div id="chatbox-header">
            </div>
            <div id="chatbox-body">
            </div>
            <div id="chatbox-footer">
                <input 
                 className="inputtxt"
                 type="text"
                 placeholder="Type your message here..." />
                <button>Send</button>
            </div>
        </div>
    </>
  );
}
