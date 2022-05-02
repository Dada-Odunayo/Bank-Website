import React, { useState } from "react";
import { Box, TextField, Typography, Link } from "@mui/material";
import ActionButton from "./components/button";
import axios from "axios";

export default function DepositPage() {
  const [fname, setfName] = useState("");
  const [balance, setBalance] = useState("");

  const Deposit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/deposit", {
      fname: fname,
      balance: balance
    });
  };

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
            Deposit
          </Typography>
          <TextField
            required
            id="fname"
            onChange={e => {
              setfName(e.target.value);
            }}
            label="First Name"
            variant="outlined"
          />
          <TextField
            required
            id="balance"
            onChange={e => {
              setBalance(e.target.value);
            }}
            type="number"
            label="Amount"
            variant="outlined"
          />

          <ActionButton name="Deposit" onClick={Deposit} />
        </Box>
      </Box>
    </>
  );
}
