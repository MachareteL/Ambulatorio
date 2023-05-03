import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Funcionario from "./Funcionario";
import { useState } from "react";
import OrigemAfastamento from "./OrigemAfastamento";
import Participantes from "./Participantes";
import Restricao from "./Restricao";

const steps = [
  "Dados do Funcionário",
  "Origem do Afastamento",
  "Participantes do Afastamento",
  "Restrição/Limitação",
  "Fim",
];

export default function Passos() {
  const [numPasso, setNumPasso] = useState(0);

  const goToNext = () => {
    setNumPasso((p) => p + 1);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "36px" }}>
      <Stepper activeStep={numPasso} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {numPasso == 0 ? (
        <Funcionario goToNext={goToNext} />
      ) : numPasso == 1 ? (
        <OrigemAfastamento goToNext={goToNext} />
      ) : numPasso == 2 ? (
        <Participantes goToNext={goToNext} />
      ) : numPasso == 3 ?(
        <Restricao goToNext={goToNext}/>
      ): <>FIM</>}
    </Box>
  );
}
