import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import ServicesSection from "./servicesSection";

export default function TopSection() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(/background_1.png)`,
      backgroundRepeat: "no-repeat",
      width: { md: "50%", sm: "100%", xs: "100%" },
      height: { md: "450px", xs: "400px" }
    },
    textContainer: {
      p: 3,
      bgcolor: "#FFFFE0",
      width: { lg: "50%" },
      textAlign: "center"
    }
  };
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", flexDirection: { md: "row", sm: "column", xs: "column" } }}>
          <Paper sx={styles.paperContainer} />
          <Box sx={styles.textContainer}>
            <Typography variant="h2" sx={{ color: "#00008B", fontFamily: "cursive", pb: 3, fontSize: "4rem" }}>
              Leap Bank
            </Typography>
            <Typography variant="h4" sx={{ fontStyle: "italic", fontFamily: "lucida handwriting", color: "#6A5ACD" }}>
              ...the bank of the future
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "left", fontSize: "1.8rem", pt: 3, color: "#4B0082", fontFamily: "Helvetica" }}
            >
              Avoid the hassle of conventional banking, get better with Leap. Lower your overhead fees. Insured by the National
              Deposit Insurance Corporation (NDIC) making us a safe place to keep money.
            </Typography>
          </Box>
        </Box>
        <Box>
          <ServicesSection />
        </Box>
      </Box>
    </>
  );
}
