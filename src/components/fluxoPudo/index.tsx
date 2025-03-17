import style from "./style.module.scss"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";


interface contentFluxo {
    passo: number,

    image: string,
    text: string
}

export default function FluxoPudo() {

    const content: Array<contentFluxo> = [
        {
            passo: 1,
            image: "",
            text: "O cliente se dirige ao ponto PUDO dentro do prazo."
        },
        {
            passo: 2,
            image: "",
            text: "No local, informa o código no terminal ou ao atendente."
        },
        {
            passo: 3,
            image: "",
            text: "Após a validação, o locker ou atendente libera o pacote."
        },
        {
            passo: 4,
            image: "",
            text: "O cliente confere o pacote e finaliza a retirada."
        },
    ]
    const contentTwo: Array<contentFluxo> = [
        {
            passo: 1,
            image: "",
            text: `O cliente solicita a devolução no ecommerce.`
        },
        {
            passo: 2,
            image: "",
            text: "Em seguida, escolhe um ponto PUDO para deixar o pacote."
        },
        {
            passo: 3,
            image: "",
            text: "No local, escaneia o código ou entrega o pacote ao atendente."
        },
        {
            passo: 4,
            image: "",
            text: "A transportadora coleta o pacote e o envia ao CD."
        },
    ]




    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-[100px] pb-[100px] ">
            <div className="w-[90%] lg:w-full max-w-[90%] gap-5 lg:gap-10 h-auto flex lg:flex-row flex-col-reverse items-center justify-between">
                <div className="flex flex-col gap-3 lg:items-center lg:justify-center lg:gap-2 justify-start items-start w-full lg:w-full leading-normal">
                    <h1 className="text-black">
                        Retire e Devolva com Facilidade:
                    </h1>
                    <div className="flex w-full text-[#ff7f12] gap-2 ">
                        <BsArrowRightSquareFill fontSize={30} color="#ff7f12" />
                        <p className="mt-[2px] font-bold">Retirada pelo Cliente</p>
                    </div>
                    <div className="w-full flex justify-between mt-10  h-[340px]">
                        {content.map((data, index) => (
                            <>
                                <div className="xl:w-[380px] w-[320px] rounded-lg shadow border h-[290px]" key={index} >
                                    <div className="absolute rounded-lg flex items-center justify-center font-bold text-2xl text-[#ff7f12] -mt-5 ml-5 w-10 h-10 border bg-white border-[#ff7f12]">
                                        {data.passo}
                                    </div>
                                    <div className="h-3/5 w-full border-b">

                                    </div>

                                    <div className="h-2/5 p-5 flex items-center w-full bg-[#FFECDB] border border-[#ff7f12] rounded-b-lg">
                                        <p className="xl:w-full  w-[90%] text-base p-0 text-black">
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex ${index === 3 ? "hidden" : ""} scale-150  w-8 mt-[120px] relative text-[#ff7f12] gap-2 `}>
                                    <BsArrowRightSquareFill fontSize={100} color="#ff7f12" />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="flex w-full justify-end text-[#ff7f12] gap-2 ">
                        
                        <p className="mt-[2px] font-bold">Devolução de Produto</p>
                        <BsArrowLeftSquareFill fontSize={30} color="#ff7f12" />
                    </div>
                    <div className="w-full flex lg:flex-row-reverse justify-between mt-5   h-[340px]">
                        {contentTwo.map((data, index) => (
                            <>
                                <div className="xl:w-[380px] w-[320px] rounded-lg shadow border h-[290px]" key={index} >
                                    <div className="absolute rounded-lg flex items-center justify-center font-bold text-2xl text-[#ff7f12] -mt-5 ml-5 w-10 h-10 border bg-white border-[#ff7f12]">
                                        {data.passo}
                                    </div>
                                    <div className="h-3/5 w-full border-b">

                                    </div>

                                    <div className="h-2/5 p-5 flex items-center w-full bg-[#FFECDB] border border-[#ff7f12] rounded-b-lg">
                                        <p className="xl:w-full text-base p-0 text-black">
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex ${index === 3 ? "hidden" : ""} scale-150  w-8 mt-[120px] relative text-[#ff7f12] gap-2 `}>
                                    <BsArrowLeftSquareFill fontSize={100} color="#ff7f12" />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}