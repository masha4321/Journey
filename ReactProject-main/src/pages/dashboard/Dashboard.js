import React from "react";
import { Stack } from "@mui/material";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import "../../pages/dashboard/dashboard.css";
import ExerciseList from "../../components/exercises/ExerciseList";

function Dashboard() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <ExerciseList />
      <RightBar />
    </Stack>
  );
}

export default Dashboard;
