import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material/";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import PhoneIcon from "@mui/icons-material/Phone";

export default function NavBar() {
  return (
    <Box
      sx={{
        padding: "24px 48px 18px 48px",
        width: "auto",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography color="white" variant="h3">
        Algorithms Virtual TA
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="TA_school_email@utdallas.edu" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="512-123-4567" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
