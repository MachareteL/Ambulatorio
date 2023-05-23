import React, { ChangeEvent, SyntheticEvent } from "react";
import BtnNext from "./BtnNext";
import { Employee, PoppyTitulo } from "@/pages";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { TextField } from "@mui/material";

type origemType = {
  goToNext: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: Employee;
};

export default function OrigemAfastamento({
  goToNext,
  handleChange,
  values,
}: origemType) {
  const [showOutros, setShowOutros] = useState(false);
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <h1 className={`${PoppyTitulo.className} text-3xl place-self-center`}>
          Origem do Afastamento
        </h1>
        <FormControl>
          <RadioGroup
            name="origemAfastamento"
            onChange={handleChange}
            value={values.origemAfastamento}
          >
            <FormControlLabel
              value="Reintegração"
              control={<Radio />}
              label="Reintegração"
            />
            <FormControlLabel
              value="Retorno INSS"
              control={<Radio />}
              label="Retorno de afastamento INSS"
            />
            <FormControlLabel
              value="outro"
              control={<Radio />}
              label="Outro"
              onClick={() => setShowOutros(true)}
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Outro Motivo"
          placeholder="Digite aqui o outro motivo"
          name="origemAfastamentoMotivo"
          hidden={!showOutros}
          value={values.origemAfastamentoMotivo}
          onChange={handleChange}
        />
      </div>
      <BtnNext onClick={goToNext} valid={true} btnText={"Continuar"}/>
    </div>
  );
}
