import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ActionButton from "./components/button";

export default function Dashboard() {
  const [balance, setBalance] = useState("");
  const styles = {
    boxStyle: {
      boxSizing: "border-box",
      boxShadow: 3,
      borderRadius: 2,
      maxWidth: 345,
      height: 200,
      textAlign: "center",
      pt: { lg: 7, md: 4, sm: 3, xs: 8 },

      bgcolor: "#F0F3F4"
    },
    boxFont: {
      fontSize: { sm: "2rem", xs: "2rem" },
      m: { sm: 1 },
      color: "#76448A"
    }
  };
  return (
    <Box sx={{ bgcolor: "#D2B4DE", p: { md: 15 }, m: { md: 15 }, borderRadius: 5 }}>
      <Box>
        <Typography sx={{ textAlign: "center", fontSize: { md: "5rem", xs: "2rem" }, color: "#1A5276" }}>Dashboard</Typography>>
        <Typography sx={{ textAlign: "center", fontSize: { md: "5rem", xs: "2rem" }, color: "#1A5276" }}>
          Account Balance:{balance}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" }, gap: 5, m: 2, justifyContent: "center" }}>
          <Box sx={styles.boxStyle}>
            <Typography sx={styles.boxFont}>Deposit Funds</Typography>
          </Box>
          <Box sx={styles.boxStyle}>
            <Typography sx={styles.boxFont}>Make Withdrawal</Typography>
          </Box>
          <Box sx={styles.boxStyle}>
            <Typography sx={styles.boxFont}>Make Transfer</Typography>
          </Box>
        </Box>
        <Box sx={{ pb: 3, pt: { sm: 5, xs: 1 }, textAlign: "center" }}>
          <ActionButton name="Logout" />
        </Box>
      </Box>
    </Box>
  );
}
