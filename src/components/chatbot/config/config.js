// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import './Styles.css';

const botName = "WAVTA";

const config = {
  initialMessages: [createChatBotMessage(`Hi! It's ${botName}, your Virtual TA!`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
