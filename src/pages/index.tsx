import Passos from "@/components/Passos";
import { useState } from "react";
import { Poppins } from "next/font/google";
interface Colaborador {
  edv: string;
  nome: string;
  origemAfastamento: number;
}

export const PoppyTitulo = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [colaborador, setColaborador] = useState<Colaborador>();

  return (
    <main className="bg-[url('../../public/BOSCH.svg')] h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center w-screen">
      <div className="container bg-white h-4/6 sm:h-5/6 rounded-xl w-5/6 flex">
        <Passos />
      </div>
    </main>
  );
}
