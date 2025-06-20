import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import EDAPlaygroundUI from "./components/intermediate";
import Waveform from "./components/waveform";
import Rtl from "./components/rtl";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Coding from "./components/coding";
import { AnimatePresence, motion } from "framer-motion";
import Training from "./components/training";
import TrainCode from "./components/traincode";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  const direction = location.state?.direction || "rightToLeft";  // 👈 NEW: get direction from location.state

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          background: {
            default: isDarkMode ? "#000000" : "#ffffff",
            paper: isDarkMode ? "#000000" : "#ffffff",
          },
          text: {
            primary: isDarkMode ? "#fff" : "#000",
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />

      <Routes location={location}>
        {/* These pages have animation */}
        <Route
          path="/"
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6 }}
              >
                <Home />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/intermediate"
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              >
                <EDAPlaygroundUI />
              </motion.div>
            </AnimatePresence>
          }
        />
        {/* <Route
          path="/coding"
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{
                  x: direction === "leftToRight" ? "-100%" : "100%"
                }}
                animate={{ x: 0 }}
                exit={{
                  x: direction === "leftToRight" ? "100%" : "-100%"
                }}
                transition={{ duration: 0.6 }}
              >
                <Coding />
              </motion.div>
            </AnimatePresence>
          }
        /> */}
        <Route
          path="/traincode"
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6 }}
              >
                <TrainCode />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/training"
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6 }}
              >
                <Training />
              </motion.div>
            </AnimatePresence>
          }
        />

        {/* Other pages no animation — normal */}
         <Route path="/coding" element={<Coding />} />
        <Route path="/waveform" element={<Waveform />} />
        <Route path="/rtl" element={<Rtl />} />
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
