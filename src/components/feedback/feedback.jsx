import React,{ useState } from 'react';
import { Box, Grid, Typography, TextField, MenuItem, Button } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { useTheme } from "@mui/material";



const grades = ['A', 'B', 'C', 'D', 'F'];


const FeedbackForm = () => {
      const theme = useTheme();
    const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <Box
      sx={{
        minHeight: '110vh',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/blackboard.png")',
        backgroundColor: '#1c1c1c',
        backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 5,
      }}
    >
      <Box sx={{ maxWidth: 800, width: '100%',backgroundColor:"#242121ff" , p:5 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Student Feedback
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please rate your experience with the faculty
        </Typography>

        {/* Name */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="standard"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="standard"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </Grid>
        </Grid>

        {/* Student ID */}
        <TextField
          fullWidth
          label="Student ID"
          variant="standard"
          sx={{ mt: 3 }}
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />

        {/* Grade Dropdown */}
        <TextField
          select
          fullWidth
          label="Grade"
          variant="standard"
          sx={{ mt: 3 }}
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        >
          {grades.map((grade) => (
            <MenuItem key={grade} value={grade}>
              {grade}
            </MenuItem>
          ))}
        </TextField>

        {/* Star Rating */}
        <Typography sx={{ mt: 4 }}>Rate your overall experience at school</Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Box
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              sx={{ cursor: 'pointer' }}
            >
              {star <= (hoverRating || rating) ? (
                <Star sx={{ color: 'white', fontSize: 40 }} />
              ) : (
                <StarBorder sx={{ color: 'white', fontSize: 40 }} />
              )}
            </Box>
          ))}
        </Box>

        {/* Suggestions */}
        <Typography sx={{ mt: 4 }}>Do you have any suggestions?</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="standard"
          sx={{ mt: 1 }}
          InputProps={{ style: { color: 'white' } }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          sx={{ mt: 4, bgcolor: 'white', color: 'black', px: 5 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FeedbackForm;
