import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const Coding = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4">This is Coding Page</Typography>
      </Box>
    </motion.div>
  );
};

export default Coding;
