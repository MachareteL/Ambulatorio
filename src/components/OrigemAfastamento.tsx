import React, { SyntheticEvent } from "react";
import BtnNext from "./BtnNext";
import { PoppyTitulo } from "@/pages";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

type origemType = {
  goToNext: () => void;
};

export default function OrigemAfastamento({ goToNext }: origemType) {
  const [value, setValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | EventTarget>
  ) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(value);
  };

  return (
    <div className="w-10/12 m-auto  h-5/6 mt-10 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <h1 className={`${PoppyTitulo.className} text-3xl place-self-center`}>
          Origem do Afastamento
        </h1>
        <FormControl>
          <RadioGroup
            name="radio_buttons_group"
            value={value}
            onChange={handleChange}
          >
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
      <BtnNext onClick={goToNext} />
    </div>
  );
}
