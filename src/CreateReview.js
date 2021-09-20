import { CameraAltOutlined, SendOutlined } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Appbar from "./components/dashboard component/AppBar";
import Sidear from "./components/dashboard component/SideBar";

const CreateReview = () => {
  const [tag, setTag] = React.useState("");
  const handleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <React.Fragment>
      <Appbar />
      <Sidear />
      <Box className="dashboard-main-content">
        <Grid container justifyContent="center">
          <Grid item xs={10} lg={5}>
            <Paper className="paper">
              <form method="POST">
                <Typography
                  variant="h5"
                  fontWeight="900"
                  sx={{ color: "#333", padding: "10px" }}
                >
                  Publish Product
                </Typography>
                <TextField
                  variant="filled"
                  color="primary"
                  label="Brand"
                  fullWidth
                  value=""
                  sx={{ display: "none" }}
                />
                <TextField
                  variant="filled"
                  color="primary"
                  label="Product name"
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  variant="filled"
                  color="primary"
                  label="Product Description"
                  fullWidth
                />
                <br />
                <br />
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <br />
                <input type="file" id="upload" className="display-none" />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    id="upload"
                    variant="outlined"
                    color="primary"
                    startIcon={<CameraAltOutlined />}
                  >
                    <label for="upload" className="cursor">
                      Choose image
                    </label>
                  </Button>
                  <Button
                    id="upload"
                    variant="contained"
                    color="primary"
                    endIcon={<SendOutlined />}
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CreateReview;
