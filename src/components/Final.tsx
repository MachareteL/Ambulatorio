import { PoppyTitulo } from "@/pages";
import { TextField } from "@mui/material";
import React from "react";
import BtnNext from "./BtnNext";

type Final = {
  goToNext: () => void;
  restart: () => void;
};

export default function Final({ goToNext, restart }: Final) {
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <h1
          className={`${PoppyTitulo.className} text-3xl place-self-center [word-spacing: 2rem]`}
        >
          Formulário Finalizado
        </h1>
      </div>
      <div className="flex flex-col">
        <BtnNext
          onClick={goToNext}
          btnText={"Clique aqui para visualizar um resumo"}
          valid={true}
        />
        <BtnNext
          onClick={() => {}}
          btnText={"Clique para baixar uma cópia em PDF"}
          valid={true}
        />
        <BtnNext
          onClick={restart}
          btnText={"Clique para enviar outro formulário"}
          valid={true}
        />
      </div>
    </div>
  );
}
