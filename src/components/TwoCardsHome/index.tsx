
import Image from "next/image"
import vendasBanner from "@/assets/cards/vendasBannerCard.png"
import gestaoBanner from "@/assets/cards/gestaoBannerCard.png"
import Link from "next/link"
import logoUnbox from "@/assets/logos/logoUnbox.png"

interface twoCards {
    title?: string,
    text?: string,
    backgroundOne?: string,
    backgroundTwo?: string,
    titleOne?: string,
    titleTwo?: string,
    textOne?: string,
    textTwo?: string,
    textThree?: string,
    textFour?: string,
    iconOne?: string,
    iconTwo?: string,
    corButtonOne?: string,
    corButtonTwo?: string
}

export default function NewTwoCards({ title, text, textFour, backgroundOne, backgroundTwo, corButtonOne, textThree, corButtonTwo, iconOne, iconTwo, titleOne, titleTwo, textOne, textTwo }: twoCards) {
    return (
        <section id="vendas" className="bg-white lg:h-auto max-w-[1996px] lg:pt-[15%] pt-[10%] xl:pt-[03%] w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="w-[90%] gap-4 flex items-center justify-center flex-col" >

                    <h1 className="lg:text-left text-black text-center">

                        {title}
                    </h1>
                    {text && (
                        <p className="text-center text-black w-full lg:w-[63%]">

                            {text}
                        </p>
                    )}

                </div>
                <div className="w-[90%] pt-10 lg:flex-row flex-col  flex items-center justify-center gap-4">
                    <div style={{ backgroundImage: `url(${vendasBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="w-full lg:w-1/2 text-white bg-gray-300 flex justify-end flex-col gap-5 h-auto lg:h-[500px] shadow-md rounded-2xl">
                        <div className="w-full bg-[#00000077] rounded-2xl h-full flex flex-col p-8 lg:p-14 items-start justify-end gap-5">
                            {/* <p className="absolute text-base lg:flex w-[200px] hidden lg:w-auto gap-2 items-center left-[40%] -mb-[-70.5%] lg:-mb-[-16.5%] justify-center  rounded-full px-4  text-black lg:left-[38%] p-2 bg-white ">
                                Powered
                                <Image className="w-16 mb-1" src={logoUnbox.src} width={100} height={100} alt="" />
                            </p> */}
                            <div className="w-full hidden lg:flex justify-end">
                                <p className=" text-base flex w-[200px] lg:w-auto gap-2 items-center left-[40%] justify-center  rounded-full px-4  text-black lg:left-[38%] p-2 bg-white ">
                                    Powered
                                    <Image className="w-16 mb-1" src={logoUnbox.src} width={100} height={100} alt="" />
                                </p>
                            </div>
                            <div className="w-full lg:hidden flex justify-end">


                                <p className=" lg:hidden text-base flex w-[200px] lg:w-auto gap-2 items-center left-[40%] justify-center  rounded-full px-4  text-black lg:left-[38%] p-2 bg-white ">
                                    Powered
                                    <Image className="w-16 mb-1" src={logoUnbox.src} width={100} height={100} alt="" />
                                </p>
                            </div>
                            {iconOne && (
                                <Image className="w-16 lg:w-20" src={iconOne} alt="" width={100} height={100} />
                            )}

                            <h2 className="text-2xl text-white lg:text-4xl">
                                {titleOne}

                            </h2>
                            {textOne && (
                                <p className="text-white pb-0">
                                    {textOne}
                                </p>
                            )}
                            {textThree && (
                                <p className="text-white pb-0">{textThree}</p>
                            )}



                            <button style={{ backgroundColor: `${corButtonOne}` }} className={`w-52 flex items-center justify-center h-10 hover:scale-95 transition text-white shadow rounded-lg`}>
                                <Link className="w-full h-full flex items-center justify-center" target="_blank" href={"https://www.unbox.com.br/growth"}>
                                    saiba mais
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${gestaoBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="w-full lg:w-1/2 text-white justify-end bg-gray-300 flex flex-col  gap-5 h-auto lg:h-[500px] shadow-md rounded-2xl">
                        <div className="w-full  bg-[#0000004c] rounded-2xl h-full flex flex-col p-8 lg:p-14 items-start justify-end gap-5">

                            {iconTwo && (
                                <Image className=" w-16 lg:w-20" src={iconTwo} alt="" width={100} height={100} />
                            )}
                            <h2 className="text-2xl text-white lg:text-4xl">
                                {titleTwo}

                            </h2>
                            {textTwo && (
                                <p className="text-white w-[95%] pb-0">{textTwo}</p>
                            )}
                            {textFour && (
                                <p className="text-white pb-0">{textFour}</p>
                            )}

                            <button style={{ backgroundColor: `${corButtonTwo}` }} className={`w-52 flex items-center justify-center h-10 hover:scale-95 transition text-white shadow rounded-lg`}>
                                <Link className="flex w-full h-full justify-center items-center" href={"#formulario"}>
                                    saiba mais
                                </Link>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}