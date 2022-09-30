import React from "react";
import { Box, Typography } from "@mui/material/";

export default function NavBar() {
  return (
    <Box sx={{ margin: "48px", width: "auto" }}>
      <Typography color="white" variant="h3">
        Welcome to your Virtual TA
      </Typography>
    </Box>
  );
}
