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
const Signup = () => {
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
                  Create an account
                </Typography>
                <Typography fontSize="9">
                  to review and rate your favourite products & yours for free
                </Typography>
                <br />
                <Divider />
                <br />
                <TextField
                  variant="outlined"
                  label="Username"
                  color="secondary"
                  type="text"
                  required
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="Email address"
                  color="secondary"
                  type="email"
                  fullWidth
                  required
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="Create password"
                  color="secondary"
                  type="password"
                  fullWidth
                  required
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="Confirm password"
                  color="secondary"
                  type="password"
                  fullWidth
                  required
                />
                <br />
                <br />
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-label" required>
                    Type of Account
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Reviewer Account</MenuItem>
                    <MenuItem value={20}>Brand Account</MenuItem>
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
                    Signup
                  </Button>

                  <div className="signup-div">
                    <p>
                      Have an account? <Link to="/login">Login</Link>
                    </p>
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

export default Signup;
