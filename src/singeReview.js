import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DateRangeOutlined, Star, StarHalfOutlined } from "@mui/icons-material";
import "./theme/page/SingleReview.css";
const SingleReview = () => {
  const [data, setData] = useState([
    {
      id: Math.random() * 1000,
      user: "code ninja",
      rating: 5,
      review:
        "Professionally, I come from the Data Science consulting space with experience in finance, retail, transport and other industries. I was trained by the best analytics mentors at Deloitte Australia and since starting on Udemy I have passed on my knowledge to thousands of aspiring data scientists.",
    },
    {
      id: Math.random() * 1000,
      user: "Basit ng",
      rating: 5,
      review:
        "Professionally, I come from the Data Science consulting space with experience in finance, retail, transport and other industries. I was trained by the best analytics mentors at Deloitte Australia and since starting on Udemy I have passed on my knowledge to thousands of aspiring data scientists.",
    },
    {
      id: Math.random() * 1000,
      user: "Sam joe",
      rating: 4,
      review:
        "Professionally, I come from the Data Science consulting space with experience in finance, retail, transport and other industries. I was trained by the best analytics mentors at Deloitte Australia and since starting on Udemy I have passed on my knowledge to thousands of aspiring data scientists.",
    },
    {
      id: Math.random() * 1000,
      user: "Paulina jacklin",
      rating: 2,
      review:
        "Professionally, I come from the Data Science consulting space with experience in finance, retail, transport and other industries. I was trained by the best analytics mentors at Deloitte Australia and since starting on Udemy I have passed on my knowledge to thousands of aspiring data scientists.",
    },
  ]);
  return (
    <React.Fragment>
      <div className="banner2">
        <Grid container>
          <Grid xs={12} lg={6}>
            <div className="block1">
              <Typography variant="h4" fontWeight="700" color="white">
                Machine Learning A-Z™: Hands-On Python & R In Data Science
              </Typography>
              <Typography variant="h5" className="content">
                Learn to create Machine Learning Algorithms in Python and R from
                two Data Science experts. Code templates included.
              </Typography>
              <div className="flex-stars">
                4.5
                <Star className="icon" />
                <Star className="icon" />
                <Star className="icon" />
                <Star className="icon" />
                <StarHalfOutlined className="icon" />
                <span className="total-rating">
                  (30, 000 rating).{" "}
                  <span className="reviews">34,000 reviews</span>
                </span>
              </div>
              <p className="brand">
                Created by : <span className="brand-name">Facebook</span>
              </p>
              <div className="published-date">
                <DateRangeOutlined />
                <span>Published on 9/2021</span>
              </div>
            </div>
          </Grid>
          <Grid xs={12} lg={6}>
            <div className="block2">
              <form>
                <Typography color="GrayText" variant="h5" fontWeight="700">
                  Review Product
                </Typography>
                <Typography color="GrayText" variant="p" fontWeight="100">
                  Your review we help us alot.
                </Typography>
                <br />
                <FormControl>
                  <TextField
                    fullWidth
                    type="text"
                    variant="outlined"
                    label="Reviewer name"
                    helperText="Tell us your name"
                  />
                  <br />
                </FormControl>
                <FormControl>
                  <TextField
                    fullWidth
                    type="text"
                    helperText="Tell us about this product"
                    variant="outlined"
                    label="Review Product"
                  />
                  <br />
                </FormControl>
                <FormControl>
                  <TextField
                    fullWidth
                    type="number"
                    variant="outlined"
                    label="Rate us"
                    helperText="Show us the important of product"
                  />
                  <br />
                </FormControl>
                <Button
                  className="btn"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Review
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
      <Container className="container5">
        <Grid
          container
          rowGap={3}
          justifyContent="center"
          spacing={2}
          columnGap={2}
        >
          {data.map((data) => (
            <Grid item key={data.id} xs={12} lg={5}>
              <Paper>
                <div className="review-card">
                  <div className="image">
                    <Avatar className="avatar">C</Avatar>
                    <p>{data.user}</p>
                  </div>
                  <div className="review-card-content">
                    <p className="legend">{data.review}</p>
                    <div className="flex-stars">
                      <span>{data.rating}</span>
                      <Star className="icon" />
                      <Star className="icon" />
                      <Star className="icon" />
                      <StarHalfOutlined className="icon" />
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SingleReview;
