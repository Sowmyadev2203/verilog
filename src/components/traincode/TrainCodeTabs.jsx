import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  useTheme,
  Toolbar,
  Typography,
} from "@mui/material";

const navTabs = [
  { label: "codedes", path: "codedes" },
  { label: "samplecode", path: "samplecode" },
  { label: "startcoding", path: "startcoding" },
  { label: "ai-help", path: "ai-help" },
];

export default function TrainCodeTabs() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const currentTabIndex = navTabs.findIndex((tab) =>
    location.pathname.includes(tab.path)
  );

  const handleChange = (event, newValue) => {
    navigate(navTabs[newValue].path, { relative: "path" }); // ✅ use relative path
  };

  return (
    <Box sx={{ bgcolor: "#1e1e1e", height: "100vh", color: "white" }}>
      {/* Top App Bar */}
      <AppBar position="static" sx={{ bgcolor: "#1e1e1e", boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* You can place icons or logo here */}
          </Typography>
        </Toolbar>

        {/* Navigation Tabs */}
        <Tabs
          value={currentTabIndex === -1 ? 0 : currentTabIndex}
          onChange={handleChange}
          variant="standard"
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: "#3b82f6", height: 3 },
          }}
          sx={{
            px: 3,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              color: "#cbd5e1",
              minWidth: 100,
            },
            "& .Mui-selected": {
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        >
          {navTabs.map((tab) => (
            <Tab key={tab.label} label={tab.label} />
          ))}
        </Tabs>
      </AppBar>

      {/* Tab Content Area */}
      <Box sx={{ p: 3 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
