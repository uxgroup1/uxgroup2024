import Image from "next/image";
import boxPudo from "@/assets/pudo/box-pudo.svg"
import iconPudo from "@/assets/pudo/pudoBoxIcon.svg"
import { TfiFaceSad, TfiFaceSmile } from "react-icons/tfi";
import { GiTurtle } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { TiFlashOutline } from "react-icons/ti";
import { GrMapLocation } from "react-icons/gr";





export default function JornadaPudo() {

    const titulos = [
        {
            title: "Logística de Reversa"
        },
        {
            title: "Fluxo operacional"
        },
        {
            title: "Entrega"
        },
        {
            title: "Otimização"
        },

    ]

    const semPudo = [
        {
            icon: TfiFaceSad,
            title: "Reversa Complexa",
            text: "exige agendamento e coleta no endereço do cliente."
        },
        {
            icon: GiTurtle,
            title: "Fluxo operacional lento",
            text: "com necessidade de coleta e entrega direta ao cliente, com possibilidade de insucessos."
        },
        {
            icon: FaRegCalendarAlt,
            title: "Entrega rígida",
            text: "exige que o cliente esteja presente no momento da entrega."
        },
        {
            icon: LiaMapMarkedAltSolid,
            title: "Sem otimização",
            text: "cada entrega exige deslocamentos individuais, aumentando o tempo."
        }
    ]
    const comPudo = [
        {
            icon: TfiFaceSmile,
            title: "Facilitada, devolução simplificada",
            text: "ao deixar o produto em um ponto PUDO"
        },
        {
            icon: TiFlashOutline,
            title: "Processo mais ágil",
            text: "sellers deixando pedidos em locais fixos para retirada."
        },
        {
            icon: FaRegCalendarAlt,
            title: "Entrega flexível",
            text: "pacotes são enviados para pontos estratégicos e ficam disponíveis para retirada."
        },
        {
            icon: GrMapLocation,
            title: "Otimização de Rotas",
            text: "transportadoras entregam vários pacotes em um único ponto."
        }
    ]


    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-[70px] pb-[100px] ">
            <div className="w-[90%] lg:w-full max-w-[90%] gap-5 lg:gap-10 h-auto flex lg:flex-row flex-col-reverse items-center justify-between">
                <div className="w-full flex flex-col h-auto gap-3 overflow-auto">
                    <div className="w-full mb-20 lg:hidden flex items-start gap-3 flex-col h-auto">
                        <Image src={boxPudo} width={100} height={100} alt="Box Orange" />
                        <h1 className="text-black">
                            Transforme a jornada do cliente com PUDO.
                        </h1>
                        <p className="text-black font-light">
                            Compare os benefícios de empresas que adotam o PUDO em relação às que ainda operam sem esse modelo e descubra como essa solução pode transformar sua logística.
                        </p>
                        <button className="h-10 w-full bg-[#FF7F13] rounded-lg shadow text-white">agendar uma reunião</button>
                    </div>
                    <div className="lg:w-full w-[820px] justify-end gap-5 mb-5 h-auto flex">
                        <div className="h-20 lg:w-1/4 lg:flex hidden w-[300px] rounded-lg bg-[#f3f4f600]">

                        </div>
                        <div className="h-20 lg:w-1/4 lg:flex hidden w-[300px] rounded-lg bg-[#f3f4f600]">

                        </div>
                        <div className="h-22 p-5 lg:w-1/4 w-[300px] flex items-center text-black justify-center text-lg font-bold rounded-lg shadow bg-[#F3F4F6]">
                            Sem PUDO
                        </div>
                        <div className="h-22 p-5 flex items-center justify-center lg:w-1/4 w-[300px] text-white gap-5 text-lg font-bold rounded-lg shadow bg-[#FF7F13]">
                            <Image className="w-[50px]" src={iconPudo} alt="" width={100} height={100} />
                            Com PUDO
                        </div>
                    </div>
                    <div className="lg:w-full w-[800px] flex gap-5 h-auto overflow-auto">
                        <div className="w-1/4 hidden lg:flex items-start gap-5 flex-col h-auto">
                            <Image src={boxPudo} width={100} height={100} alt="Box Orange" />
                            <h1 className="text-black">
                                Transforme a jornada do cliente com PUDO.
                            </h1>
                            <p className="text-black font-light">
                                Compare os benefícios de empresas que adotam o PUDO em relação às que ainda operam sem esse modelo e descubra como essa solução pode transformar sua logística.
                            </p>
                            <button className="h-10 w-[200px] bg-[#FF7F13] rounded-lg shadow text-white">agendar uma reunião</button>
                        </div>
                        <div className="lg:w-1/4 w-[180px] flex gap-5 flex-col h-auto">
                            {titulos.map((t => (
                                <div className="w-full lg:w-[235px] lg:my-0 my-5  text-lg flex items-center p-5 h-[180px] text-[#FF7F13] font-bold border-l border-l-[#FF7F13]">
                                    {t.title}
                                </div>
                            )))}
                        </div>
                        <div className="lg:w-1/4 w-[300px] flex gap-5  flex-col h-auto">
                            {semPudo.map((s => (
                                <div className="w-full text-lg flex-col lg:my-0 my-5 flex justify-center items-center p-5 h-[180px] text-black font-bold border-l border-l-[#8D8D8D]">
                                    <div className="w-full flex gap-3 flex-col">
                                        <div className="w-10 h-10 rounded-lg border-[#8D8D8D] border flex items-center justify-center text-[#8D8D8D] bg-[#F3F4F6]">
                                            <s.icon fontWeight={700} fontSize={25} />
                                        </div>
                                        <h2 className="text-lg font-semibold">
                                            {s.title},<p className="font-light">{s.text}</p>
                                        </h2>
                                    </div>

                                </div>
                            )))}
                        </div>
                        <div className="lg:w-1/4 w-[300px] flex gap-5  flex-col h-auto">
                            {comPudo.map((s => (
                                <div className="w-full text-lg flex-col lg:my-0 my-5 flex justify-center items-center p-5 h-[180px] text-black font-bold border-l border-l-[#8D8D8D]">
                                    <div className="w-full flex gap-3 flex-col">
                                        <div className="w-10 h-10 rounded-lg border-[#FF7F13] border flex items-center justify-center text-[#FF7F13] bg-[#FF7F1333]">
                                            <s.icon fontWeight={700} fontSize={25} />
                                        </div>
                                        <h2 className="text-lg font-semibold">
                                            {s.title},<p className="font-light">{s.text}</p>
                                        </h2>
                                    </div>

                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}