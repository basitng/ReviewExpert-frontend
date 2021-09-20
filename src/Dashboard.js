import { Box } from "@mui/system";
import React from "react";
import Appbar from "./components/dashboard component/AppBar";
import GraphSheet from "./components/dashboard component/Graph";
import QuickStats from "./components/dashboard component/QuickStats";
import Sidear from "./components/dashboard component/SideBar";
import Tables from "./components/dashboard component/Tables";
import "./theme/components2/db.css";

const Dashbaord = () => {
  return (
    <React.Fragment>
      <Appbar />
      <Sidear />
      <Box className="dashboard-main-content">
        <QuickStats />
        <GraphSheet />
        <Tables />
      </Box>
    </React.Fragment>
  );
};

export default Dashbaord;
