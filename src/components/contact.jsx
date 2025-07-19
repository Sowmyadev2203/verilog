import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

// Replace this with your actual image path or import
const backgroundImageUrl = "/images/contact-bg.jpg"; // Or use imported image

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "#fff",
        textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)", // dark overlay
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
          Contact Us
        </Typography>
        <Breadcrumbs
          separator=" / "
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.1rem",
          }}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/pages">
            Pages
          </Link>
          <Typography sx={{ color: "#f1c40f" }}>Contact</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}
