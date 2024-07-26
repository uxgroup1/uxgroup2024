import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import unbox from "@/assets/logos/unbox.svg";
import vennux from "@/assets/logos/venuxx.png";
import vendasBanner from "@/assets/cards/vendasBannerCard.png";
import gestaoBanner from "@/assets/cards/Venuxx.png";

export default function CardsConnect() {
    const [openCardOne, setOpenCardOne] = useState(false)
    const [openCardTw, setOpenCardTwo] = useState(false)



    return (
        <section className="bg-white lg:h-auto max-w-[1996px] pb-[100px] lg:pb-[5%] lg:pt-[15%] pt-[10%] xl:pt-[03%] w-full">
            <div className="flex w-full items-center justify-center">
                <div className="w-[90%] flex lg:flex-row flex-col items-start gap-5 justify-center">
                    <div className="flex flex-col justify-between items-center h-auto transition lg:h-auto w-full lg:w-1/2 border rounded-2xl shadow-md">
                        <div
                            style={{ backgroundImage: `url(${vendasBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                            className="h-[200px] lg:h-[300px] w-full flex items-center justify-center lg:justify-start rounded-t-2xl shadow-sm"
                        >
                            <div className="flex flex-col items-center lg:items-start justify-center gap-2 rounded-t-2xl lg:pl-20 w-full h-full bg-[#00000069]">
                                <Image width={100} height={100} className="w-2/5 lg:w-1/3 flex justify-start items-center" src={unbox.src} alt="Unbox Logo" />

                            </div>
                        </div>
                        <div className="w-[90%] p-0 py-10 flex flex-col items-center justify-center ">
                            <div onClick={() => { setOpenCardOne(!openCardOne) }} className="w-[90%]  transition pb-2 rounded-2xl flex items-center justify-between">
                                <h1 className="text-xl w-[90%] font-medium text-black">
                                    A plataforma de e-commerce das marcas que mais crescem.
                                </h1>
                                <svg
                                    data-accordion-icon
                                    className={`w-6 h-6 text-lg  rounded-lg p-1 ${openCardOne === true ? " rounded-lg  rotate-180" : ""} text-black shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </div>
                            <div className={` ${openCardOne === true ? "flex transition" : "hidden"} h-auto flex-col w-[90%]`}>
                                <p className="text-black font-normal">
                                    Uma plataforma de vendas one stop shop, onde você encontra todas as ferramentas necessárias para gerenciar seu negócio online em um só lugar. Desde o desenvolvimento do projeto até automação de marketing, a Unbox simplifica a administração das vendas digitais,integra os processos de pagamento, economiza tempo, reduz os custos e melhora os resultados com soluções integradas.
                                </p>
                                <button className="flex items-center justify-center hover:scale-95 transition bg-[#A900D9] h-12 w-[200px] rounded-lg text-white">
                                    <Link className="w-full h-full flex items-center justify-center" href={"#formulario"}>conheça mais mais</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center h-auto transition lg:h-auto w-full lg:w-1/2 border rounded-2xl shadow-md">
                        <div
                            style={{ backgroundImage: `url(${gestaoBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                            className="h-[200px] lg:h-[300px] w-full flex items-center justify-center lg:justify-start rounded-t-2xl shadow-sm"
                        >
                            <div className="flex flex-col items-center lg:items-start justify-center gap-2 rounded-t-2xl  lg:pl-20 w-full h-full bg-[#00000069]">
                                <Image width={100} height={100} className="w-2/5 lg:w-1/3 flex justify-start items-center" src={vennux.src} alt="Unbox Logo" />

                            </div>
                        </div>
                        <div className="w-[90%] p-0 py-10 flex flex-col items-center justify-center ">
                            <div onClick={() => { setOpenCardTwo(!openCardTw) }} className="w-[95%]  transition pb-2 rounded-2xl flex items-center justify-between">
                                <h1 className="text-xl w-[90%] font-medium text-black">
                                    Soluções personalizadas que conectam especialistas em transporte.
                                </h1>
                                <svg
                                    data-accordion-icon
                                    className={`w-6 h-6 text-lg  rounded-lg p-1 ${openCardTw === true ? " rounded-lg rotate-180" : ""} text-black shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </div>
                            <div className={` ${openCardTw === true ? "flex transition" : "hidden"} h-auto flex-col w-[95%]`}>
                                <p className="text-black font-normal">
                                    Com soluções flexíveis e eficientes, adaptando os serviços às necessidades específicas de cada cliente, a Venuxx conecta especialistas em transporte a empresas do segmento B2B garantindo profissionalismo, confiabilidade e inovação. Com uma equipe majoritariamente de mulheres,cada entrega realizada reflete o compromisso com um serviço humanizado e de alta qualidade, agregando um valor único à experiência dos clientes.

                                </p>
                                <button className="flex items-center justify-center hover:scale-95 transition bg-[#29265B] h-12 w-[200px] rounded-lg text-white">
                                    <Link className="w-full h-full flex items-center justify-center" href={"#formulario"}>conheça mais mais</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </section >
    );
}
