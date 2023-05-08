import { Colaborador } from "@/pages";
import React, { ChangeEvent } from "react";
import BtnNext from "./BtnNext";

type participantesType = {
  goToNext: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: Colaborador;

};

export default function Participantes({ goToNext, handleChange, values }: participantesType) {
  return (
    <div>
        <BtnNext onClick={goToNext} valid={true}/>
    </div>
  );
}
