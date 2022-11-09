import React, { useState } from "react";
import { Box, Dialog, Divider, Button, Paper } from "@mui/material";
import ChatBot from "../src/components/chatbot";
import NavBar from "../src/components/nav-bar";
import ChatIcon from "@mui/icons-material/Chat";

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const setDialogState = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />

      <ChatBot />
    </Box>
  );
}
