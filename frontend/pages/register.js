import React, { useState } from "react";
import ActionButton from "./components/button";
import { Box, Typography, FormGroup, TextField, Select, MenuItem, Link } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const Register = async e => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/register", {
        fname: fname,
        lname: lname,
        password: password,
        email: email,
        dob: dob
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    router.push("/login");
  };

  return (
    <>
      <Box sx={{ alignContent: "center", p: { xl: 20, lg: 10, md: 5, sm: 0, xs: 0 }, bgcolor: "#696969" }}>
        <Box
          sx={{
            pr: { lg: 0, xs: 5 },
            alignSelf: "center",
            bgcolor: "#F0F8FF",
            boxSizing: "border-box",
            boxShadow: 3,
            //width: {  xs: 390 },
            borderRadius: { lg: 3 }
          }}
        >
          <Typography variant="h2" sx={{ textAlign: "center", pt: 2, fontFamily: "Oswald, sans-serif", color: "#800080" }}>
            Register
          </Typography>

          <Box
            sx={{
              display: { lg: "grid", md: "grid", xs: "flex" },
              gridTemplateColumns: "repeat(3,1fr)",
              flexDirection: "column",
              gap: 5,
              width: "auto",
              m: 2,
              p: 5
            }}
          >
            <TextField
              required
              autoComplete="true"
              id="fname"
              value={fname}
              onChange={e => {
                setfName(e.target.value);
              }}
              label="First Name"
              variant="outlined"
            />
            <TextField
              required
              id="lname"
              value={lname}
              onChange={e => {
                setlName(e.target.value);
              }}
              label="Last Name"
              variant="outlined"
            />
            <TextField
              required
              id="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              label="Email"
              variant="outlined"
            />
            <TextField
              required
              id="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              label="PIN"
              variant="outlined"
              placeholder="****"
            />

            <TextField
              id="dob"
              value={dob}
              onChange={e => {
                setDob(e.target.value);
              }}
              label="Date of Birth"
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Box>

          <Box sx={{ ml: 40, margin: "auto" }}>
            <Box sx={{ textAlign: "center" }}>
              <ActionButton name="Register" onClick={Register} />
            </Box>
            <Box sx={{ display: "flex", m: 3, pb: 5, justifyContent: "center" }}>
              <Typography variant="h6">Existing User&nbsp; </Typography>
              <Link variant="h6" sx={{ textDecoration: "none" }} href="/login">
                Log In
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
