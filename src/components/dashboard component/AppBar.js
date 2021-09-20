import React from "react";
import {
  CreateOutlined,
  NotificationsOutlined,
  SearchOutlined,
  SettingsOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import avatar from "../../statics/me.jpg";
import "../../theme/components2/Appbar.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { DialogActions, DialogContentText, Box, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Appbar = () => {
  const [open, setOpen] = React.useState(false);
  const [maxWidth2, setMaxWidth2] = React.useState("sm");
  const deleteAll = () => {
    console.log("Deleted");
  };

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

  const handleClickOpen2 = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <AppBar className="AppBar">
        <Toolbar>
          <Typography variant="h5">ReviewExpert</Typography>
          <Typography sx={{ flexGrow: 1 }} />
          <form method="POST">
            <TextField
              variant="outlined"
              fullWidth
              label="Search for reviews"
            />
            <IconButton className="icon">
              <SearchOutlined />
            </IconButton>
          </form>
          <Typography sx={{ flexGrow: 1 }} />

          <Tooltip title="Create Review">
            <NavLink to="/dashboard/create">
              <IconButton>
                <CreateOutlined />
              </IconButton>
            </NavLink>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton onClick={handleClickOpen2}>
              <Badge badgeContent={6} color="primary" variant="standard">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Settings">
            <IconButton>
              <Badge variant="dot" color="primary">
                <SettingsOutlined />
              </Badge>
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Basit ng">
            <NavLink to="/dashboard/profile">
              <IconButton>
                <Avatar src={avatar} />
              </IconButton>
            </NavLink>
          </Tooltip>
        </Toolbar>
      </AppBar>
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

export default Appbar;
