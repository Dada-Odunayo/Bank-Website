import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ textAlign: "center", p: 2, bgcolor: "#fff", width: "40%" }}>
          <Typography sx={{ pb: 5 }} variant="h3">
            About Us
          </Typography>
          <Typography sx={{ pb: 3 }} variant="body">
            Leap bank website is a proof of concept developed by Dada Odunayo as part of my portfolio projects.
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <CardMedia component="img" sx={{ height: "500px" }} src="/about_us.svg" />
        </Box>
      </Box>
    </>
  );
}
