import arrowLeft from "@/assets/cta/arrowLeft.svg";
import arrowRight from "@/assets/cta/arrowRigth.svg";
import Image from "next/image";
import vendasBanner from "@/assets/newBannerHome/vendasBanner.png"
import gestaoBanner from "@/assets/newBannerHome/gestaoBanner.png"
import logisticaBanner from "@/assets/newBannerHome/logisticaBanner.png"
import esgBanner from "@/assets/newBannerHome/esgBanner.png"
import vendasSvg from "@/assets/newBannerHome/vendas.svg"
import gestaoSvg from "@/assets/newBannerHome/gestao.svg"
import logisticaSvg from "@/assets/newBannerHome/logistica.svg"
import esgSvg from "@/assets/newBannerHome/esg.svg"
import { useState } from "react";
import { motion } from "framer-motion";
import iconVendas from "@/assets/newBannerHome/iconeBanner/vendas.svg"
import iconGestao from "@/assets/newBannerHome/iconeBanner/gestao.svg"
import iconLogistica from "@/assets/newBannerHome/iconeBanner/logistica.svg"
import iconEsg from "@/assets/newBannerHome/iconeBanner/esg.svg"
import Link from "next/link";




export default function NewBannerHome() {

    const [currentIndex, setCurrentIndex] = useState(0)


    const setIndex = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === 3) {
            setCurrentIndex(0)
        }
    }
    const setIndexMenos = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) {
            setCurrentIndex(3)
        }
    }

    const banners = [
        {
            index: 0,
            banners: vendasBanner.src,
            svgIcon: vendasSvg,
            title: "E-commerce totalmente personalizado do tamanho e perfil do seu negócio.",
            color: `A900D9`,
            icon: iconVendas

        },
        {
            index: 1,
            banners: gestaoBanner.src,
            svgIcon: gestaoSvg,
            title: "Tecnologias inovadoras que simplificam a experiência de compra digital.",
            color: `29265B`,
            icon: iconGestao

        },
        {
            index: 2,
            banners: logisticaBanner.src,
            svgIcon: logisticaSvg,
            title: "Operações logísticas com tecnologia de ponta e processos otimizados.",
            color: `FF7F13`,
            icon: iconLogistica

        },
        {
            index: 3,
            banners: esgBanner.src,
            svgIcon: esgSvg,
            title: "Soluções sustentáveis que reduzem o impacto social e ambiental da sua operação.",
            color: `7DAE59`,
            icon: iconEsg

        },
    ]

    return (
        <section className="bg-white lg:h-auto max-w-[1996px] pt-[30%] xl:pt-[03%] w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-28 h-1/4 items-center">
                    <div className="flex items-center pb-10 justify-start w-[90%] h-full">
                        <div className="flex flex-col gap-5 lg:w-3/5 leading-normal">
                            <h1 className=" lg:text-5xl">
                                Transformamos a experiência do cliente
                                através da tecnologia.
                            </h1>
                            <p className="text-xl font-light">
                                Conheça nosso ecossistema de soluções para vendas digitais.
                            </p>
                        </div>
                        <div className="w-2/5 flex-row gap-4 pb-2 md:[display:flex] [display:none] justify-center md:justify-end">
                            <div
                                className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                                onClick={() => setIndexMenos()}
                            >
                                <Image src={arrowLeft} alt="Seta esquerda" width={40} height={40} />
                            </div>
                            <div
                                className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                                onClick={() => setIndex()}
                            >
                                <Image src={arrowRight} alt="Seta direita" width={40} height={40} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex w-full h-full">
                    {
                        banners.map((data) => {
                            return (
                                <div className="w-full transition-all" key={data.index}>
                                    <Image className={` ${currentIndex === 0 ? "ml-[80px]" : ""} ${currentIndex === data.index ? "flex absolute transition-all opacity-90" : "[display:none]"} ml-5 -mt-5 z-50 w-16 shadow-md rounded-lg  transition-all `} src={currentIndex === data.index ? data.icon : ""} alt="" />
                                    <Image
                                        className={`w-full cursor-pointer ${currentIndex === data.index ? "scale-110 transition-all [box-shadow: 0px 6px 6px 0px rgba(156,156,156,0.44)]" : ""} `}
                                        src={data.banners}
                                        alt="Descrição da imagem"
                                        width={100}
                                        height={100}
                                        onClick={() => setCurrentIndex(data.index)}
                                        quality={100}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }} style={{ borderTop: "0px !important", borderBottom: `0.1px solid #${banners[currentIndex].color}`, borderRight: `0.1px solid #${banners[currentIndex].color}`, borderLeft: `0.1px solid #${banners[currentIndex].color}` }} className={` flex  -mt-[1px] flex-col gap-5 items-center justify-center p-10 shadow-md w-[90%] h-64 border rounded-b-2xl `}>
                    <div className="h-10">
                        <Image style={{ borderTopRightRadius: `${currentIndex === banners[currentIndex].index ? "10px" : "rounded-3xl"}` }} className={`w-full `} src={banners[currentIndex].svgIcon} alt="" width={100} height={100} />
                    </div>
                    <h2 className="font-light">{banners[currentIndex].title}</h2>
                    <button className={`w-[200px] flex items-center justify-center hover:scale-95 transition text-white font-medium rounded-lg shadow-md h-10`} style={{ backgroundColor: `#${banners[currentIndex].color}` }}>
                        <Link className="flex items-center justify-center w-full h-full" href={"#formulario"}> saiba mais</Link>

                    </button>
                </motion.div>

            </div>
        </section >
    )
}