import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationIcon from "@mui/icons-material/Notifications";


export default function Navbar() {
  return (
    <>
    

      {/* Top Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { xs: "100%", md: "calc(100% - 260px)" },
          ml: { xs: 0, md: "260px" },
          mt: "10px",
          borderRadius: "8px",
          backgroundColor: "#042154",
          px: 2,
          height: 52,
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "unset",
          }}
        >
          {/* Left - Breadcrumb */}
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "gray", display: "block", fontSize: "0.75rem" }}
            >
              Pages / Dashboard
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Dashboard
            </Typography>
          </Box>

          {/* Right - Search & Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {/* Search Box */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                px: 1.5,
                py: 0.3,
                color: "white",
              }}
            >
              <SearchIcon sx={{ fontSize: "18px", opacity: 0.7 }} />
              <InputBase
                placeholder="Type here..."
                sx={{
                  ml: 1,
                  color: "white",
                  fontSize: "0.85rem",
                  width: { xs: "100px", md: "200px" },
                }}
              />
            </Box>
         
            {/* Sign In */}
            <IconButton sx={{ color: "#718096", fontSize: "0.8rem" }}>
              <PersonIcon fontSize="small" />
              <Typography
                sx={{ ml: 0.5, fontSize: "0.85rem", color: "#718096" }}
              >
                Sign In
              </Typography>
            </IconButton>
 <Box sx={{mr:"30px"}} >

            {/* Settings */}
            <IconButton sx={{ color: "#718096" }}>
              <SettingsIcon fontSize="small" />
            </IconButton>

            {/* Notification */}
            <IconButton sx={{ color: "#718096" }}>
              <NotificationIcon fontSize="small" />
            </IconButton>
 </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
