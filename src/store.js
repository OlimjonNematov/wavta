import { configureStore } from "@reduxjs/toolkit";
import chatbotSlice from "./state/chatbotSlice";

export default configureStore({
  reducer: {
    counter: chatbotSlice,
  },
});
