import { TiStarOutline } from "react-icons/ti";
import { IoMdTrendingUp } from "react-icons/io";
import { MdDomain, MdOutlineAttachMoney } from "react-icons/md";
import { TbLeaf } from "react-icons/tb";


export default function ParaMarketPlacesPudo() {

    const content = [
        {
            icon: IoMdTrendingUp,
            title: "Eficiência Operacional:",
            text: "Otimização das rotas de entrega, rapidez no tempo e custo por pedido."
        },
        {
            icon: TiStarOutline,
            title: "Satisfação do Cliente:",
            text: "Ofereça mais opções de retirada e devolução, aumentando a conveniência para o consumidor final."
        },
        {
            icon: TbLeaf,
            title: "Sustentabilidade:",
            text: "Diminua a pegada de carbono ao otimizar rotas de entrega e consolidar pontos de distribuição."
        },
        {
            icon: MdOutlineAttachMoney,
            title: "Redução de custos:",
            text: "Diminuição de gastos com reentregas e falhas na entrega, com pedidos retirados diretamente nos pontos."
        },
    ]

    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-[#F3F4F6] h-auto pt-[100px] pb-[300px] ">
            <div className="w-[90%] lg:w-full max-w-[90%] gap-5 lg:gap-10 h-auto flex lg:flex-row flex-col-reverse items-center justify-between">
                <div className="flex flex-col gap-3  lg:gap-2 justify-start items-start w-full lg:w-full leading-normal">
                    <h1 className="text-[#FF7F13] flex items-center gap-3">
                        <MdDomain className=" hidden lg:flex" fontSize={50} />
                        Para empresas e marketplaces
                    </h1>
                    <div className="w-full flex gap-10 lg:gap-20 pt-10 flex-wrap h-auto">
                        {content.map((data, index) => (
                            <div className="lg:w-[45%] gap-3 flex flex-col lg:h-24" key={index}>
                                <div className="w-full gap-5 flex items-center h-autoflex">
                                    <div className="w-12 shadow h-12 border flex items-center justify-center rounded-md border-[#FF7F13] text-[#FF7F13] bg-[#FF7F1333]">
                                        <data.icon fontSize={35}></data.icon>
                                    </div>
                                    <p className="p-0 text-black font-semibold">{data.title}</p>
                                </div>
                                <p className="p-0 text-black font-light lg:w-3/4">{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}