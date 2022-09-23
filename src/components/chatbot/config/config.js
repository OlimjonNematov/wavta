import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello there! \n I am your Virtual TA, how can I help?`
    ),
  ],
};

export default config;
