import React, { ChangeEvent, SyntheticEvent } from "react";
import BtnNext from "./BtnNext";
import { Colaborador, PoppyTitulo } from "@/pages";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

type origemType = {
  goToNext: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: Colaborador
};

export default function OrigemAfastamento({
  goToNext,
  handleChange,
  values
}: origemType) {
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <h1 className={`${PoppyTitulo.className} text-3xl place-self-center`}>
          Origem do Afastamento
        </h1>
        <FormControl>
          <RadioGroup name="origemAfastamento" onChange={handleChange}>
            <FormControlLabel
              value="reintegracao"
              control={<Radio />}
              label="Reintegração"
            />
            <FormControlLabel
              value="retornoinss"
              control={<Radio />}
              label="Retorno de afastamento INSS"
            />
            <FormControlLabel value="outro" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <BtnNext onClick={goToNext} valid={true} />
    </div>
  );
}
