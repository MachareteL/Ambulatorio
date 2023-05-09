import { Colaborador, PoppyTitulo } from "@/pages";
import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import BtnNext from "./BtnNext";

type fimType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  goToNext: () => void;
  values: Colaborador;
};

export default function Fim({ handleChange, goToNext, values }: fimType) {
  return (
    <div className="w-11/12 m-auto h-5/6  flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <h1 className={`${PoppyTitulo.className} text-3xl place-self-center`}>
          Resumo do Formulário
        </h1>
        <div className="text-[#71767C]">
          <h1 className={`${PoppyTitulo.className} text-black text-lg`}>
            Dados do funcionário
          </h1>
          <div className="flex">
            <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
              Nome:
            </h1>
            <p className={`${PoppyTitulo.className}`}>{values.nome}</p>
          </div>
          {/* First DIV */}
          <div className="flex">
            <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
              EDV:
            </h1>
            <p className={`${PoppyTitulo.className}`}>{values.EDV}</p>
          </div>
          {/* Second DIV */}
        </div>
        <div className="text-[#71767C]">
          <div className="block">
            <h1 className={`${PoppyTitulo.className} text-black text-lg`}>
              Origem do Afastamento
            </h1>
            <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}></h1>
            <p className={`${PoppyTitulo.className} font-semibold`}>
              {values.origemAfastamento.localeCompare("outro")
                ? values.origemAfastamento
                : values.origemAfastamentoMotivo}
            </p>
          </div>
        </div>
        {/* Third DIV */}
        <div className="wrapper">
          <h1 className={`${PoppyTitulo.className} text-black text-lg`}>
            Participantes do afastamento
          </h1>
          <div className="text-[#71767C] flex flex-col gap-1">
            <div className="flex">
              <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
                Supervisor:
              </h1>
              <p className={`${PoppyTitulo.className}`}>{values.supervisor}</p>
            </div>
            <div className="flex">
              <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
                MED-Ca:
              </h1>
              <p className={`${PoppyTitulo.className}`}>{values.MEDCA}</p>
            </div>
            <div className="flex">
              <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
                CAP/TEF6
              </h1>
              <p className={`${PoppyTitulo.className}`}>{values.CAPTEF6}</p>
            </div>
            <div className="flex">
              <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
                Outros:
              </h1>
              <p className={`${PoppyTitulo.className} mr-2`}>
                {values.outrosParticipantes}
              </p>
              <p className={`${PoppyTitulo.className}`}>
                {values.AreaOutroParticipante}
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#71767C]">
          <h1 className={`${PoppyTitulo.className} text-black text-lg`}>
            Restrição/Limitação
          </h1>
          <div className="block">
            <h1 className={`${PoppyTitulo.className} font-semibold`}>
              Parte do corpo afetada:
            </h1>
            <p className={`${PoppyTitulo.className}`}>{values.parteCorpo}</p>
          </div>
          <div className="flex">
            <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
              Fisioterapia:
            </h1>
            <p className={`${PoppyTitulo.className}`}>{values.fisioterapia}</p>
          </div>
          <div className="flex">
            <h1 className={`${PoppyTitulo.className} font-semibold mr-2`}>
              Espaço de Bem com a Vida:
            </h1>
            <p className={`${PoppyTitulo.className}`}>{values.bemComVida}</p>
          </div>
          <div className="block">
            <h1 className={`${PoppyTitulo.className} font-semibold`}>
              Postos validados com o funcionário para o retorno ao trabalho:
            </h1>
            <p className={`${PoppyTitulo.className}`}>{values.postosValidados}</p>
          </div>
          <div className="block">
            <h1 className={`${PoppyTitulo.className} font-semibold`}>
              Recomendações ao funcionário:
            </h1>
            <p className={`${PoppyTitulo.className}`}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
