import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./theme/page/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@mui/icons-material";
const Login = () => {
  const [tag, setTag] = React.useState("");
  const handleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <React.Fragment>
      <Container className="login-container">
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={4}>
            <Paper sx={{ padding: "20px" }}>
              <form>
                <Typography variant="h6" fontWeight="900">
                  Welcome Back Login
                </Typography>
                <Typography fontSize="9">
                  Login to your ReviewExpert account
                </Typography>
                <br />
                <Divider />
                <br />
                <TextField
                  variant="outlined"
                  label="Email address"
                  color="secondary"
                  type="email"
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="Your password"
                  color="secondary"
                  type="email"
                  fullWidth
                />
                <br />
                <br />
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-label" required>
                    Login as
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem defaultValue value={10}>
                      Reviewer
                    </MenuItem>
                    <MenuItem value={20}>Brand</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <br />
                <center>
                  <Button
                    endIcon={<ArrowRightOutlined />}
                    size="large"
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button>
                  <p className="forgot-password">
                    or{" "}
                    <Link className="forgot-a" to="" sx={{ color: "blue" }}>
                      Forgot password
                    </Link>
                  </p>
                  <div className="signup-div">
                    <p>
                      Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
                    <b>Log in with your brand</b>
                  </div>
                </center>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Login;
