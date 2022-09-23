import React from "react";
import { Box, Typography } from "@mui/material/";

export default function NavBar() {
  return (
    <Box sx={{ color: "primary.main", padding: "48px" }}>
      <Typography variant="h3">Welcome to your Virtual TA</Typography>
    </Box>
  );
}
