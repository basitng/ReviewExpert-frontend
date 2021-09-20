import {
  CloseOutlined,
  CreateOutlined,
  DashboardOutlined,
  DeleteOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  PersonOutlined,
  PieChartRounded,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../theme/components2/Sidebar.css";
import BottomNav from "./BootomNavigation";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { DialogActions, DialogContentText } from "@mui/material";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Sidear = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [maxWidth2, setMaxWidth2] = React.useState("sm");

  const notifications = [
    {
      message: "Post created successfully",
      time: "13mins ago",
    },
    {
      message: "Emmanuel review your post",
      time: "13mins ago",
    },
    {
      message: "Welcome back",
      time: "12mins ago",
    },
  ];

  const deleteAll = () => {
    console.log("Deleted");
  };

  const handleClickOpen2 = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
  const [isActive, setIsActive] = React.useState();

  React.useEffect(() => {
    if (location.pathname == "/dashboard/home") {
      setIsActive("dashboard");
    }
    if (location.pathname == "/dashboard/create") {
      setIsActive("create review");
    }
    if (location.pathname == "/dashboard/statistic") {
      setIsActive("statistic");
    }
    if (location.pathname == "/dashboard/profile") {
      setIsActive("profile");
    }
    if (location.pathname == "/dashboard") {
      setIsActive("dashboard");
    }
  }, [location]);
  const links = [
    {
      id: Math.random() * 1000,
      icon: <DashboardOutlined />,
      link: "/dashboard/home",
      text: "Dashboard",
    },
    {
      id: Math.random() * 1000,
      icon: <CreateOutlined />,
      link: "/dashboard/create",
      text: "Create Review",
    },
    {
      id: Math.random() * 1000,
      icon: <PieChartRounded />,
      link: "/dashboard/statistic",
      text: "Statistic",
    },
    {
      id: Math.random() * 1000,
      icon: <NotificationsOutlined />,
      text: "Notification",
    },
    // { id: Math.random() * 1000, icon: <SettingsOutlined />, text: "Settings" },
    {
      id: Math.random() * 1000,
      icon: <PersonOutlined />,
      link: "/dashboard/profile",
      text: "Profile",
    },
    {
      id: Math.random() * 1000,
      icon: <LogoutOutlined />,
      text: "Logout",
    },
  ];
  return (
    <React.Fragment>
      <div className="drawer">
        <Toolbar className="root">
          <List component="nav" className="list">
            {links.map((nav) => (
              <Link to={!nav.link ? "#" : nav.link}>
                <ListItem
                  className={`${
                    isActive == nav.text.toLocaleLowerCase() ? "active" : "item"
                  } item`}
                  button
                  key={nav.id}
                  onClick={nav.text == "Notification" ? handleClickOpen2 : ""}
                >
                  <ListItemIcon className="list-icon">{nav.icon}</ListItemIcon>
                  <ListItemText className="list-text" primary={nav.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Toolbar>
      </div>
      <BottomNav />

      {/* NOTIFICATION MODAL */}
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose2}
          aria-describedby="alert-dialog-slide-description"
          maxWidth={maxWidth2}
        >
          <DialogTitle>{"All Notifications"}</DialogTitle>
          <DialogContent>
            {notifications.map((data) => (
              <Paper sx={{ padding: "10px", marginBottom: "10px" }}>
                <DialogContentText id="alert-dialog-slide-description">
                  {data.message}
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <small>{data.time}</small>
                    <IconButton onClick={deleteAll}>
                      <DeleteOutlined color="error" />
                    </IconButton>
                  </Box>
                </DialogContentText>
              </Paper>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton onClick={handleClose2}>
              <CloseOutlined />
            </IconButton>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default Sidear;
