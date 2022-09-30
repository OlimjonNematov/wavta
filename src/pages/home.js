import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/nav-bar";
import ChatBot from "../components/chatbot";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center ",
        flexDirection: "column",
        // backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          marginBottom: "48px",
        }}
      >
        <NavBar />
      </Box>
      <Box sx={{}}>
        <ChatBot />
      </Box>
      {/* <Box>put scroll more here</Box> */}
    </Box>
  );
}
