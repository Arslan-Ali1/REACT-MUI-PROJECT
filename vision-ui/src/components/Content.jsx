import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  LinearProgress,
  Grid,
} from "@mui/material";
import XdIcon from "@mui/icons-material/Close";
import BugReportIcon from "@mui/icons-material/BugReport";
import LaunchIcon from "@mui/icons-material/Launch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddTaskIcon from "@mui/icons-material/AddTask";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const projects = [
  {
    name: "Chakra Vision UI Version",
    members: [
      { name: "A", img: "/1.png" },
      { name: "B", img: "/2.png" },
      { name: "C", img: "/3.png" },
      { name: "E", img: "/5.png" },
    ],
    budget: "$14,000",
    completion: 60,
    icon: <XdIcon sx={{ color: "#f24e1e" }} />,
  },
  {
    name: "Add Progress Track",
    members: [
      { name: "A", img: "/1.png" },
      { name: "B", img: "/2.png" },
    ],
    budget: "$3,000",
    completion: 10,
    icon: <AddTaskIcon sx={{ color: "#377dff" }} />,
  },
  {
    name: "Fix Platform Errors",
    members: [
      { name: "A", img: "/1.png" },
      { name: "B", img: "/2.png" },
      { name: "E", img: "/5.png" },
    ],
    budget: "Not set",
    completion: 100,
    icon: <BugReportIcon sx={{ color: "#ff4757" }} />,
  },
  {
    name: "Launch our Mobile App",
    members: [
      { name: "A", img: "/1.png" },
      { name: "B", img: "/2.png" },
      { name: "C", img: "/3.png" },
      { name: "D", img: "/4.png" },
    ],
    budget: "$20,500",
    completion: 100,
    icon: <LaunchIcon sx={{ color: "#2ed573" }} />,
  },
  {
    name: "Add the New Pricing Page",
    members: [
      { name: "A", img: "/1.png" },
      { name: "B", img: "/2.png" },
    ],
    budget: "$500",
    completion: 25,
    icon: <ShoppingCartIcon sx={{ color: "#1e90ff" }} />,
  },
  {
    name: "Redesign New Online Shop",
    members: [
      { name: "A", img: "/1.png" },
      { name: "B", img: "/2.png" },
      { name: "D", img: "/4.png" },
      { name: "E", img: "/5.png" },
    ],
    budget: "$2,000",
    completion: 40,
    icon: <XdIcon sx={{ color: "#e84393" }} />,
  },
];

const orders = [
  {
    label: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    icon: <NotificationsIcon sx={{ color: "#377dff" }} />,
  },
  {
    label: "New order #1832412",
    date: "21 DEC 11:00 PM",
    icon: <ShoppingCartIcon sx={{ color: "#ff4757" }} />,
  },
  {
    label: "Server Payments for April",
    date: "21 DEC 9:34 PM",
    icon: <CloudUploadIcon sx={{ color: "#1e90ff" }} />,
  },
  {
    label: "New card added for order #4395",
    date: "20 DEC 2:20 AM",
    icon: <CreditCardIcon sx={{ color: "#ffa502" }} />,
  },
  {
    label: "New card added for order #4395",
    date: "18 DEC 4:54 AM",
    icon: <CreditCardIcon sx={{ color: "#a29bfe" }} />,
  },
  {
    label: "New order #9583120",
    date: "17 DEC",
    icon: <XdIcon sx={{ color: "#e84393" }} />,
  },
];

export default function Content() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "calc(100% - 260px)" },
        ml: { xs: 0, md: "230px" },
        p: 3,
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3}>
        {/* Projects Card */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: 3,
              bgcolor: "#05215d",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
              p: 1,
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
                Projects
              </Typography>
              <Typography variant="body2" sx={{ color: "limegreen", mb: 2 }}>
                ✔ 30 done this month
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 1,
                  color: "#ffff",
                  fontSize: 14,
                }}
              >
                <Typography sx={{ color: "rgba(160, 174, 192, 1)" }}>COMPANIES</Typography>
                <Typography sx={{ color: "rgba(160, 174, 192, 1)" }}>MEMBERS</Typography>
                <Typography sx={{ color: "rgba(160, 174, 192, 1)" }}>BUDGET</Typography>
                <Typography sx={{ color: "rgba(160, 174, 192, 1)" }}>COMPLETION</Typography>
              </Box>

              {projects.map((proj, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    justifyContent: "space-between",
                    mt: 2,
                    gap: 1,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    pb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1, minWidth: 0, mt: 3 }}>
                    {proj.icon}
                    <Typography sx={{ color: "white", wordBreak: "break-word", flex: 1, minWidth: 0 }}>
                      {proj.name}
                    </Typography>
                  </Box>

                  <AvatarGroup
                    max={4}
                    sx={{
                      justifyContent: { xs: "flex-start", md: "center" },
                      mt: { xs: 1, md: 0 },
                      "& .MuiAvatar-root": { marginRight: 1, border: "2px solid #05215d" },
                    }}
                  >
                    {proj.members.map((m, i) => (
                      <Avatar key={i} src={m.img} alt={m.name} />
                    ))}
                  </AvatarGroup>

                  <Typography
                    sx={{
                      width: { xs: "100%", md: 220 },
                      textAlign: { xs: "left", md: "center" },
                      color: "white",
                      mt: { xs: 1, md: 0 },
                    }}
                  >
                    {proj.budget}
                  </Typography>

                  <Box sx={{ width: { xs: "100%", md: 120 }, mt: { xs: 1, md: 0 } }}>
                    <LinearProgress variant="determinate" value={proj.completion} sx={{ height: 6, borderRadius: 5 }} />
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Orders Overview Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              bgcolor: "#05215d",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
              p: 1,
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                Orders overview
              </Typography>
              <Typography variant="body2" sx={{ color: "limegreen", mb: 2 }}>
                +30% this month
              </Typography>

              {orders.map((order, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 1,
                    borderRadius: 2,
                    mt: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {order.icon}
                    <Typography sx={{ color: "white" }}>{order.label}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: "#A0AEC0", mt: 0.5 }}>
                    {order.date}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
