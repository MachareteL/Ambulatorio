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
    doc.text(values.EDV, 20, 20)
    doc.save()
    // doc.html(
    //   `
    //   <html lang="en">
        
    //     <body background="red">
    //       <div
    //         style="
    //           display: flex;
    //           justify-content: center;
    //         "
    //       >
    //         <div style=" background: red">
    //           <div>
    //             <h1>Dados do funcionário</h1>
    //             <div style="display: flex">
    //               <h1>Nome:</h1>
    //               <p>${values.nome}</p>
    //             </div>
    //             <div style="display: flex">
    //               <h1>EDV:</h1>
    //               <p>${values.EDV}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </body>
    //   </html>
    //   `,
    //   {
    //     callback: function (doc) {
    //       doc.save('teste');
    //     }}
    // );
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
