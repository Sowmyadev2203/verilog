import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Stack, useTheme } from "@mui/material";


export default function Home() {
  const theme = useTheme();
  const words = ["Climb", "Explore", "Master", "Advance"];
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setTyped(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTyped(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 75);
    } else if (!deleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "90vh",
        px: { xs: 2, md: 6 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* Text Content */}
      <Grid item xs={12} md={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Verilog
        </Typography>

        <Typography variant="h4" fontWeight="medium" gutterBottom>
          <span style={{ borderRight: "20px solid", paddingRight: 4, color: "limegreen" }}>
            {typed}
          </span>{" "}
          through levels of logic design
        </Typography>

        <Typography variant="body1" paragraph>
          We provide top-quality courses and interview support to help you
          achieve your career goals.
          <br />
          Explore our resources and start learning today with expert mentorship
          and real-world projects.
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Stack>
      </Grid>

      {/* Responsive Image */}
      <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Learning"
          style={{
            width: "100%",
            maxWidth: 500,
            height: "auto",
            borderRadius: 12,
            boxShadow: theme.shadows[3],
          }}
        />
      </Grid>
    </Grid>
  );
}
