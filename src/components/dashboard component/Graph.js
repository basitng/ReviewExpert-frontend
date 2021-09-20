import { Container } from "@mui/material";
import React from "react";
import { Pie } from "react-chartjs-2";

const GraphSheet = () => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Product Review statistics",
        data: [12, 19, 5, 30, 56, 78, 90],
        fill: false,
        backgroundColor: [
          "#ab15bf",
          "#7922f2",
          "#615cf2",
          "#100f26",
          "#56345a",
          "#F26298",
        ],
        fontFamily: "poppin",
        borderColor: "rgba(225, 99, 132, 0.2)",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <React.Fragment>
      <Container sx={{ height: "50vh", marginTop: "2rem" }}>
        <Pie data={data} options={options} />
      </Container>
    </React.Fragment>
  );
};

export default GraphSheet;
