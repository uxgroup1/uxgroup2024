import { useState } from "react";
import Image from "next/image";

import imageOne from "@/assets/fusion/CANAIS-DE-VENDA-1-1.png";
import imageTwo from "@/assets/fusion/TRANSPORTADORES-1.png";
import imageThree from "@/assets/fusion/HUBS_1.png";
import imageFour from "@/assets/fusion/ERPS-2.png";

export default function Integrations() {
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
          <h1 className="text-center text-black ">Overview integrações.</h1>
          <p className="lg:w-4/5 text-black text-center">
            A UX possui conexão com as principais plataformas do mercado,
            garantindo informações, gestão e integração para todo o e-commerce.
            A UX ainda conta com tecnologias próprias para garantir uma
            logística altamente gerenciável.
          </p>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-col pt-5 gap-10 lg:gap-20 justify-center items-center">
          <ul className="flex lg:flex-row flex-col gap-4 lg:gap-10 justify-evenly">
            <li
              className={`flex justify-center items-center text-black shadow cursor-pointer ${
                selectedItem === "Transportadores"
                  ? "bg-[#28265b] text-white border hover:bg-[#28265b] hover:text-white"
                  : "hover:bg-[#28265b] hover:text-white hover:border"
              } transition w-[340px] lg:w-52 h-12 border hover:shadow-md rounded-lg p-1`}
              onClick={() => handleClick(imageTwo, "Transportadores")}
            >
              <h3>Transportadores</h3>
            </li>
            <li
              className={`flex justify-center items-center text-black shadow cursor-pointer ${
                selectedItem === "HUBs"
                  ? "bg-[#28265b] text-white border hover:bg-[#28265b] hover:text-white"
                  : "hover:bg-[#28265b] hover:text-white hover:border"
              } transition w-[340px] lg:w-52  h-12 border hover:shadow-md rounded-lg p-4`}
              onClick={() => handleClick(imageThree, "HUBs")}
            >
              <h3>HUBs</h3>
            </li>
            <li
              className={`flex justify-center items-center text-black shadow cursor-pointer ${
                selectedItem === "Canais de Vendas"
                  ? "bg-[#28265b] text-white border hover:bg-[#28265b] hover:text-white"
                  : "hover:bg-[#28265b] hover:text-white hover:border"
              } transition w-[340px] lg:w-52  h-12 border hover:shadow-md rounded-lg p-4`}
              onClick={() => handleClick(imageOne, "Canais de Vendas")}
            >
              <h3 >Canais de Vendas</h3>
            </li>
            <li
              className={`flex justify-center text-black items-center shadow cursor-pointer ${
                selectedItem === "ERPs"
                  ? "bg-[#28265b] text-white border hover:bg-[#28265b] hover:text-white"
                  : "hover:bg-[#28265b] hover:text-white hover:border"
              } transition w-[340px] lg:w-52  h-12 border hover:shadow-md rounded-lg p-4`}
              onClick={() => handleClick(imageFour, "ERPs")}
            >
              <h3>ERPs</h3>
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
