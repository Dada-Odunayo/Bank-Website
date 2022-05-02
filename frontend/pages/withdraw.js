import React from "react";
import { Box, TextField, Typography, Link } from "@mui/material";
import ActionButton from "./components/button";

export default function TransferPage() {
  return (
    <>
      <Box sx={{ bgcolor: "#696969", p: { lg: 20 }, alignContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxSizing: "border-box",
            boxShadow: 3,
            borderRadius: 3,
            ml: { xl: 15, md: 15, sm: 3 },
            p: { xl: 5, md: 5, sm: 0 },
            width: 600,
            bgcolor: "#eee",
            alignItems: "center"
          }}
        >
          <Typography variant="h2" sx={{ fontFamily: "Oswald", color: "#800080" }}>
            Withdraw
          </Typography>
          <TextField required id="acct-no" type="number" label="Account Number" variant="outlined" />
          <TextField required id="amount" type="number" label="Amount" variant="outlined" />
          <TextField required id="pwd" type="password" label="PIN" variant="outlined" />
          <ActionButton name="Withdraw" />
        </Box>
      </Box>
    </>
  );
}
