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
import { useState, useEffect } from "react";
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 10000);


        return () => clearInterval(interval);
    }, []);


    const banners = [
        {
            index: 0,
            banners: vendasBanner.src,
            svgIcon: vendasSvg,
            title: "Construa um e-commerce personalizado com uma solução One Stop Shop e um Hub de Integração que garantem uma experiência única de compra para seus clientes.",
            color: `A900D9`,
            icon: iconVendas,
            link: "#vendas"

        },
        {
            index: 1,
            banners: gestaoBanner.src,
            svgIcon: gestaoSvg,
            title: "Crie campanhas de frete e gerencie sua malha de transportes com ferramentas de TMS e CX, com gestão preditiva e em tempo real da sua operação.",
            color: `29265B`,
            icon: iconGestao,
            link: "#gestao"

        },
        {
            index: 2,
            banners: logisticaBanner.src,
            svgIcon: logisticaSvg,
            title: "Soluções personalizadas de Fulfillment, torre de controle e envios, com tecnologia proprietária, que garante uma operação otimizada com rapidez e precisão na entrega do pedido.",
            color: `FF7F13`,
            icon: iconLogistica,
            link: "#logistica"

        },
        {
            index: 3,
            banners: esgBanner.src,
            svgIcon: esgSvg,
            title: "Adote soluções como Green Mile, Compensação de Carbono e Last Mile por Mulheres e destaque se como uma empresa comprometida com os impactos socioambientais. ",
            color: `7DAE59`,
            icon: iconEsg,
            link: "#sustentabilidade"

        },
    ]

    return (
        <section className="bg-white lg:h-auto max-w-[1996px] pt-[30%] xl:pt-[03%] w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-28 h-1/4 items-center">
                    <div className="flex lg:flex-row flex-col items-center pb-10 justify-start w-[90%] h-full">
                        <div className="flex flex-col gap-5 lg:w-3/5 leading-normal">
                            <h1 className=" text-black text-4xl lg:text-left text-center lg:text-5xl">
                                Transformamos a experiência do cliente através da tecnologia.
                            </h1>
                            <p className="text-xl text-black lg:text-left text-center font-light">
                                Potencializam as vendas do seu e-commerce.
                            </p>
                        </div>
                        <div className="w-2/5 flex flex-row gap-4 -mb-16 z-10 pb-2 md:[display:flex]  justify-center md:justify-end">
                            <div
                                className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#DEDEDE] cursor-pointer"
                                onClick={() => setIndexMenos()}
                            >
                                <Image src={arrowLeft} alt="Seta esquerda" width={40} height={40} />
                            </div>
                            <div
                                className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#DEDEDE] cursor-pointer"
                                onClick={() => setIndex()}
                            >
                                <Image src={arrowRight} alt="Seta direita" width={40} height={40} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex h-full items-center justify-center w-full lg:flex-col flex-col-reverse">
                    <div className="flex w-full h-full">
                        <Image
                            className={`w-full lg:[display:none] -mt-10 cursor-pointer rounded-t-2xl ${currentIndex === banners[currentIndex].index ? "transition-all [box-shadow: 0px 6px 6px 0px rgba(156,156,156,0.44)]" : ""} `}
                            src={banners[currentIndex].banners}
                            alt="Descrição da imagem"
                            width={100}
                            height={100}
                            onClick={() => setCurrentIndex(banners[currentIndex].index)}
                            quality={100}
                        />
                        {
                            banners.map((data) => {
                                return (
                                    <div className="lg:flex [display:none] w-full transition-all" key={data.index}>
                                        <Image className={` ${currentIndex === 0 ? "ml-[80px]" : ""} ${currentIndex === data.index ? "flex absolute transition-all opacity-90" : "[display:none]"} ml-5 -mt-5 z-40 w-16 shadow-md rounded-lg  transition-all `} src={currentIndex === data.index ? data.icon : ""} alt="" />
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
                        animate={{ opacity: 1, transition: { duration: 0.5 } }} style={{ borderTop: `0.1px solid #${banners[currentIndex].color}`, borderBottom: `0px solid #${banners[currentIndex].color}`, borderRight: `0.1px solid #${banners[currentIndex].color}`, borderLeft: `0.1px solid #${banners[currentIndex].color}` }} className={` -mt-[1px] flex-col gap-5 items-center lg:[display:none] flex justify-center p-5 shadow-md w-full lg:w-[90%] pb-12 pt-10 h-auto lg:h-64 border border-t rounded-t-2xl `}>
                        <div className="h-10">
                            <Image style={{ borderTopRightRadius: `${currentIndex === banners[currentIndex].index ? "10px" : "rounded-3xl"}` }} className={`${banners[currentIndex].index === 3 ? "lg:w-full w-[70%] " : "w-full"} `} src={banners[currentIndex].svgIcon} alt="" width={100} height={100} />
                        </div>
                        <h2 className="text-lg text-center text-black font-light">{banners[currentIndex].title}</h2>
                        <button className={`w-[200px] flex items-center justify-center hover:scale-95 transition text-white font-medium rounded-lg shadow-md h-12`} style={{ backgroundColor: `#${banners[currentIndex].color}` }}>
                            <Link className="flex items-center justify-center w-full h-full" href={"#formulario"}> conheça sua solução</Link>

                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }} style={{ borderTop: `0px solid #${banners[currentIndex].color}`, borderBottom: `0.1px solid #${banners[currentIndex].color}`, borderRight: `0.1px solid #${banners[currentIndex].color}`, borderLeft: `0.1px solid #${banners[currentIndex].color}` }} className={`   -mt-[01px] flex-col gap-5 items-center [display:none] lg:flex justify-center p-10 shadow-md w-full lg:w-[90%] h-[350px] lg:h-64 border border-t rounded-b-2xl `}>
                        <div className="h-10">
                            <Image style={{ borderTopRightRadius: `${currentIndex === banners[currentIndex].index ? "10px" : "rounded-3xl"}` }} className={`w-full `} src={banners[currentIndex].svgIcon} alt="" width={100} height={100} />
                        </div>
                        <h2 className="text-xl text-center w-3/4 text-black font-light">{banners[currentIndex].title}</h2>
                        <button className={`w-[200px] flex items-center justify-center hover:scale-95 transition text-white font-medium rounded-lg shadow-md h-12 p-2`} style={{ backgroundColor: `#${banners[currentIndex].color}` }}>
                            <Link className="flex items-center justify-center w-full p-2 h-full" href={banners[currentIndex].link}> conheça sua solução</Link>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}