import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/nav-bar";
import ChatBot from "../components/chatbot";

export default function Home() {
  return (
    <div style={{ padding: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "primary",
        }}
      >
        <NavBar />
      </Box>
      <Box>
        <ChatBot />
      </Box>
      {/* <Box>put scroll more here</Box> */}
    </div>
  );
}
