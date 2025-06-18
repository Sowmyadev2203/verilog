import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

const Training = ({ goBack }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: theme.palette.background.default,
        // color: theme.palette.text.primary,
        backgroundColor:"grey"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Training Page
      </Typography>
      <Button variant="outlined" onClick={goBack}>
        Back
      </Button>
    </Box>
  );
};

export default Training;
