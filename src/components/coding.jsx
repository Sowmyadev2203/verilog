import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activePage, setActivePage] = useState(null);
  const navigate = useNavigate();

  const pageVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };


  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!activePage && (
        <Box sx={{ textAlign: "center", zIndex: 1 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to <span style={{ color: "limegreen" }}>Silicon Sandbox</span>
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="contained" onClick={() => navigate("/intermediate")}>
                Coding
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="contained" onClick={() => navigate("/traincode")}>
                Training
              </Button>
            </motion.div>
          </Box>
        </Box>
      )}

      <AnimatePresence>
        {activePage === "coding" && (
          <motion.div
            key="coding"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#fff",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Loading Coding Page...</Typography>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Home;
