import { TextField } from "@mui/material";
import React from "react";

var Latex = require("react-latex");

export default function Tex() {
  let latexString = "What is $(O( log_n ))(3\\times4)\\div(5-3)$";

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
      <Latex displayMode="true">{latexString}</Latex>
    </div>
  );
}
