import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Dados do Funcionário",
  "Origem do Afastamento",
  "Participantes do Afastamento",
  "Restrição/Limitação",
  'Fim'
];


export default function Passos({passo}: any) {
  return (
    <Box sx={{ width: "100%", marginTop: "36px" }}>
      <Stepper activeStep={passo} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
