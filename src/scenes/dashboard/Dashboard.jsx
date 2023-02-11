import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Header title="DASHBOARD" subtitle="Welcome to your dashborad" />
      <ProgressCircle />
    </Box>
  );
};

export default Dashboard;
