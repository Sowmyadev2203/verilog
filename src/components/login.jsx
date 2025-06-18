import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import { Facebook, Google, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/system";

const TransitionContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSignUp",
})(({ isSignUp }) => ({
  display: "flex",
  width: "200%",
  height: "100%",
  position: "relative",
  transition: "transform 0.6s ease-in-out",
  transform: isSignUp ? "translateX(-50%)" : "translateX(0%)",
  justifyContent: "space-between",
}));

const Panel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "position" && prop !== "isSignUp",
})(({ position, isSignUp, theme }) => ({
  position: "absolute",
  width: "50%",
  height: "100%",
  top: 0,
  left: position === "left" ? 0 : "40%",
  background:
    position === "left"
      ? "linear-gradient(to bottom right,rgb(118, 229, 14), #333333)"
      : "linear-gradient(to bottom right, rgb(118, 229, 14), #424242)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  zIndex: 1,
  transition: "transform 0.6s ease-in-out",
  transform:
    position === "left"
      ? isSignUp
        ? "translateX(0%)"
        : "translateX(100%)"
      : isSignUp
      ? "translateX(-100%)"
      : "translateX(0%)",
}));

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={6}
        sx={{
          width: 800,
          height: 500,
          overflow: "hidden",
          position: "relative",
          borderRadius: 5,
          backgroundColor: "#FFFFFF",
        }}
      >
        <TransitionContainer isSignUp={isSignUp}>
          {/* Sign In Form - FIRST */}
          <Box
            sx={{
              width: "25%",
              flexShrink: 0, // <-- Prevent shrinking
              p: 5,
              zIndex: 2,
              backgroundColor: "#FFFFFF",
              overflowY: "auto", // <-- Scroll if content too tall
              marginRight: "6%",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#000000" }}>
              Sign In
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <IconButton>
                <Google sx={{ color: "#000000" }} />
              </IconButton>
              <IconButton>
                <Facebook sx={{ color: "#000000" }} />
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: "#000000" }} />
              </IconButton>
            </Box>

            <Typography variant="body2" mb={2} sx={{ color: "#555555" }}>
              or use your email for sign in
            </Typography>

            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiInputLabel-root": { color: "#000000" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000000" },
                  "& .MuiOutlinedInput-root": {
                    color: "#000000",
                    "& fieldset": { borderColor: "#CCCCCC" },
                    "&:hover fieldset": { borderColor: "#000000" },
                    "&.Mui-focused fieldset": { borderColor: "#000000" },
                  },
                }}
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiInputLabel-root": { color: "#000000" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000000" },
                  "& .MuiOutlinedInput-root": {
                    color: "#000000",
                    "& fieldset": { borderColor: "#CCCCCC" },
                    "&:hover fieldset": { borderColor: "#000000" },
                    "&.Mui-focused fieldset": { borderColor: "#000000" },
                  },
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  alignSelf: "flex-end",
                  cursor: "pointer",
                  color: "#000000",
                }}
              >
                Forget Your Password?
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  "&:hover": { backgroundColor: "#333333" },
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Box>

          {/* Sign Up Form - SECOND */}
          <Box
            sx={{
              width: "25%",
              flexShrink: 0, 
              p: 5,
              zIndex: 2,
              backgroundColor: "#FFFFFF",
              overflowY: "auto", 
              marginLeft: "43%"
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#000000" }}>
              Create Account
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <IconButton>
                <Google sx={{ color: "#000000" }} />
              </IconButton>
              <IconButton>
                <Facebook sx={{ color: "#000000" }} />
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: "#000000" }} />
              </IconButton>
            </Box>

            <Typography variant="body2" mb={2} sx={{ color: "#555555" }}>
              or use your email for registration
            </Typography>

            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{
                 backgroundColor: "#F5F5F5",
                  "& .MuiInputLabel-root": { color: "#000000" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000000" },
                  "& .MuiOutlinedInput-root": {
                    color: "#000000",
                    "& fieldset": { borderColor: "#CCCCCC" },
                    "&:hover fieldset": { borderColor: "#000000" },
                    "&.Mui-focused fieldset": { borderColor: "#000000" },
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiInputLabel-root": { color: "#000000" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000000" },
                  "& .MuiOutlinedInput-root": {
                    color: "#000000",
                    "& fieldset": { borderColor: "#CCCCCC" },
                    "&:hover fieldset": { borderColor: "#000000" },
                    "&.Mui-focused fieldset": { borderColor: "#000000" },
                  },
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{
                 backgroundColor: "#F5F5F5",
                  "& .MuiInputLabel-root": { color: "#000000" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000000" },
                  "& .MuiOutlinedInput-root": {
                    color: "#000000",
                    "& fieldset": { borderColor: "#CCCCCC" },
                    "&:hover fieldset": { borderColor: "#000000" },
                    "&.Mui-focused fieldset": { borderColor: "#000000" },
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  "&:hover": { backgroundColor: "#333333" },
                }}
              >
                SIGN UP
              </Button>
            </Box>
          </Box>
        </TransitionContainer>

        {/* Panel */}
        <Panel position="left" isSignUp={isSignUp} sx={{ width: "50%" }}>
          <Typography variant="h4" gutterBottom>
            {isSignUp ? "Hello, Friend!" : "Welcome Back!"}
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            {isSignUp
              ?  "Register with your personal details to use all of site features" 
              : "Enter your personal details to use all of site features"}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={toggleForm}
            sx={{ borderColor: "white", color: "white" }}
          >
            {isSignUp ? "SIGN IN" : "SIGN UP"}
          </Button>
        </Panel>
      </Paper>
    </Grid>
  );
}
