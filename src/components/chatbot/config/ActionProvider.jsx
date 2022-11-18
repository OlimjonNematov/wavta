// in ActionProvider.jsx
import React from "react";
import { useEffect } from "react";
// import { axios } from "axios";

const axios = require("axios").default;

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you!");

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
    if (msg.includes("hi") || msg.includes("hello")) {
      handleHello();
    } else if (msg.includes("thank you")) {
      handleThankYou();
    } else {
      const url = `/api/qna?question=${msg}`;
      try {
        const response = await axios.get(url);
        console.log(response.json);
        const botMessage = createChatBotMessage("response");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      } catch (error) {
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
