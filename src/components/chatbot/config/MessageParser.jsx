// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes("hello")) {
      actions.handleHello();
    }
    if (message.toLowerCase().includes("hi")) {
      actions.handleHello();
    }
    if (message.toLowerCase().includes("thank you")) {
      actions.handleThankYou();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
