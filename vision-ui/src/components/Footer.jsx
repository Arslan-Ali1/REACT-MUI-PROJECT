import React from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #0039cb, #1976d2)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        py: 1,
        fontSize: "14px",
        mt: 4, // content ke baad gap

        // sidebar offset
        ml: "250px",
        width: "calc(100% - 250px)",

        // responsive: sidebar collapse hone par full width
        [theme.breakpoints.down("md")]: {
          ml: 0,
          width: "100%",
        },
      }}
    >
      {/* Left side */}
      <Typography variant="body2" sx={{ color: "white" }}>
        © 2021, Made with{" "}
        <span style={{ color: "red" }}>❤️</span> by{" "}
        <Link href="#" underline="hover" color="inherit" sx={{ fontWeight: "bold" }}>
          Sinnmple
        </Link>{" "}
        &{" "}
        <Link href="#" underline="hover" color="inherit" sx={{ fontWeight: "bold" }}>
          Creative Tim
        </Link>{" "}
        for a better web
      </Typography>

      {/* Right side */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Link href="#" underline="hover" color="inherit">
          Marketplace
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Blog
        </Link>
        <Link href="#" underline="hover" color="inherit">
          License
        </Link>
      </Box>
    </Box>
  );
}
