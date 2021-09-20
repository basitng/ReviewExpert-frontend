import { Typography } from "@mui/material";
import React from "react";
import "../theme/components/categoryCard.css";

const CategoryCard = ({ icon, tag }) => {
  return (
    <React.Fragment>
      <div className="category-container">
        <div className="card">
          <div className="icon">
            <img src={icon} />
          </div>
          <Typography className="andika-font" fontWeight="700">
            {tag}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryCard;
