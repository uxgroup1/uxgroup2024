import vendas from "@/assets/vendas.svg"
import gestao from "@/assets/gestao.svg"
import Image from "next/image"
import vendasBanner from "@/assets/cards/vendasBannerCard.png"
import gestaoBanner from "@/assets/cards/gestaoBannerCard.png"

export default function NewTwoCards() {
    return (
        <section className="bg-white lg:h-auto max-w-[1996px] lg:pt-[15%] pt-[10%] xl:pt-[03%] w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="w-[90%] gap-4 flex items-center justify-center flex-col" >
                    <h1 className="lg:text-left text-center">
                        Tecnologia para vendas digitais
                    </h1>
                    <p className="text-center  w-full lg:w-[63%]">Soluções personalizadas para o tamanho e perfil do seu negócio. Nossa plataforma one stop shop e nosso hub de integração oferecem uma experiência completa e integrada, desde o desenvolvimento da loja até a entrega ao cliente.</p>
                </div>
                <div className="w-[90%] pt-10 lg:flex-row flex-col  flex items-center justify-center gap-4">
                    <div style={{ backgroundImage: `url(${vendasBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="w-full lg:w-1/2 text-white bg-gray-300 flex justify-end flex-col gap-5 h-[460px] shadow-md rounded-2xl">
                        <div className="w-full bg-[#0000004b] rounded-2xl h-full flex flex-col p-8 lg:p-16 items-start justify-end gap-5">
                            <Image className="w-16 lg:w-20" src={vendas} alt="" width={100} height={100} />
                            <h2 className="text-2xl lg:text-4xl">
                                One Stop Shop
                            </h2>
                            <button className="w-52 h-10 hover:scale-95 transition bg-[#A900D9] text-white shadow rounded-lg">
                                saiba mais
                            </button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${gestaoBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="w-full lg:w-1/2 text-white justify-end bg-gray-300 flex flex-col  gap-5 h-[460px] shadow-md rounded-2xl">
                        <div className="w-full  bg-[#0000004b] rounded-2xl h-full flex flex-col p-8 lg:p-16 items-start justify-end gap-5">


                            <Image className=" w-16 lg:w-20" src={gestao} alt="" width={100} height={100} />
                            <h2 className="text-2xl lg:text-4xl">
                                Hub de Integração
                            </h2>
                            <button className="w-52 h-10 hover:scale-95 transition bg-[#29265B] text-white shadow rounded-lg">
                                saiba mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}