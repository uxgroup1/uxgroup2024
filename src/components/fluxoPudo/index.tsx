import style from "./style.module.scss"
import banner from "@/assets/pudo/pudoImages/banner-pudo.png";
import pudo from "@/assets/pudo/pudoImages/pudo.png";
import Image from "next/image";
import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import bannerOne from "@/assets/pudo/svg-pudo/1.svg"
import bannerOneHover from "@/assets/pudo/svg-pudo/1-1.svg"
import bannerTwo from "@/assets/pudo/svg-pudo/2.svg"
import bannerTwoHover from "@/assets/pudo/svg-pudo/2-2.svg"
import bannerThree from "@/assets/pudo/svg-pudo/3.svg"
import bannerThreeHover from "@/assets/pudo/svg-pudo/3-3.svg"
import bannerFour from "@/assets/pudo/svg-pudo/4.svg"
import bannerFourHover from "@/assets/pudo/svg-pudo/4-4.svg"

import bannerFive from "@/assets/pudo/svg-pudo/5.svg"
import bannerFiveHover from "@/assets/pudo/svg-pudo/5-5.svg"
import bannerSix from "@/assets/pudo/svg-pudo/6.svg"
import bannerSixHover from "@/assets/pudo/svg-pudo/6-6.svg"
import bannerSeven from "@/assets/pudo/svg-pudo/7.svg"
import bannerSevenHover from "@/assets/pudo/svg-pudo/7-7.svg"
import bannerEight from "@/assets/pudo/svg-pudo/8.svg"
import bannerEightHover from "@/assets/pudo/svg-pudo/8-8.svg"


interface contentFluxo {
    passo: number,
    secondImage: string,
    image: string,
    text: string,
    id: number;
}

export default function FluxoPudo() {

    const content: Array<contentFluxo> = [
        {
            id: 1,
            passo: 1,
            image: bannerOne,
            secondImage: bannerOneHover,
            text: "O cliente se dirige ao ponto PUDO dentro do prazo."
        },
        {
            id: 2,
            passo: 2,
            image: bannerTwo,
            secondImage: bannerTwoHover,
            text: "No local, informa o código no terminal ou ao atendente."
        },
        {
            id: 3,
            passo: 3,
            image: bannerThree,
            secondImage: bannerThreeHover,
            text: "Após a validação, o locker ou atendente libera o pacote."
        },
        {
            id: 4,
            passo: 4,
            image: bannerFour,
            secondImage: bannerFourHover,
            text: "O cliente confere o pacote e finaliza a retirada."
        },
    ]
    const contentTwo: Array<contentFluxo> = [
        {
            id: 5,
            passo: 1,
            image: bannerFive,
            secondImage: bannerFiveHover,
            text: `O cliente solicita a devolução no ecommerce.`
        },
        {
            id: 6,
            passo: 2,
            image: bannerSix,
            secondImage: bannerSixHover,
            text: "Em seguida, escolhe um ponto PUDO para deixar o pacote."
        },
        {
            id: 7,
            passo: 3,
            image: bannerSeven,
            secondImage: bannerSevenHover,
            text: "No local, escaneia o código ou entrega o pacote ao atendente."
        },
        {
            id: 8,
            passo: 4,
            image: bannerEight,
            secondImage: bannerEightHover,
            text: "A transportadora coleta o pacote e o envia ao CD."
        },
    ]

    const [hoverState, setHoverState] = useState<{ [key: number]: boolean }>({});

    function alterarImagemHover(id: number) {
        setHoverState(prev => ({ ...prev, [id]: true }));
    }

    function resetarImagem(id: number) {
        setHoverState(prev => ({ ...prev, [id]: false }));
    }



    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-[50px] pb-[100px] ">
            <div className="w-[90%] lg:w-full max-w-[90%] gap-5 lg:gap-10 h-auto flex lg:flex-row flex-col-reverse items-center justify-between">
                <div className="flex flex-col gap-3 lg:items-center lg:justify-center lg:gap-2 justify-start items-start w-full lg:w-full leading-normal">
                    <h1 className="text-black">
                        Retire e Devolva com Facilidade:
                    </h1>
                    <div className="flex w-full  text-[#ff7f12] gap-2 ">
                        <BsArrowRightSquareFill fontSize={30} color="#ff7f12" />
                        <p className="mt-[2px] text-xl p-0 font-bold">Retirada pelo Cliente</p>
                    </div>
                    <div
                        className="lg:w-full lg:min-w-full min-w-[390px] w-full  flex-row flex pb-10 justify-between mt-5 lg:mt-10  lg:h-auto lg:overflow-x-auto overflow-hidden lg:overflow-hidden overflow-x-auto"
                    >
                        {content.map((data, index) => (
                            <>
                                <div onMouseEnter={() => alterarImagemHover(data.id)}
                                    onMouseLeave={() => resetarImagem(data.id)} className="xl:w-[370px] w-[320px] hover:scale-95 hover:shadow-md rounded-lg shadow border transition-all duration-150 mt-5 h-[460px] flex-shrink-0" key={index}>
                                    <div className=" rounded-lg scale-100 lg:flex flex items-center justify-center font-bold text-2xl text-[#ff7f12] -mt-5 ml-5 w-10 h-10 border bg-white border-[#ff7f12]">
                                        {data.passo}
                                    </div>
                                    <div className="h-4/5 w-full border border-b-0 border-[#8D8D8D] -mt-5 rounded-t-lg">
                                        <Image className={`object-cover ${hoverState[data.id]? "perspective-1000 transition-all" : ""} rounded-t-lg  w-full h-full`} alt="Image 1" width={100} height={100} quality={100} src={hoverState[data.id] ? data.secondImage : data.image}/>
                                    </div>
                                    <div className="h-1/5 p-5 flex items-center w-full bg-[#FFECDB] border border-[#ff7f12] rounded-b-lg">
                                        <p className="xl:w-[97%] w-[90%] text-base p-0 text-black">
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex ${index === 3 ? "hidden" : ""} scale-150 w-8 mt-[120px] lg:mt-[150px] relative text-[#ff7f12] gap-2`}>
                                    <BsArrowRightSquareFill fontSize={100} color="#ff7f12" />
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="flex w-full mt-5 lg:justify-end text-[#ff7f12] gap-2 ">
                        <BsArrowRightSquareFill className="flex lg:hidden" fontSize={30} color="#ff7f12" />

                        <p className="mt-[2px] text-xl p-0 font-bold">Devolução de Produto</p>
                        <BsArrowLeftSquareFill className="lg:flex hidden" fontSize={30} color="#ff7f12" />
                    </div>
                    <div
                        className="lg:w-full lg:min-w-full min-w-[390px] w-full lg:flex-row-reverse flex pb-10 justify-between mt-5 lg:mt-10  lg:h-auto lg:overflow-x-auto overflow-hidden lg:overflow-hidden overflow-x-auto"
                    >
                        {contentTwo.map((data, index) => (
                            <>
                                <div onMouseEnter={() => alterarImagemHover(data.id)}
                                    onMouseLeave={() => resetarImagem(data.id)} className="xl:w-[370px] w-[320px] hover:scale-95 transition-all hover:shadow-md rounded-lg shadow border mt-5  h-[460px] flex-shrink-0" key={index}>
                                    <div className="rounded-lg z-50 scale-100 flex items-center justify-center font-bold text-2xl text-[#ff7f12] -mt-5 ml-5 w-10 h-10 border bg-white border-[#ff7f12]">
                                        {data.passo}
                                    </div>
                                    <div className="h-4/5 w-full -z-10 border border-b-0 border-[#8D8D8D]  -mt-5 rounded-t-lg">
                                        <Image className="object-cover rounded-t-lg  w-full h-full" alt="Image 1" width={100} height={100} quality={100} src={hoverState[data.id] ? data.secondImage : data.image}/>
                                    </div>
                                    <div className="h-1/5 p-5 flex items-center w-full bg-[#FFECDB] border border-[#ff7f12] rounded-b-lg">
                                        <p className="xl:w-[97%] text-base p-0 text-black">
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex ${index === 3 ? "hidden" : "lg:flex hidden"}  scale-150 w-8 mt-[120px] lg:mt-[150px] relative text-[#ff7f12] gap-2 `}>
                                    <BsArrowLeftSquareFill fontSize={100} color="#ff7f12" />
                                </div>
                                <div className={`flex ${index === 3 ? "hidden" : "lg:hidden flex"} scale-150 w-8 mt-[120px] lg:mt-[110px] relative text-[#ff7f12] gap-2`}>
                                    <BsArrowRightSquareFill fontSize={100} color="#ff7f12" />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}