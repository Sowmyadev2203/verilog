import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Editor from "@monaco-editor/react";

const questions = [
  {
    id: 1,
    title: "Basic AND Gate",
    note: "Write a Verilog module for a 2-input AND gate.",
  },
  {
    id: 2,
    title: "4-bit Adder",
    note: "Create a 4-bit adder using structural modeling.",
  },
  {
    id: 3,
    title: "D Flip Flop",
    note: "Write a positive-edge triggered D flip-flop.",
  },
];

export default function EDAPlaygroundUI() {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [designCode, setDesignCode] = useState("module design;\nendmodule");
  const [tbCode, setTbCode] = useState("module tb;\nendmodule");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        p: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {/* Question and Note Display */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          {questions[0].title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {questions[0].note}
        </Typography>
      </Paper>

      {/* Code Editor Panels */}
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        {/* Design Block */}
        <Grid item xs={5}>
          <Paper
            elevation={3}
            sx={{
              p: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              marginLeft: "90px",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Design Block
            </Typography>
            <Editor
              height="230px"
              width="40vw"
              defaultLanguage="verilog"
              value={designCode}
              onChange={(value) => setDesignCode(value)}
              theme="vs-dark"
            />
            <Button variant="contained" sx={{ mt: 2 }} color="primary">
              Compile
            </Button>
          </Paper>
        </Grid>

        {/* Testbench Block */}
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Testbench
            </Typography>
            <Editor
              height="230px"
              width="40vw"
              defaultLanguage="verilog"
              value={tbCode}
              onChange={(value) => setTbCode(value)}
              theme="vs-dark"
            />
            <Button variant="contained" sx={{ mt: 2 }} color="primary">
              Compile
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Stack direction="row" justifyContent="center" spacing={1} sx={{ my: 1 }}>
        <Button variant="outlined">RUN</Button>
        <Button variant="outlined" onClick={() => navigate("/waveform")}>
          WAVEFORM
        </Button>
        <Button variant="outlined" onClick={() => navigate("/rtl")}>
          RTL
        </Button>
      </Stack>

      {/* Terminal */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          //   flexGrow: 1, // allow grow in flex container
          backgroundColor: "#000",
          color: "#0f0",
          fontFamily: "monospace",
          overflow: "auto",
          minHeight: "150px", // minimum height
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          THIS IS TERMINAL FOR PRINTING AN OUTPUT
          <br />
          ALSO HELPS TO GIVE INPUT LIKE VS CODE TERMINAL
        </Typography>
      </Paper>
    </Box>
  );
}
