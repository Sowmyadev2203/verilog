import React, { useState } from "react";
import { Box, Paper, Typography, IconButton, Stack } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function WaveformPage() {
  const [zoom, setZoom] = useState(1);
  const navigate = useNavigate();

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <Box sx={{ p: 3, minHeight: "100vh"}}>
      <Typography variant="h4" gutterBottom>
        Waveform Viewer
      </Typography>

      {/* Waveform Display */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          overflow: "auto",
        }}
      >
        <Box
          component="img"
          src="/waveform.png" // Replace with your actual waveform image path
          alt="Waveform"
          sx={{
            transform: `scale(${zoom})`,
            transformOrigin: "top left",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </Paper>

      {/* Zoom & Back Controls */}
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
        <IconButton color="primary" onClick={handleZoomIn}>
          <ZoomInIcon fontSize="large" />
        </IconButton>
        <IconButton color="primary" onClick={handleZoomOut}>
          <ZoomOutIcon fontSize="large" />
        </IconButton>
        <IconButton color="secondary" onClick={() => navigate("/courses/intermediate")}>
          Back<ArrowBackIcon fontSize="large"  />
        </IconButton>
      </Stack>
    </Box>
  );
}
