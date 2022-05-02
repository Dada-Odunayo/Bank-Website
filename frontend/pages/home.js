import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "./components/navbar";
import TopSection from "./components/topsection";

export default function HomePage() {
  return (
    <>
      <Box>
        <NavBar />
        <TopSection />
      </Box>
    </>
  );
}
