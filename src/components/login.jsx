import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Grid, Box, IconButton } from '@mui/material';
import { Facebook, Google, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';

const TransitionContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSignUp',
})(({ isSignUp }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'relative',
  transition: 'transform 0.6s ease-in-out',
  transform: isSignUp ? 'translateX(0%)' : 'translateX(-50%)',
}));

const Panel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'position' && prop !== 'isSignUp',
})(({ position, isSignUp, theme }) => ({
  position: 'absolute',
  width: '50%',
  height: '100%',
  top: 0,
  left: position === 'left' ? 0 : '40%',
  background: position === 'left'
    ? 'linear-gradient(to bottom right,rgb(118, 229, 14), #333333)' 
    : 'linear-gradient(to bottom right, rgb(118, 229, 14), #424242)',  
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  zIndex: 1,
  transition: 'transform 0.6s ease-in-out',
  transform:
    position === 'left'
      ? (isSignUp ? 'translateX(0%)' : 'translateX(100%)')
      : (isSignUp ? 'translateX(-100%)' : 'translateX(0%)'),
}));

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      
    >
      <Paper
        elevation={6}
        sx={{
          width: 800,
          height: 500,
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 5,
          backgroundColor: '#FFFFFF', 
        }}
      >
        <TransitionContainer isSignUp={isSignUp}>
          {/* Sign Up Form */}
          <Box sx={{ width: '50%', p: 5, zIndex: 2, backgroundColor: '#FFFFFF' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#000000' }}>
              Create Account
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <IconButton><Google sx={{ color: '#000000' }} /></IconButton>
              <IconButton><Facebook sx={{ color: '#000000' }} /></IconButton>
              <IconButton><LinkedIn sx={{ color: '#000000' }} /></IconButton>
            </Box>

            <Typography variant="body2" color="textSecondary" mb={2} sx={{ color: '#555555' }}>
              or use your email for registration
            </Typography>

            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#F5F5F5',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#F5F5F5',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{
                  backgroundColor: '#F5F5F5',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                }}
              >
                SIGN UP
              </Button>
            </Box>
          </Box>

          {/* Sign In Form */}
          <Box sx={{ width: '50%', p: 5, zIndex: 2, backgroundColor: '#FFFFFF' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#000000' }}>
              Sign In
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <IconButton><Google sx={{ color: '#000000' }} /></IconButton>
              <IconButton><Facebook sx={{ color: '#000000' }} /></IconButton>
              <IconButton><LinkedIn sx={{ color: '#000000' }} /></IconButton>
            </Box>

            <Typography variant="body2" color="textSecondary" mb={2} sx={{ color: '#555555' }}>
              or use your email for sign in
            </Typography>

            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#F5F5F5',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{
                  backgroundColor: '#F5F5F5',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{ alignSelf: 'flex-end', cursor: 'pointer', color: '#000000' }}
              >
                Forget Your Password?
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Box>
        </TransitionContainer>

        {/* Left Panel */}
        <Panel position="left" isSignUp={isSignUp}>
          <Typography variant="h4" gutterBottom>
            {isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            {isSignUp
              ? 'Enter your personal details to use all of site features'
              : 'Register with your personal details to use all of site features'}
          </Typography>
          <Button variant="outlined" color="inherit" onClick={toggleForm} sx={{ borderColor: 'white', color: 'white' }}>
            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
          </Button>
        </Panel>
      </Paper>
    </Grid>
  );
}
