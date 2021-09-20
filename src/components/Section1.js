import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductCard from "./Card";

import img1 from "../statics/images/cake.jpg";
import img2 from "../statics/images/camera.jpg";
import img3 from "../statics/images/alexander-andrews-BX4Q0gojWAs-unsplash.jpg";
import img4 from "../statics/images/Glass.jpg";
import img5 from "../statics/images/revolt-164_6wVEHfI-unsplash.jpg";

const Section1 = () => {
  return (
    <React.Fragment>
      <Box
        className="app-container"
        sx={{ border: "1px solid #555", padding: "30px", marginTop: "3rem" }}
      >
        <Typography variant="h5" fontWeight="700" classsName="andika-font">
          Expand your career opportunities with Python
        </Typography>
        <Typography variant="subtitle1">
          Whether you work in machine learning or finance, or are pursuing a
          career in web development or data science, Python is one of the most
          important skills you can learn. Python's simple syntax is especially
          suited for desktop, web, and business applications. Python's design
          philosophy emphasizes readability and usability. Python was
        </Typography>
        <Grid container rowGap={5} center sx={{ marginTop: "1.5rem" }}>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img1}
              title="Delicious cake"
              company="Facebook"
              rateTotal="1,000"
              rating="1.0"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img2}
              title="Fornite camera"
              company="NetFlix"
              rateTotal="2,000"
              rating="1.5"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img3}
              title="Gadgets"
              company="Amazon"
              rateTotal="3,000"
              rating="2.0"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img4}
              title="Watch"
              company="Nike"
              rateTotal="36,000"
              rating="4.5"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img1}
              title="Delicious cake"
              company="Adidas"
              rateTotal="50,000"
              rating="7.5"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img2}
              title="Fornite camera"
              company="Puma"
              rateTotal="36,000"
              rating="4.5"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img5}
              title="Gadgets"
              company="Night wof"
              rateTotal="36,000"
              rating="4.5"
            />
          </Grid>
          <Grid xs={12} lg={3}>
            <ProductCard
              image={img4}
              title="Watch"
              company="Punkin"
              rateTotal="36,000"
              rating="4.5"
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Section1;
