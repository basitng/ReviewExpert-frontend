import {
  CreateOutlined,
  LeaderboardOutlined,
  StarHalfOutlined,
  TrackChangesOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import "../../theme/components2/QuickStats.css";

const QuickStats = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} lg={3} md={6}>
            <Paper>
              <div className="db-card">
                <div className="db-icon">
                  <LeaderboardOutlined />
                </div>
                <div className="db-content">
                  <p>Total Review</p>
                  <div className="price">
                    <span>54,000</span>
                    <TrackChangesOutlined className="icon c3" />
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <Paper>
              <div className="db-card">
                <div className="db-icon bg2">
                  <CreateOutlined />
                </div>
                <div className="db-content ">
                  <p>All Products</p>
                  <div className="price">
                    <span>54,000</span>
                    <TrendingUpOutlined className="icon c1" />
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <Paper>
              <div className="db-card">
                <div className="db-icon bg3">
                  <StarHalfOutlined />
                </div>
                <div className="db-content">
                  <p>Total Rating</p>
                  <div className="price">
                    <span>54,000</span>
                    <TrackChangesOutlined className="icon c2" />
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default QuickStats;
