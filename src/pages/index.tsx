import { ChangeEvent, useState } from "react";
import { Kings, Poppins } from "next/font/google";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Employee from "@/components/Funcionario";
import OrigemAfastamento from "@/components/OrigemAfastamento";
import Participantes from "@/components/Participantes";
import Restricao from "@/components/Restricao";
import { StepButton } from "@mui/material";
import Resumo from "@/components/Resumo";
import Final from "@/components/Final";

const steps = [
  "Dados do Funcionário",
  "Origem da Demanda",
  "Participantes da Avaliação",
  "Restrição/Limitação",
  "Fim",
];

export interface Employee {
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
  AreaOutroParticipante2?: string;
  outrosParticipantes2?: string;
}

export const PoppyTitulo = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const [employee, setEmployee] = useState<Employee>({
    EDV: "",
    nome: "",
    origemAfastamento: "",
    supervisor: "",
    MEDCA: "",
    CAPTEF6: "",
    AreaOutroParticipante: "",
    outrosParticipantes: "",
    AreaOutroParticipante2: "",
    outrosParticipantes2: "",
    origemAfastamentoMotivo: "",
    parteCorpo: "",
    fisioterapia: "",
    bemComVida: "",
    postosValidados: "",
    recomendacoes: "",
  });
  const [numPass, setNumPass] = useState(0);

  const goToNext = () => {
    console.log(employee);
    setNumPass((p) => p + 1);
  };
  const goBack = () => {
    console.log(employee);
    setNumPass((p) => p - 1);
  };

  const handleChangeEmployee = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployee((prevState: Employee) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const newForm = () => {
    setEmployee({
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
    setNumPass(0);
  };
  //https://lightrun.com/answers/preactjs-preact-typescript-why-cant-i-setstate-with-an-object-containing-the-keys-of-my-state-type
  return (
    <main className="bg-[url('../../public/BOSCH.svg')] h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center w-screen">
      <div
        className={
          numPass == 5
            ? `bg-white rounded-md`
            : `container bg-white h-4/6 sm:h-5/6 rounded-xl w-5/6 flex`
        }
      >
        <Box sx={{ width: "100%", marginTop: "36px" }}>
          <Stepper
            activeStep={numPass}
            alternativeLabel
            className={numPass >= 4 ? `hidden` : ``}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={() => setNumPass(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          {numPass == 0 ? (
            <Employee
              goToNext={goToNext}
              handleChange={handleChangeEmployee}
              values={employee}
            />
          ) : numPass == 1 ? (
            <OrigemAfastamento
              goToNext={goToNext}
              handleChange={handleChangeEmployee}
              values={employee}
            />
          ) : numPass == 2 ? (
            <Participantes
              goToNext={goToNext}
              handleChange={handleChangeEmployee}
              values={employee}
            />
          ) : numPass == 3 ? (
            <Restricao
              goToNext={goToNext}
              handleChange={handleChangeEmployee}
              values={employee}
            />
          ) : numPass == 4 ? (
            <Final goToNext={goToNext} restart={newForm} values={employee} />
          ) : numPass == 5 ? (
            <Resumo goBack={goBack} values={employee} />
          ) : (
            <></>
          )}
        </Box>
      </div>
    </main>
  );
}
