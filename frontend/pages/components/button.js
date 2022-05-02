import React from "react";
import { Button } from "@mui/material";

export default function ActionButton(props) {
  return (
    <>
      <Button variant="contained" onClick={props.onClick} sx={{ bgcolor: "#800080", fontSize: 20 }}>
        {props.name}
      </Button>
    </>
  );
}
