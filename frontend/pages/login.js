import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Link } from "@mui/material";
import ActionButton from "./components/button";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState("");

  const router = useRouter();

  const Login = async e => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/login", {
        email,
        password
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    console.log("done");
    //router.push("/dashboard");
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
            Login
          </Typography>
          <TextField
            required
            onChange={e => {
              setEmail(e.target.value);
            }}
            id="email"
            label="Email"
            variant="outlined"
            value={email}
          />
          <TextField
            required
            onChange={e => {
              setPassword(e.target.value);
            }}
            id="password"
            placeholder="****"
            label="Password"
            variant="outlined"
            value={password}
          />
          <ActionButton name="Login" onClick={Login} />
          <Box sx={{ display: "flex", fontSize: 15 }}>
            <Typography>New Here&nbsp; </Typography>
            <Link variant="body1" sx={{ textDecoration: "none" }} href="/register">
              Register
            </Link>
          </Box>
          <Typography>{loggedIn}</Typography>
        </Box>
      </Box>
    </>
  );
}
