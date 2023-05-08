import React, { ChangeEvent, useState } from "react";
import { Colaborador, PoppyTitulo } from "@/pages";
import BtnNext from "./BtnNext";
import { TextField } from "@mui/material";

type FuncionarioType = {
  goToNext: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: Colaborador;
};

export default function Funcionario({
  goToNext,
  handleChange,
  values,
}: FuncionarioType) {
  const [valido, setValido] = useState(true);
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <h1
          className={`${PoppyTitulo.className} text-3xl place-self-center [word-spacing: 2rem]`}
        >
          Dados do Colaborador
        </h1>
        <TextField
          label="EDV"
          value={values.EDV}
          placeholder="00000000"
          name="EDV"
          type={"number"}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <TextField
          label="Nome"
          value={values.nome}
          placeholder="Digite seu nome completo"
          name="nome"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
      </div>
      <BtnNext onClick={goToNext} valid={valido} />
    </div>
  );
}
