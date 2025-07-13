import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  Typography,
  Button,
  useTheme,
  Stack,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    title: "Python with Beginner DSA",
    image:
      "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
    rating: "4.6 (103.4k+)",
    courseCount: "6",
    learners: "451k+",
    path: "/courses/python",
  },
  {
    title: "Learn Data Structures and Algo",
    image:
      "https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg",
    rating: "4.6 (72.9k+)",
    courseCount: "23",
    learners: "125k+",
    path: "/courses/dsa",
  },
  {
    title: "React JS for Front-end",
    image:
      "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    rating: "4.7 (94k+)",
    courseCount: "4",
    learners: "178k+",
    path: "/courses/react",
  },
  {
    title: "Java with Beginner DSA",
    image:
      "https://img-c.udemycdn.com/course/240x135/2317164_810a_4.jpg",
    rating: "4.6 (78.4k+)",
    courseCount: "6",
    learners: "320k+",
    path: "/courses/java",
  },
];

export default function ScrollableCourseCards() {
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

  return (
    <Box sx={{ py: 6, backgroundColor: theme.palette.background.default }}>
      <Typography variant="h5" fontWeight="bold" align="center" mb={4}>
        Featured Courses
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
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    Explore this course and boost your skills step by step.
                  </Typography>

                  <Stack direction="row" spacing={2} mt={1.5}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <LibraryBooksIcon fontSize="small" /> {course.courseCount} courses
                    </Typography>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <PeopleIcon fontSize="small" /> {course.learners} learners
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
    </Box>
  );
}
