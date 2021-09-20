import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CategoryCard from "./CategoryCard";

import icon1 from "../statics/icons/svg/001-car.svg";
import icon2 from "../statics/icons/svg/002-fashion.svg";
import icon3 from "../statics/icons/svg/003-creativity.svg";
import icon4 from "../statics/icons/svg/004-fast-food.svg";
import icon5 from "../statics/icons/svg/005-sneakers.svg";
import icon6 from "../statics/icons/svg/006-home.svg";

const TopCategories = () => {
  return (
    <React.Fragment>
      <Container sx={{ marginTop: "3rem" }}>
        <div className="heading">
          <Typography variant="h5" fontWeight="700">
            Top Categories
          </Typography>
        </div>
        <Box sx={{ paddingTop: "1rem" }}>
          <Grid container spacing={1}>
            <Grid xs={6} lg={4}>
              <CategoryCard icon={icon1} tag="Vehincles" />
            </Grid>
            <Grid xs={6} lg={4}>
              <CategoryCard icon={icon2} tag="Fashion" />
            </Grid>
            <Grid xs={6} lg={4}>
              <CategoryCard icon={icon3} tag="Creativity" />
            </Grid>
            <Grid xs={6} lg={4}>
              <CategoryCard icon={icon4} tag="Fast Food" />
            </Grid>
            <Grid xs={6} lg={4}>
              <CategoryCard icon={icon5} tag="Sneakers" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TopCategories;
