// in ActionProvider.jsx
import React from "react";
import { useEffect } from "react";
// import { axios } from "axios";

const axios = require("axios").default;

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you human.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThankYou = () => {
    const botMessage = createChatBotMessage(
      "Of course! Is there anything else I can help you with?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMessage = async (msg) => {
    if (msg.includes("hi")) {
      handleHello();
    } else if (msg.includes("thank you")) {
      handleThankYou();
    } else {
      const url = `/api/qna?question=${msg}`;
      try {
        const response = await axios.get("http://bit.ly/2mTM3nY");
        console.log(response.json);
        const botMessage = createChatBotMessage("response");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      } catch (error) {
        console.log("failed to get answer");
        const botMessage = createChatBotMessage(
          "Sorry, I didn't understand.  \n Could you rephrase the question?"
        );
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
