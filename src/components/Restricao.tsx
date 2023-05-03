import React from "react";
import BtnNext from "./BtnNext";
type restricaoType = {
  goToNext: () => void;
};
export default function Restricao({ goToNext }: restricaoType) {
  return (
    <div>
        aaaa
      <BtnNext onClick={goToNext} />
    </div>
  );
}
