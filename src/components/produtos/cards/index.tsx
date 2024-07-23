import Link from "next/link";
import unbox from "@/assets/logos/unbox.svg"
import vennux from "@/assets/logos/venuxx.png"
import Image from "next/image";
import vendasBanner from "@/assets/cards/vendasBannerCard.png"
import gestaoBanner from "@/assets/cards/gestaoBannerCard.png"

export default function CardsConnect() {
    return (
        <section className="bg-white lg:h-auto max-w-[1996px] pb-[5%] lg:pt-[15%] pt-[10%] xl:pt-[03%] w-full  ">
            <div className="flex w-full items-center justify-center">
                <div className="w-[90%] flex lg:flex-row flex-col items-center gap-5 justify-center">
                    <div className="flex flex-col justify-center items-center h-auto lg:h-[500px] w-full lg:w-1/2 border rounded-2xl shadow-md">
                        <div style={{ backgroundImage: `url(${vendasBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className=" h-[200px] lg:h-[300px] w-full  flex items-center justify-center lg:justify-start rounded-t-2xl shadow-sm ">
                        <div className="flex items-center justify-start rounded-t-2xl lg:pl-20 w-full h-full bg-[#00000069]">
                                <Image width={100} height={100} className="w-2/5" src={unbox.src} alt="Unbox Logo" />
                            </div>
                        </div>
                        <div className="h-full py-10 px-5 lg:p-10 w-[90%]">
                            <p className="text-black">
                                Uma plataforma de vendas one stop shop, onde você encontra todas as ferramentas necessárias para gerenciar seu negócio online em um só lugar. Desde o desenvolvimento do projeto até automação de marketing, a Unbox simplifica a administração das vendas digitais, integra os processos de pagamento, economiza tempo, reduz os custos e melhora os resultados com soluções integradas.
                            </p>
                            <button className="flex items-center justify-center hover:scale-95 transition bg-[#29265B] h-12 w-[200px] rounded-lg text-white">
                                <Link className="w-full h-full flex items-center justify-center" href={"#formulario"}>saiba mais</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-auto lg:h-[500px] w-full lg:w-1/2 border rounded-2xl shadow-md">
                        <div style={{ backgroundImage: `url(${gestaoBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className=" h-[200px] lg:h-[300px] w-full  flex items-center justify-center lg:justify-start rounded-t-2xl shadow-sm">
                            <div className="flex items-center justify-start rounded-t-2xl lg:pl-20 w-full h-full bg-[#00000069]">
                                <Image width={100} height={100} className="w-2/5" src={vennux.src} alt="Unbox Logo" />
                            </div>

                        </div>
                        <div className="h-full py-10 px-5 lg:p-10 w-[90%]">
                            <p className="text-black">
                                Uma plataforma de vendas one stop shop, onde você encontra todas as ferramentas necessárias para gerenciar seu negócio online em um só lugar. Desde o desenvolvimento do projeto até automação de marketing, a Unbox simplifica a administração das vendas digitais, integra os processos de pagamento, economiza tempo, reduz os custos e melhora os resultados com soluções integradas.
                            </p>
                            <button className="flex items-center justify-center hover:scale-95 transition bg-[#29265B] h-12 w-[200px] rounded-lg text-white">
                                <Link className="w-full h-full flex items-center justify-center" href={"#formulario"}>saiba mais</Link>
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}