import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  CircularProgress
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Main() {
  return (
    <Box sx={{ p: 2,  width: { xs: "100%", md: "calc(100% - 260px)" },
        ml: { xs: 0, md: "240px" },
        mt: 0, }}>
      <Grid container spacing={2}>
        {/* Column 1 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
             flexBasis: { xs: "100%", md: "42%" }, 
             maxWidth: { xs: "100%", md: "42%" },
            height: "344px",
            backgroundImage: `url('/bgFish.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            p: 3
          }}
        >
          <Typography
            sx={{ color: "#a0aec0", mb: 1 }}
            variant="subtitle1"
            fontWeight="bold"
          >
            Welcome back,
          </Typography>

          <Typography variant="h5" sx={{ color: "#fff", fontSize: "28px", mb: 1 }}>
            Mark Johnson
          </Typography>

          <Typography variant="body2" sx={{ color: "#a0aec0" }}>
            Glad to see you again!
          </Typography>
          <Typography variant="body2" sx={{ color: "#a0aec0" }}>
            Ask me anything.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <IconButton
              sx={{
                color: "#718096",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography
                sx={{  fontSize: "0.85rem", color: "#ffff",mt:13 }}
              >
                Tap to record
              </Typography>
              <ArrowRightAltIcon sx={{mt:13,color:"#ffff"}} />
            </IconButton>
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12}  sx={{   flexBasis: { xs: "100%", md: "25%" },maxWidth: { xs: "100%", md: "25%" }}}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
             background: "linear-gradient(to bottom, rgba(6, 11, 40, 0.94), rgba(10, 14, 35, 0.49))",

              color: "#fff",
              height: "344px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <Box>
              <Typography sx={{ color: "white" }} variant="h6" fontWeight="bold">
                Satisfaction Rate
              </Typography>
              <Typography variant="body2" sx={{ color: "#a0aec0" }}>
                From all projects
              </Typography>
            </Box>

            <Box sx={{ position: "relative", display: "inline-flex", mx: "auto" }}>
              <CircularProgress
                variant="determinate"
                value={90}
                size={170}
                thickness={5}
                sx={{ color: "#1976d2" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Box sx={{background:"rgba(0, 117, 255, 1)", borderRadius:"50%",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}><InsertEmoticonIcon sx={{ fontSize: 40, color: "#ffff",width:"30px",height:"30px"}} />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                 background: "linear-gradient(to bottom, rgba(6, 11, 40, 0.74), rgba(10, 14, 35, 0.71))",
                 
              }}
            >
              <Typography variant="body2"sx={{color:"rgba(160, 174, 192, 1)"}}>0%</Typography>
              <Box>
                <Typography variant="h5" fontWeight="bold" color="white">
                  95%
                </Typography>
                <Typography variant="caption" sx={{ color: "#a0aec0" }}>
                  Based on likes
                </Typography>
              </Box>
              <Typography variant="body2" sx={{color:"rgba(160, 174, 192, 1)"}}>100%</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Column 3 */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            flexBasis: { xs: "100%", md: "30%" }, 
    maxWidth: { xs: "100%", md: "30%" },
            height: "344px",
            background: "linear-gradient(to bottom, #060B28BD, #0E153AB5)",
            borderRadius: "10px",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#fff"
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="#fff">
              Referral Tracking
            </Typography>
            <IconButton sx={{ color: "#fff" }}>
              <MoreHorizIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 2
            }}
          >
            <Box>
              <Box
                sx={{
                  mb: 2,
                  backgroundColor: "#060C29",
                  p: 2,
                  borderRadius: "20px"
                }}
              >
                <Typography variant="body2" sx={{ color: "#A0AEC0" }}>
                  Invited
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="#fff">
                  145 people
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#060C29",
                  p: 2,
                  borderRadius: "20px"
                }}
              >
                <Typography variant="body2" sx={{ color: "#A0AEC0" }}>
                  Bonus
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="#fff">
                  1,465
                </Typography>
              </Box>
            </Box>

            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={75}
                size={140}
                thickness={5}
                sx={{ color: "#00ffcc", transform: "rotate(135deg)" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Typography variant="body2" sx={{ color: "#A0AEC0" }}>
                  Safety
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="#fff">
                  9.3
                </Typography>
                <Typography variant="caption" sx={{ color: "#A0AEC0" }}>
                  Total Score
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
