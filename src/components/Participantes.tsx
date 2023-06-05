import { Employee, PoppyTitulo } from "@/pages";
import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import BtnNext from "./BtnNext";

type participantesType = {
  goToNext: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: Employee;
};

export default function Participantes({
  goToNext,
  handleChange,
  values,
}: participantesType) {
  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <h1
          className={`${PoppyTitulo.className} text-3xl place-self-center [word-spacing: 2rem]`}
        >
          Participantes da Avaliação
        </h1>
        <TextField
          label="Supervisor"
          value={values.supervisor}
          placeholder="Digite o nome completo"
          name="supervisor"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <TextField
          label="MED-Ca"
          value={values.MEDCA}
          placeholder="Digite o nome completo"
          name="MEDCA"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <TextField
          label="CAP/TEF6"
          value={values.CAPTEF6}
          placeholder="Digite o nome completo"
          name="CAPTEF6"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <div className="flex w-full gap-6">
          <TextField
            label="Outros"
            placeholder="Digite seu nome completo"
            name="outrosParticipantes"
            className="w-full"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
            value={values.outrosParticipantes}
          />
          <TextField
            label="Área"
            placeholder="Area do Participante"
            name="AreaOutroParticipante"
            value={values.AreaOutroParticipante}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
          />
        </div>
        <div className="flex w-full gap-6">
          <TextField
            label="Outros 2"
            placeholder="Digite seu nome completo"
            name="outrosParticipantes2"
            className="w-full"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
            value={values.outrosParticipantes2}
          />
          <TextField
            label="Área2"
            placeholder="Area do Participante"
            name="AreaOutroParticipante2"
            value={values.AreaOutroParticipante2}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
          />
        </div>
      </div>
      <BtnNext onClick={goToNext} valid={true} btnText={"Continuar"}/>
    </div>
  );
}
