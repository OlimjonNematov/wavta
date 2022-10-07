// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you human.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThankYou = () => {
    const botMessage = createChatBotMessage("Of course! Is there anything else I can help you with?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleThankYou function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleThankYou,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
