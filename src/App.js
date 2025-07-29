import { Routes, Route, useLocation,Navigate } from "react-router-dom";
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
import TrainCodeTabs from "./components/traincode/TrainCodeTabs";
import VerilogHome from "./components/veriloghome";
import Contact from "./components/contact";
import Codedes from "./components/traincode/codedes";
import StartCoding from "./components/traincode/startcodeing";
import SampleCode from "./components/traincode/samplecode";
import AiHelp from "./components/traincode/aihelp";
import FeedbackForm from "./components/feedback/feedback"

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
          default: isDarkMode ? "#0d1117" : "#f5f5f5",  // page background
          paper: isDarkMode ? "#161b22" : "#ffffff",    // card/panel background
        },
        text: {
          primary: isDarkMode ? "#e6edf3" : "#1a1a1a",   // main text
          secondary: isDarkMode ? "#8b949e" : "#555",    // subtext
        },
        primary: {
          main: isDarkMode ? "#d9dfe7ff" : "#d1ccdcff",      // buttons, highlights
        },
        secondary: {
          main: isDarkMode ? "#c778dd" : "#d8d2e1ff",      // optional accent
        },
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '& label': {
                color: isDarkMode ? '#fff' : undefined,
              },
              '& label.Mui-focused': {
                color: isDarkMode ? '#edeae2ff' : '#161617ff',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              color: isDarkMode ? '#fff' : undefined,
              backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#888' : 'rgba(0, 0, 0, 0.23)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#bbb' : '#000',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#dbdeeeff' : '#121213ff',
              },
            },
          },
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
        {/* <Route
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
                <TrainCodeTabs />
              </motion.div>
            </AnimatePresence>
          }
        /> */}
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
         <Route
          path="/contact"
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6 }}
              >
                <Contact />
              </motion.div>
            </AnimatePresence>
          }
        />


        {/* Other pages no animation — normal */}
         <Route path="/skilltrack" element={<Coding />} />
        <Route path="/waveform" element={<Waveform />} />
        <Route path="/rtl" element={<Rtl />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verilog" element={<VerilogHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<FeedbackForm />} />


  <Route path="/traincode" element={<TrainCodeTabs />}>
  <Route path="codedes" element={<Codedes />} />
  <Route path="samplecode" element={<SampleCode />} />
  <Route path="startcoding" element={<StartCoding />} />
  <Route path="ai-help" element={<AiHelp />} />
  <Route index element={<Navigate to="codedes" />} />
</Route>

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
