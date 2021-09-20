import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  CloseOutlined,
  CreateOutlined,
  DashboardOutlined,
  DeleteOutlined,
  PersonOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  //   console.log(value);
  //   React.useEffect(() => {
  //     location.pathname = "/dashboard/create";
  //   }, [value]);
  const [isActive, setIsActive] = React.useState();

  React.useEffect(() => {
    setIsActive(location.pathname);
  }, [location]);

  return (
    <React.Fragment>
      <Box className="bottom-nav">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          key={value}
        >
          <BottomNavigationAction
            label="Dashboard"
            icon={<DashboardOutlined />}
            LinkComponent={Link}
            to="/dashboard/home"
            color="none"
            className={`${
              isActive == "/dashboard/home" ? "active-bottom-nav" : ""
            } ''`}
          />

          <BottomNavigationAction
            LinkComponent={Link}
            to="/dashboard/create"
            label="Create"
            icon={<CreateOutlined />}
            className={`${
              isActive == "/dashboard/create" ? "active-bottom-nav" : ""
            } ''`}
          />

          <BottomNavigationAction
            label="Statistic"
            icon={<TrendingUpOutlined />}
            LinkComponent={Link}
            to="/dashboard/statistic"
            className={`${
              isActive == "/dashboard/statistic" ? "active-bottom-nav" : ""
            } ''`}
          />

          <BottomNavigationAction
            label="Profile"
            LinkComponent={Link}
            to="/dashboard/profile"
            icon={<PersonOutlined />}
            className={`${
              isActive == "/dashboard/profile" ? "active-bottom-nav" : ""
            } ''`}
          />
        </BottomNavigation>
      </Box>
    </React.Fragment>
  );
}
