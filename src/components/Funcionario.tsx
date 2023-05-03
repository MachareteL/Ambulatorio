import React from "react";
import { PoppyTitulo } from "@/pages";
import BtnNext from "./BtnNext";
import { TextField } from "@mui/material";

type FuncionarioType = {
    goToNext: () => void
}

export default function Funcionario({goToNext}: FuncionarioType) {
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <h1 className={`${PoppyTitulo.className} text-3xl place-self-center [word-spacing: 2rem]`}>
          Dados do Colaborador
        </h1>
        <TextField label="EDV" placeholder="00000000" type={'number'}/>
        <TextField label="Nome" placeholder="Digite seu nome completo" />
      </div>
      <BtnNext onClick={goToNext} />
    </div>
  );
}
