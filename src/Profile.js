import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import profilePics from "./statics/images/cake.jpg";
import "./theme/page/Profile.css";
import {
  EmailOutlined,
  RemoveRedEyeOutlined,
  PersonOutline,
  Star,
  StarHalfOutlined,
  SendOutlined,
  CameraAltOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = ({ setIsActive }) => {
  setIsActive = "profile";
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Container className="container6">
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={5}>
            <Paper>
              <div className="profile-card">
                <div className="image">
                  <img src={profilePics} className="profile-pics" />
                </div>
                <Divider />
                <div className="profile-content">
                  <div className="item">
                    <p className="username">Basit ng</p>
                    <PersonOutline />
                  </div>
                  <Divider />
                  <div className="item">
                    <p className="email">basitng2004@gmail.com</p>
                    <EmailOutlined />
                  </div>
                  <Divider />
                  <div className="item">
                    <p className="review">Reviews</p>
                    <RemoveRedEyeOutlined />
                  </div>
                  <div className="item">
                    <p className="star">Star</p>
                    <div className="flex-stars">
                      <Star className="icon" />
                      <Star className="icon" />
                      <Star className="icon" />
                      <Star className="icon" />
                      <StarHalfOutlined className="icon" />
                    </div>
                  </div>
                  <Divider />
                  <center>
                    <Button
                      className="btn"
                      size="large"
                      color="secondary"
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      Update profile
                    </Button>
                  </center>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        fullWidth={maxWidth}
      >
        <DialogTitle>{"Hi dear, Update your"}</DialogTitle>
        <form method="POST">
          <DialogContent>
            <TextField
              variant="filled"
              color="secondary"
              fullWidth
              label="Username*"
              type="text"
            />
            <br />
            <br />
            <TextField
              variant="filled"
              color="secondary"
              fullWidth
              label="Email address*"
              type="email"
            />
            <br />
            <br />
            <TextField
              variant="filled"
              color="secondary"
              fullWidth
              label="Country*"
              type="text"
            />
            <br />
            <br />

            <input type="file" id="upload" className="display-none" />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                id="upload"
                variant="outlined"
                color="secondary"
                startIcon={<CameraAltOutlined />}
              >
                <label for="upload" className="cursor">
                  Choose brand logo
                </label>
              </Button>
            </Box>
            <br />
            <br />
            <TextField
              variant="filled"
              color="secondary"
              fullWidth
              label="Old password*"
              type="password"
            />
            <br />
            <br />
            <TextField
              variant="filled"
              color="secondary"
              fullWidth
              label="New password*"
              type="password"
            />
            <br />
          </DialogContent>
          <center>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              size="large"
              endIcon={<SendOutlined />}
            >
              Update
            </Button>
            <br />
            <br />
          </center>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default Profile;
