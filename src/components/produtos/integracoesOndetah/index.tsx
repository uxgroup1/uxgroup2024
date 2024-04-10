import { useState } from "react";
import Image from "next/image";

import imageOne from "@/assets/ondetah/clientesOndetah.png";
import imageTwo from "@/assets/ondetah/transportadoras.png";


export default function IntegrationsOndetah() {
  const [currentImage, setCurrentImage] = useState(imageOne);
  const [selectedItem, setSelectedItem] = useState("Canais de Vendas");

  const handleClick = (image: any, item: any) => {
    setCurrentImage(image);
    setSelectedItem(item);
  };

  return (
    <section className="flex flex-col gap- items-center justify-center max-w-[1996px] w-full">
      <div className="w-[90%] flex flex-col gap-5 justify-center">
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center text-black ">
            Através da conexão garantimos informações, gestão e integração na
            entrega.
          </h1>
          <p className="lg:w-4/5 text-black text-center">
            A cada etapa realizada, o cliente é informado sobre o status da sua
            compra. Desde a confirmação de pagamento até a entrega, com pushes
            ao longo do processo até mesmo em caso de ocorrência. Tecnologias
            integradas que possibilitam assertividade e agilidade da informação
            para o cliente.
          </p>
        </div>
        <div className="w-full flex flex-col pt-5 gap-5 lg:gap-12 justify-center items-center">
          <ul className="flex lg:flex-row flex-col gap-4 lg:gap-10 justify-evenly">
            <li
              className={`flex justify-center items-center text-black shadow cursor-pointer ${
                selectedItem === "Transportadores"
                  ? "bg-gradient-to-r from-[#29265B] to-[#009580] text-white border hover:bg-[#28265b] hover:text-white"
                  : "hover:bg-gradient-to-r  hover:from-[#29265B] hover:to-[#009580] hover:text-white hover:border"
              } transition w-[340px] lg:w-52 h-12 border hover:shadow-md rounded-lg p-1`}
              onClick={() => handleClick(imageOne, "Transportadores")}
            >
              <h3>Plataformas</h3>
            </li>
            <li
              className={`flex justify-center items-center text-black shadow cursor-pointer ${
                selectedItem === "HUBs"
                  ? "bg-gradient-to-r from-[#29265B] to-[#009580] text-white border hover:bg-[#28265b] hover:text-white"
                  : "hover:bg-gradient-to-r hover:from-[#29265B] hover:to-[#009580] hover:text-white hover:border"
              } transition w-[340px] lg:w-52  h-12 border hover:shadow-md rounded-lg p-4`}
              onClick={() => handleClick(imageTwo, "HUBs")}
            >
              <h3>Transportadores</h3>
            </li>
            
          </ul>
          <div className="w-full lg:w-4/5 flex items-center justify-center">
            <Image
              className="w-full lg:w-[45%]"
              src={currentImage}
              width={400}
              height={300}
              alt="Imagem de integrações"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
