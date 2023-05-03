import React from "react";
import BtnNext from "./BtnNext";

type participantesType = {
  goToNext: () => void;
};

export default function Participantes({ goToNext }: participantesType) {
  return (
    <div>
        <BtnNext onClick={goToNext}/>
    </div>
  );
}
