import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Stack, useTheme } from "@mui/material";
import AnimatedTable from "./table";

import Slider from "react-slick";
import { Box, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import learningImage from "../assessts/learning.webp"

const courses = [
  {
    title: "Python with Beginner DSA",
    image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
    rating: "4.6 (103.4k+)",
    courseCount: "6",
    learners: "451k+",
    path: "/courses/python",
  },
  {
    title: "Learn Data Structures and Algo",
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg",
    rating: "4.6 (72.9k+)",
    courseCount: "23",
    learners: "125k+",
    path: "/courses/dsa",
  },
  {
    title: "React JS for Front-end",
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    rating: "4.7 (94k+)",
    courseCount: "4",
    learners: "178k+",
    path: "/courses/react",
  },
  {
    title: "Java with Beginner DSA",
    image: "https://img-c.udemycdn.com/course/240x135/2317164_810a_4.jpg",
    rating: "4.6 (78.4k+)",
    courseCount: "6",
    learners: "320k+",
    path: "/courses/java",
  },
];



const cards = [
    {
      title: "Write Your Own Code",
      description:
        "Practice Verilog and logic design by writing, editing, and testing your own code in real time. Build confidence through hands-on implementation.",
      image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg",
    },
    {
      title: "Interactive Training",
      description:
        "Structured training sessions with examples, quizzes, and expert guidance. Perfect for mastering concepts step by step.",
      image: "https://img.freepik.com/free-photo/person-taking-notes-computer_23-2149361229.jpg",
    },
  ];

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // const theme = useTheme();
  const words = ["Climb", "Explore", "Master", "Advance"];
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setTyped(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTyped(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 75);
    } else if (!deleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    // first grid
    <Grid
      container
      spacing={15}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "90vh",
        px: { xs: 2, md: 6 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* Text Content */}
      <Grid item xs={12} md={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to <span style={{ color: "limegreen" }}>S</span>ilicon
          <span style={{ color: "limegreen" }}>S</span>andbox
        </Typography>

        <Typography variant="h4" fontWeight="medium" gutterBottom>
          <span
            style={{
              borderRight: "20px solid",
              paddingRight: 4,
              color: "limegreen",
            }}
          >
            {typed}
          </span>{" "}
          through levels of logic design
        </Typography>

        <Typography variant="body1" paragraph>
          We provide top-quality courses and interview support to help you
          achieve your career goals.
          <br />
          Explore our resources and start learning today with expert mentorship
          and real-world projects.
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" color="primary" size="large">
            Browse Courses
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Start Practicing
          </Button>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        {/* <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Learning"
          style={{
            width: "100%",
            maxWidth: 500,
            height: "auto",
            borderRadius: 12,
            boxShadow: theme.shadows[3],
          }}
        /> */}
        <AnimatedTable />
      </Grid>

       {/* ----------------second grid---------------------------- */}
      <Grid>
        <Box sx={{ py: 6, backgroundColor: theme.palette.background.default }}>
          <Typography variant="h3" fontWeight="bold" align="center" mb={4}>
            Featured Courses
          </Typography>

          <Typography variant="h6" align="center" mb={3}>
            Practical Courses to Launch Your Career <br />
            Master Verilog, System Design, and Interview Prep — all in one
            place.
          </Typography>

          <Box sx={{ px: 4 }}>
            <Slider {...settings}>
              {courses.map((course, index) => (
                <Box key={index} px={2}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 6,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={course.image}
                      alt={course.title}
                    />

                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <StarIcon fontSize="small" color="warning" />
                        <Typography variant="body2" fontWeight="bold">
                          {course.rating}
                        </Typography>
                      </Stack>

                      <Typography variant="h6" fontWeight="bold" mt={1}>
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={0.5}
                      >
                        Explore this course and boost your skills step by step.
                      </Typography>

                      <Stack direction="row" spacing={2} mt={1.5}>
                        <Typography
                          variant="body2"
                          display="flex"
                          alignItems="center"
                          gap={0.5}
                        >
                          <LibraryBooksIcon fontSize="small" />{" "}
                          {course.courseCount} courses
                        </Typography>
                        <Typography
                          variant="body2"
                          display="flex"
                          alignItems="center"
                          gap={0.5}
                        >
                          <PeopleIcon fontSize="small" /> {course.learners}{" "}
                          learners
                        </Typography>
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => navigate(course.path)}
                        sx={{
                          textTransform: "none",
                          backgroundColor: "#2563eb",
                          "&:hover": { backgroundColor: "#1e40af" },
                        }}
                      >
                        Enrol now
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
          <Typography align="center" sx={{ marginTop: "30px" }}>
            Get a quick overview of each course — watch a short preview, read a
            brief description, check ratings, and see how many learners have
            joined. <br />
            Ready to dive in? Click “Enrol Now” or explore all our courses.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              onClick={() => navigate("/courses")}
              sx={{
                backgroundColor: "limegreen",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#32cd32", 
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Grid>

              {/* --------------------------third grid------------------- */}
      <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        py: 6,
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={learningImage}
            alt="Learning"
            sx={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
              borderRadius: 3,
              boxShadow: 3,
              display: "block",
              ml: "auto",
              mr: { xs: "auto", md: 0 },
            }}
          />
        </Grid>

        {/* Right Side - Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", md: "right" },
              maxWidth: 480,
              ml: { md: 10 },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Start Your Learning Journey
            </Typography>
            <Typography variant="body1" paragraph>
              Gain hands-on experience with industry-relevant skills in Verilog,
              System Design, and more. Take the next step toward your career goals.
            </Typography>
            <Button
              onClick={() => navigate("/courses")}
              sx={{
                mt: 2,
                backgroundColor: "limegreen",
                color: "white",
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#32cd32",
                },
              }}
            >
              Explore Courses
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>

      {/* ------------------fourth grid---------------- */}

     
 


    </Grid>
  );
}
