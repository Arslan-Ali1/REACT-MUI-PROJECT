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
import DashboardIcon from '@mui/icons-material/Home';
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const menuItems1 = [
  { text: "Dashboard", icon: <DashboardIcon sx={{backgroundColor:"#0075ff"}}/> },
  { text: "Tables", icon: <TableChartIcon sx={{color:"#0075ff"}} /> },
  { text: "Billing", icon: <ReceiptIcon /> },
  { text: "RTL", icon: <LanguageIcon /> },
];

const menuItems2 = [
  { text: "Profile", icon: <PersonIcon /> },
  { text: "Sign In", icon: <LoginIcon /> },
  { text: "Sign Up", icon: <AppRegistrationIcon /> },
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false); // drawer ka toggle state

  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Top Section */}
      <Box>
        <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 2 ,color:"white",textAlign:"center"}}>
          VISION UI FREE
        </Typography>

        {/* Menu Group 1 */}
        <List>
          {menuItems1.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderRadius: "8px",
                mb: 1,
                background:
                  index === 0 ? "rgba(59, 130, 246, 0.3)" : "transparent",
                "&:hover": { background: "rgba(59, 130, 246, 0.2)" },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>

        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.6, mt: 2, mb: 1, fontSize: "0.75rem",color:"white"}}
        >
          ACCOUNT PAGES
        </Typography>

        {/* Menu Group 2 */}
        <List>
          {menuItems2.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderRadius: "8px",
                mb: 1,
                "&:hover": { background: "rgba(59, 130, 246, 0.2)" },
              }}
            >
              <ListItemIcon sx={{ color: "#0075ff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Bottom Card */}
      <Card
        sx={{
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
          color: "white",
          borderRadius: "12px",
          p: 1,
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Need help?
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Please check our docs
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              background: "white",
              color: "#1e3a8a",
              textTransform: "none",
              "&:hover": { background: "#f1f5f9" },
            }}
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <>
      {/* Hamburger Button only on Mobile */}
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ position: "fixed", top: 16, left: 16, color: "#0075ff", zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            background: "linear-gradient(to bottom, #060B26F0 94%, #1A1F3700 0%)",
            color: "white",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
