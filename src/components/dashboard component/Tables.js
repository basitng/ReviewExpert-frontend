import React from "react";
import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Tables = ({ setIsActive }) => {
  setIsActive = "board";

  function createData(
    Brand_name,
    Ranking,
    Total_ranking,
    Total_Reviews,
    Data_joined
  ) {
    return { Brand_name, Ranking, Total_ranking, Total_Reviews, Data_joined };
  }
  const rows = [
    createData("FaceBook", 5, "30, 1000", "56,000", "16/09/2020"),
    createData("Google", 5, "27, 2000", "40, 000", "10/09/2020"),
    createData("Netlix", 4, "20, 3000", "26, 000", "17/09/2020"),
    createData("Netlify", 4, " 30, 6000", "16, 000", "14/09/2020"),
  ];
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5}>
            <TableContainer component={Paper} sx={{ marginTop: "2rem" }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Brand name</TableCell>
                    <TableCell align="center">Ranking</TableCell>
                    <TableCell align="center">Total Ranking</TableCell>
                    <TableCell align="center">Total Reviews</TableCell>
                    <TableCell align="center">Date joined</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <>
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.Brand_name}
                        </TableCell>
                        <TableCell align="center">{row.Ranking}</TableCell>
                        <TableCell align="center">
                          {row.Total_ranking}
                        </TableCell>
                        <TableCell align="center">
                          {row.Total_Reviews}
                        </TableCell>
                        <TableCell align="center">{row.Data_joined}</TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} lg={5}>
            <TableContainer component={Paper} sx={{ marginTop: "2rem" }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Brand name</TableCell>
                    <TableCell align="center">Ranking</TableCell>
                    <TableCell align="center">Total Ranking</TableCell>
                    <TableCell align="center">Total Reviews</TableCell>
                    <TableCell align="center">Date joined</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <>
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.Brand_name}
                        </TableCell>
                        <TableCell align="center">{row.Ranking}</TableCell>
                        <TableCell align="center">
                          {row.Total_ranking}
                        </TableCell>
                        <TableCell align="center">
                          {row.Total_Reviews}
                        </TableCell>
                        <TableCell align="center">{row.Data_joined}</TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Tables;
