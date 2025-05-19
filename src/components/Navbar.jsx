import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Paper,
  Popper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Grow,
} from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode"; // Sun icon
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Moon icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const hoverStyles = {
  textTransform: "none",
  position: "relative",
  transition: "all 0.3s ease",
  transformOrigin: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "3px",
    left: 0,
    bottom: -4,
    backgroundColor: "limegreen",
    transition: "width 0.3s ease",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: "limegreen",
    transform: "scale(1.3)",
    "&::after": {
      width: "100%",
    },
  },
};

function HoverDropdown({ label, menuItems = [] }) {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Button ref={anchorRef} sx={hoverStyles} color="inherit">
        {label}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="bottom-start"
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              sx={{ mt: 1 }}
            >
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList autoFocusItem={open}>
                  {menuItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      sx={{
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "limegreen",
                          transform: "scale(1.3)",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo + Navigation */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Verilog
          </Typography>

          <HoverDropdown
            label="Courses"
            menuItems={[
              { label: "Beginner", to: "/courses/beginner" },
              { label: "Intermediate", to: "/courses/intermediate" },
              { label: "Advanced", to: "/courses/advanced" },
            ]}
          />

          <HoverDropdown
            label="Interview"
            menuItems={[
              { label: "Prep Guide", to: "/interview/guide" },
              { label: "Mock Interviews", to: "/interview/mock" },
              { label: "Tips & Tricks", to: "/interview/tips" },
            ]}
          />

          <HoverDropdown
            label="Support"
            menuItems={[
              { label: "Help Center", to: "/support/help" },
              { label: "Contact Us", to: "/support/contact" },
            ]}
          />

          <HoverDropdown
            label="About Us"
            menuItems={[
              { label: "Our Team", to: "/about/team" },
              { label: "Mission", to: "/about/mission" },
              { label: "Careers", to: "/about/careers" },
            ]}
          />
        </Stack>

        {/* Right: Profile/Auth/Theme Toggle */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Tooltip title="Profile">
            <IconButton component={Link} to="/profile" color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>

          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            Sign Up
          </Button>
          <Tooltip
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
