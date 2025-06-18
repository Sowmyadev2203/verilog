import React, { useState } from "react";
import { Box, Paper, Typography, IconButton, Stack, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { useNavigate } from "react-router-dom";
import { JsonView } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export default function Rtl() {
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  const jsonData = {
    module: "AND_Gate",
    inputs: ["A", "B"],
    output: "Y",
    description: "2-input AND gate in structural Verilog",
  };

  return (
    <Box sx={{ p: 3, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        RTL Viewer
      </Typography>

      <Grid container spacing={2}>
        {/* RTL Image */}
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              minHeight: "70vh",
              width:"60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              overflow: "auto",
            }}
          >
            <Box
              component="img"
              src="/rtl-diagram.png"
              alt="RTL Schematic"
              sx={{
                transform: `scale(${zoom})`,
                transformOrigin: "top left",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </Paper>
        </Grid>

        {/* JSON Viewer */}
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2, minHeight: "70vh", overflow: "auto" }}>
            <Typography variant="h6" gutterBottom>
              RTL Metadata
            </Typography>
            <JsonView data={jsonData} />
          </Paper>
        </Grid>
      </Grid>

      {/* Controls */}
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
        <IconButton color="primary" onClick={handleZoomIn}>
          <ZoomInIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton color="primary" onClick={handleZoomOut}>
          <ZoomOutIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton color="secondary" onClick={() => navigate("/intermediate")}>
          <ArrowBackIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Stack>
    </Box>
  );
}
