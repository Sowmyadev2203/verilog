import React, { useState } from "react";
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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navTabs = [
  { label: "codedes", path: "codedes" },
  { label: "samplecode", path: "samplecode" },
  { label: "startcoding", path: "startcoding" },
  { label: "ai-help", path: "ai-help" },
];

const drawerItems = [
  "All Products",
  "High Price of Products",
  "Average Salary",
  "Locate People",
  "Distinct Companies",
  "Fiction Collection Size",
  "List of Movies with Ratings",
  "Handling NULL Values",
  "Salary of Employees",
  "Department of Each Employee",
];

export default function TrainCodeTabs() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentTabIndex = navTabs.findIndex((tab) =>
    location.pathname.includes(tab.path)
  );

  const handleChange = (event, newValue) => {
    navigate(navTabs[newValue].path, { relative: "path" });
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        bgcolor: "#1e1e1e",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* App Bar */}
      <AppBar position="static" sx={{ bgcolor: "#1e1e1e", boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SQL Practice Queries
          </Typography>

          {/* Burger Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              position: "absolute",
              top: 65,
              right: 20,
              zIndex: 1200,
            }}
          >
            <MenuIcon />
          </IconButton>
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

      {/* Main Content */}
      <Box sx={{ p: 3, flexGrow: 1 }}>
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

      {/* Right Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 300,
            mt:8,
            backgroundColor: "#222",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2, position: "relative" }}>
          {/* Close Icon */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" gutterBottom sx={{ pr: 4, mt: 4 }}>
            Practice Basic Commands
          </Typography>
          <Divider sx={{ bgcolor: "#374151", my: 1 }} />
          <List>
            {drawerItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
