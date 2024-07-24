
import Image from "next/image"
import vendasBanner from "@/assets/cards/vendasBannerCard.png"
import gestaoBanner from "@/assets/cards/gestaoBannerCard.png"
import Link from "next/link"

interface twoCards {
    title?: string,
    text?: string,
    backgroundOne?: string,
    backgroundTwo?: string,
    titleOne?: string,
    titleTwo?: string,
    textOne?: string,
    textTwo?: string,
    iconOne?: string,
    iconTwo?: string,
    corButtonOne?: string,
    corButtonTwo?: string
}

export default function NewTwoCards({ title, text, backgroundOne, backgroundTwo, corButtonOne, corButtonTwo, iconOne, iconTwo, titleOne, titleTwo, textOne, textTwo }: twoCards) {
    return (
        <section className="bg-white lg:h-auto max-w-[1996px] lg:pt-[15%] pt-[10%] xl:pt-[03%] w-full  ">
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
                    <div style={{ backgroundImage: `url(${vendasBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="w-full lg:w-1/2 text-white bg-gray-300 flex justify-end flex-col gap-5 h-auto lg:h-[460px] shadow-md rounded-2xl">
                        <div className="w-full bg-[#00000065] rounded-2xl h-full flex flex-col p-8 lg:p-16 items-start justify-end gap-5">
                            {iconOne && (
                                <Image className="w-16 lg:w-20" src={iconOne} alt="" width={100} height={100} />
                            )}

                            <h2 className="text-2xl text-white lg:text-4xl">
                                {titleOne}

                            </h2>
                            {textOne && (
                                <p className="text-white">
                                    {textOne}
                                </p>
                            )}

                            <button style={{backgroundColor:`${corButtonOne}`}} className={`w-52 h-10 hover:scale-95 transition text-white shadow rounded-lg`}>
                                <Link href={"#formulario"}>
                                    saiba mais
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${gestaoBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="w-full lg:w-1/2 text-white justify-end bg-gray-300 flex flex-col  gap-5 h-auto lg:h-[460px] shadow-md rounded-2xl">
                        <div className="w-full  bg-[#00000065] rounded-2xl h-full flex flex-col p-8 lg:p-16 items-start justify-end gap-5">

                            {iconTwo && (
                                <Image className=" w-16 lg:w-20" src={iconTwo} alt="" width={100} height={100} />
                            )}
                            <h2 className="text-2xl text-white lg:text-4xl">
                                {titleTwo}

                            </h2>
                            {textTwo && (
                                <p  className="text-white">{textTwo}</p>
                            )}

                            <button style={{backgroundColor:`${corButtonTwo}`}} className={`w-52 h-10 hover:scale-95 transition text-white shadow rounded-lg`}>
                                <Link href={"#formulario"}>
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