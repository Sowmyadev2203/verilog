import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Intques from "./components/int";
import About from "./components/Aboutus";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Courses from "./components/courses"
import ProtectedRoute from "./routes/ProtectedRoute";
import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        background: {
          default: isDarkMode ? "#000000" : "#ffffff",
          paper:isDarkMode ? "#000000" : "#ffffff",
        },
        text: {
          primary: isDarkMode ? "#fff" : "#000",
        },
      },
    }), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleTheme={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/interview" element={<Intques />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
