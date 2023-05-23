import { Employee, PoppyTitulo } from "@/pages";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import BtnNext from "./BtnNext";

type restricaoType = {
  goToNext: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: Employee;
};

export default function Restricao({
  goToNext,
  handleChange,
  values,
}: restricaoType) {
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        <h1
          className={`${PoppyTitulo.className} text-3xl place-self-center [word-spacing: 2rem]`}
        >
          Restrição/Limitação
        </h1>
        <TextField
          label="Parte do Corpo Afetada"
          value={values.parteCorpo}
          placeholder="Digite aqui a parte do corpo afetada"
          name="parteCorpo"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
          multiline
          rows={2}
        />
        <FormControl>
          <FormLabel>É necessária a fisioterapia?</FormLabel>
          <RadioGroup
            name="fisioterapia"
            onChange={handleChange}
            row
            value={values.fisioterapia}
          >
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>
            Há interesse do funcionário em participar do Espaço de Bem com a
            Vida?
          </FormLabel>
          <RadioGroup
            name="bemComVida"
            onChange={handleChange}
            row
            value={values.bemComVida}
          >
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
        <div className="grid grid-rows-2 gap-4">
          <TextField label="Postos validados com o funcinário para retorno ao trabalho" name="postosValidados" onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }/>
          <TextField label="Recomendações ao funcionário" name="recomendacoes" onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }/>
        </div>
      </div>
      <BtnNext
        onClick={goToNext}
        valid={true}
        btnText={"Finalizar Formulário"}
      />
    </div>
  );
}
