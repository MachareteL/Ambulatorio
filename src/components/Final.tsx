import { Employee, PoppyTitulo } from "@/pages";
import { TextField } from "@mui/material";
import React from "react";
import BtnNext from "./BtnNext";
import { jsPDF } from "jspdf";
import logo from "../../public/BOSCH.svg";

type Final = {
  goToNext: () => void;
  restart: () => void;
  values: Employee;
};



export default function Final({ goToNext, restart, values }: Final) {
  const pdf = () => {
    const doc = new jsPDF({unit: "px", });
    
    doc.setFontSize(16)
    doc.setFont("Poppins", "bold")
    doc.text("Dados do colaborador", 20, 20)

    doc.setFontSize(14)
    doc.setFont("Poppins", "regular")
    doc.text(`Nome: ${values.nome.toUpperCase()}` , 20, 40)
    doc.text(`EDV: ${values.EDV}`, 20, 60)

    doc.setFontSize(16)
    doc.setFont("Poppins", "bold")
    if (values.origemAfastamento != "outro"){
      doc.text(`Origem do afastamento: ${values.origemAfastamento.toUpperCase()}`, 20, 100)
    }else{
      doc.text(`Origem do afastamento: ${values.origemAfastamento.toUpperCase()}`, 20, 100)
      doc.setFontSize(14)
      doc.setFont("Poppins", "regular")
      doc.text(`Motivo: ${values.origemAfastamentoMotivo}`, 20 ,115)
      
    }
      

    doc.setFontSize(16)
    doc.setFont("Poppins", "bold")
    doc.text("Participantes do afastamento", 20, 150)

    doc.setFontSize(14)
    doc.setFont("Poppins", "regular")
    doc.text(`Supervisor: ${values.supervisor.toUpperCase()}`, 20, 170)
    doc.text(`MED-Ca: ${values.MEDCA.toUpperCase()}`, 20, 190)
    doc.text(`CAP/TEF6: ${values.CAPTEF6.toUpperCase()}`, 20, 210)
    if(values.AreaOutroParticipante != undefined && values.outrosParticipantes != undefined){
      doc.text(`Outros: ${values.outrosParticipantes}`.toUpperCase(), 20, 235)
      doc.text(`Área: ${values.AreaOutroParticipante}`.toUpperCase(), 20, 250)
    }

    doc.setFontSize(16)
    doc.setFont("Poppins", "bold")
    doc.text("Restrição/Limitação", 20, 290)

    doc.setFontSize(14)
    doc.setFont("Poppins", "regular")
    doc.text(`Parte do corpo afetada: ${values.parteCorpo.toUpperCase()}`, 20, 310)
    doc.text(`Fisioterapia? ${values.fisioterapia.toUpperCase()}`, 20, 330)
    doc.text(`Espaço de bem com a vida? ${values.bemComVida.toUpperCase()}`, 20, 350)
    doc.text(`Postos validados: ${values.postosValidados.toUpperCase()}`, 20, 370)
    doc.text(`Recomendações: ${values.recomendacoes.toUpperCase()}`, 20, 390)
    
    doc.save(`${values.nome}_${values.EDV}.pdf`)
  };
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
          onClick={pdf}
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
