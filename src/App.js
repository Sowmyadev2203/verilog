import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import Coding from "./components/coding";
import { AnimatePresence, motion } from "framer-motion";
import Training from "./components/training";
import TrainCodeTabs from "./components/traincode/TrainCodeTabs";
import VerilogHome from "./components/veriloghome";
import Contact from "./components/contact";
import Codedes from "./components/traincode/codedes";
import StartCoding from "./components/traincode/startcodeing";
import SampleCode from "./components/traincode/samplecode";
import FeedbackForm from "./components/feedback/feedback";
import PubSub from "./components/traincode/pubsub";
import Stopwatch from "./components/Livetimer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CodeS from "./components/codeS";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          background: {
            default: isDarkMode ? "#0d1117" : "#f5f5f5",
            paper: isDarkMode ? "#161b22" : "#ffffff",
          },
          text: {
            primary: isDarkMode ? "#e6edf3" : "#1a1a1a",
            secondary: isDarkMode ? "#8b949e" : "#555",
          },
          primary: {
            main: isDarkMode ? "#d9dfe7ff" : "#d1ccdcff",
          },
          secondary: {
            main: isDarkMode ? "#c778dd" : "#d8d2e1ff",
          },
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                "& label": {
                  color: isDarkMode ? "#fff" : undefined,
                },
                "& label.Mui-focused": {
                  color: isDarkMode ? "#edeae2ff" : "#161617ff",
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                color: isDarkMode ? "#fff" : undefined,
                backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#888" : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#bbb" : "#000",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#dbdeeeff" : "#121213ff",
                },
              },
            },
          },
        },
      }),
    [isDarkMode]
  );

  // 👇 move this UP here, before using it
  const hideNavbarRoutes = ["/traincode" ,"/codeS"];
  const isTrainCodePage = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {!isTrainCodePage ? (
        <Navbar
          toggleTheme={() => setIsDarkMode(!isDarkMode)}
          isDarkMode={isDarkMode}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: 2,
            py: 1,
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1300,
            backgroundColor: isDarkMode ? "#0d1117" : "#fff",
            borderBottom: "1px solid",
            borderColor: isDarkMode ? "#333" : "#ccc",
            width: "100%",
          }}
        >
          

          <IconButton
            color="inherit"
            onClick={() => (window.location.href = "/")}
            sx={{ mr: 1 }}
          >
            ←
          </IconButton>

          {/* Theme toggle */}
          <IconButton
            color="inherit"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Timer */}
          <Stopwatch />
        </Box>
      )}

      <Routes location={location}>
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
        <Route path="/codeS" element={<CodeS />} />
        <Route path="/skilltrack" element={<Coding />} />
        <Route path="/waveform" element={<Waveform />} />
        <Route path="/rtl" element={<Rtl />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verilog" element={<VerilogHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/traincode" element={<TrainCodeTabs />}>
          <Route path="/traincode/codedes" element={<Codedes />} />
          <Route path="/traincode/samplecode" element={<SampleCode />} />
          <Route path="/traincode/startcoding" element={<StartCoding />} />
          <Route path="/traincode/public-submissions" element={<PubSub />} />
          <Route index element={<Navigate to="/traincode/codedes" />} />
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
