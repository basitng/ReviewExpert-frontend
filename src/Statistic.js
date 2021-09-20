import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Appbar from "./components/dashboard component/AppBar";
import GraphSheet from "./components/dashboard component/Graph";
import Sidear from "./components/dashboard component/SideBar";

const Statistic = () => {
  return (
    <React.Fragment>
      <Appbar />
      <Sidear />
      <Box className="dashboard-main-content">
        <Container>
          <GraphSheet />
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Statistic;
