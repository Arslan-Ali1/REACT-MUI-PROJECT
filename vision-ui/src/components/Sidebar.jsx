import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const menuItems1 = [
  {
    text: "Dashboard",
    icon: (
      <DashboardIcon
        sx={{
          backgroundColor: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  },
  {
    text: "Tables",
    icon: (
      <TableChartIcon
        sx={{
          backgroundColor: "#1A1F37",
          color: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  },
  {
    text: "Billing",
    icon: (
      <ReceiptIcon
        sx={{
          backgroundColor: "#1A1F37",
          color: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  },
  {
    text: "RTL",
    icon: (
      <LanguageIcon
        sx={{
          backgroundColor: "#1A1F37",
          color: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  }
];

const menuItems2 = [
  {
    text: "Profile",
    icon: (
      <PersonIcon
        sx={{
          backgroundColor: "#1A1F37",
          color: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  },
  {
    text: "Sign In",
    icon: (
      <LoginIcon
        sx={{
          backgroundColor: "#1A1F37",
          color: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  },
  {
    text: "Sign Up",
    icon: (
      <AppRegistrationIcon
        sx={{
          backgroundColor: "#1A1F37",
          color: "#0075ff",
          padding: "4px",
          height: "30px",
          width: "30px",
          borderRadius: "12px"
        }}
      />
    )
  }
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.7, mb: 2, color: "white", textAlign: "center" }}
        >
          VISION UI FREE
        </Typography>

        <List sx={{ width: "200px", height: "220px" }}>
          {menuItems1.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderRadius: "8px",
                mb: 1,
                background:
                  index === 0 ? "rgba(59, 130, 246, 0.3)" : "transparent",
                "&:hover": { background: "rgba(59, 130, 246, 0.2)" }
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>

        <Typography
          variant="subtitle2"
          sx={{ mt: 2, mb: 1, fontSize: "15px", color: "#FFFF" }}
        >
          ACCOUNT PAGES
        </Typography>

        <List>
          {menuItems2.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderRadius: "8px",
                mb: 1,
                "&:hover": { background: "rgba(59, 130, 246, 0.2)" }
              }}
            >
              <ListItemIcon sx={{ color: "#0075ff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: "auto" }}>
        <Card
          sx={{
            borderRadius: "12px",
            p: 1,
            mb: 2,
            backgroundImage: "url('/bottom.png') "
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold" color="white">
              Need help?
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
              Please check our docs
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                background:
                  "linear-gradient(135deg, rgba(6, 11, 40, 0.74), rgba(10, 14, 35, 0.71))",
                color: "white",
                textTransform: "none",
                "&:hover": { background: "#f1f5f9" }
              }}
            >
              Documentation
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Button
        variant="contained"
        size="large"
        sx={{
          margin: "10px",
          marginTop: "20px",
          background: "#0c98fe",
          color: "white",
          textTransform: "none",
          "&:hover": { background: "#f1f5f9" }
        }}
      >
        Upgrade To PRO
      </Button>
    </Box>
  );

  return (
    <>
      {/* Mobile Menu Button (right side) */}
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            color: "#0075ff",
            zIndex: 1300
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={isMobile ? "right" : "left"} // mobile -> right, desktop -> left
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 245,
            height: "100vh",
            boxSizing: "border-box",
            background:
              "linear-gradient(rgba(6, 11, 38, 0.94),rgba(26, 31, 55, 0))",
            color: "white",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflowY: "auto"
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
