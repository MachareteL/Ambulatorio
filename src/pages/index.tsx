import { ChangeEvent, useState } from "react";
import { Kings, Poppins } from "next/font/google";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Funcionario from "@/components/Funcionario";
import OrigemAfastamento from "@/components/OrigemAfastamento";
import Participantes from "@/components/Participantes";
import Restricao from "@/components/Restricao";
import { StepButton } from "@mui/material";
import Resumo from "@/components/Resumo";
import Final from "@/components/Final";

const steps = [
  "Dados do Funcionário",
  "Origem do Afastamento",
  "Participantes do Afastamento",
  "Restrição/Limitação",
  "Fim",
];

export interface Colaborador {
  EDV: string;
  nome: string;
  origemAfastamento: String;
  origemAfastamentoMotivo?: String;
  supervisor: String;
  MEDCA: String;
  CAPTEF6: String;
  outrosParticipantes?: String;
  AreaOutroParticipante?: String;
  parteCorpo: String;
  fisioterapia: String;
  bemComVida: String;
  postosValidados: String;
  recomendacoes: String;
}

export const PoppyTitulo = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const [colaborador, setColaborador] = useState<Colaborador>({
    EDV: "",
    nome: "",
    origemAfastamento: "",
    supervisor: "",
    MEDCA: "",
    CAPTEF6: "",
    AreaOutroParticipante: "",
    origemAfastamentoMotivo: "",
    outrosParticipantes: "",
    parteCorpo: "",
    fisioterapia: "",
    bemComVida: "",
    postosValidados: "",
    recomendacoes: "",
  });
  const [numPasso, setNumPasso] = useState(0);

  const goToNext = () => {
    console.log(colaborador);
    setNumPasso((p) => p + 1);
  };
  const goBack = () => {
    console.log(colaborador);
    setNumPasso((p) => p - 1);
  };

  const handleChangeColaborador = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setColaborador((prevState: Colaborador) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const newForm = () => {
    setColaborador({
      EDV: "",
      nome: "",
      origemAfastamento: "",
      supervisor: "",
      MEDCA: "",
      CAPTEF6: "",
      AreaOutroParticipante: "",
      origemAfastamentoMotivo: "",
      outrosParticipantes: "",
      parteCorpo: "",
      fisioterapia: "",
      bemComVida: "",
      postosValidados: "",
      recomendacoes: "",
    });
    setNumPasso(0)
  };
  //https://lightrun.com/answers/preactjs-preact-typescript-why-cant-i-setstate-with-an-object-containing-the-keys-of-my-state-type
  return (
    <main className="bg-[url('../../public/BOSCH.svg')] h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center w-screen">
      <div className="container bg-white h-4/6 sm:h-5/6 rounded-xl w-5/6 flex">
        <Box sx={{ width: "100%", marginTop: "36px" }}>
          <Stepper
            activeStep={numPasso}
            alternativeLabel
            className={numPasso >= 4 ? `hidden` : ``}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={() => setNumPasso(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          {numPasso == 0 ? (
            <Funcionario
              goToNext={goToNext}
              handleChange={handleChangeColaborador}
              values={colaborador}
            />
          ) : numPasso == 1 ? (
            <OrigemAfastamento
              goToNext={goToNext}
              handleChange={handleChangeColaborador}
              values={colaborador}
            />
          ) : numPasso == 2 ? (
            <Participantes
              goToNext={goToNext}
              handleChange={handleChangeColaborador}
              values={colaborador}
            />
          ) : numPasso == 3 ? (
            <Restricao
              goToNext={goToNext}
              handleChange={handleChangeColaborador}
              values={colaborador}
            />
          ) : numPasso == 4 ? (
            <Final goToNext={goToNext} restart={newForm}/>
          ) : numPasso == 5 ? (
            <Resumo goBack={goBack} values={colaborador} />
          ) : (
            <></>
          )}
        </Box>
      </div>
    </main>
  );
}
