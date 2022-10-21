import React from "react";
import { Box, Paper } from "@mui/material";
import ChatBot from "../src/components/chatbot";
import NavBar from "../src/components/nav-bar";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "Stretch ",
        flexDirection: "column",
        // backgroundColor: "black",
      }}
    >
      <NavBar />

      <Paper elevation={3} sx={{ margin: "18px 48px 18px 48px" }}>
        <ChatBot />
      </Paper>
    </Box>
  );
}
