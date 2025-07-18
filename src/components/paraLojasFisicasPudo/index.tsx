import { BsShopWindow } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";




export default function ParaLojasFisicasPudo() {

    const content = [
        {
            title: "Aumento de Tráfego:",
            text: "Mais pessoas visitando sua loja para coletar ou entregar produtos.",
            icon: IoMdTrendingUp
        },
        {
            title: "Receita Adicional:",
            text: "Oportunidade de vendas adicionais para clientes que, de outra forma, não conheceriam sua loja.",
            icon: MdOutlineAttachMoney
        },
        {
            title: "Reconhecimento de Marca:",
            text: "Sua loja passa a ser vista como um ponto de referência no bairro, aumentando a visibilidade e fortalecendo sua presença local.",
            icon: AiOutlineTrophy
        },
    ]

    return (
        <>
            <section className="bg-white w-full">
                <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 2px 4px 12px 0px" }}
                    className="lg:w-[90%] gap-10 bg-white rounded-2xl px-8 p-12 md:p-20 flex items-center flex-col justify-center -mt-64 lg:-mt-56 mx-auto"
                >
                    <div className="w-full flex lg:flex-row flex-col lg:items-center gap-5 justify-start">
                        <BsShopWindow fontSize={45} color="#FF7F13" />
                        <h1 className="lg:text-center text-3xl text-black lg:pt-3 ">Para lojas físicas</h1>
                    </div>

                    <div className="flex items-center justify-center gap-8 ">
                        <div className="flex flex-col md:flex-row w-full gap-5  justify-start md:gap-5 items-start">
                            {content?.map((item, index) => {
                                return (
                                    <div
                                        className="flex lg:w-1/3 flex-col gap-5 h-[150px]  items-start justify-start"
                                        key={index}
                                    >
                                        <div className="flex items-center w-full gap-3 justify-start">
                                            <div className="w-11 shadow h-11 border flex items-center justify-center rounded-md border-[#FF7F13] text-[#FF7F13] bg-[#FF7F1333]">
                                                <item.icon fontSize={35}></item.icon>
                                            </div>

                                            <p className=" p-0 text-black text- text-center font-medium">
                                                {item.title}
                                            </p>
                                        </div>


                                        <p className="w-full md:w-4/5 font-light text-black">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
