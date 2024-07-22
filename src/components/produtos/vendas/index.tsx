import dynamic from "next/dynamic";

import style from "./style.module.scss"
const CarrouselCards = dynamic(
    () => import("@/components/institucional/carrouselCards/index")
);
import arrowLeft from "@/assets/cta/arrowLeft.svg";
import arrowRight from "@/assets/cta/arrowRigth.svg";
import Image from "next/image";

export default function SimplifiqueEcommerce() {

    const content = [
        {
            title: "E-commerce totalmente personalizado:",
            text: "Desenvolvemos uma loja virtual sob medida para sua marca de acordo com o perfil do seu negócio e do seu cliente.",
            banner: "",
            link: "/fulfillment",
        },
        {
            title: "Estabilidade e segurança: infraestrutura robusta para seu negócio:",
            text: "Nossa infraestrutura tecnológica garante que sua loja virtual funcione de forma estável e segura, protegendo os dados da empresa e dos clientes.",
            banner: "",
            link: "/fulfillment",
        },
        {
            title: "Fluxo de vendas por assinatura 100% integrado ao seu e-commerce: ",
            text: "Facilitamos a venda de produtos por assinatura, integrando essa funcionalidade diretamente ao seu e-commerce para maior comodidade do seu cliente e por consequência maior retenção de clientes.",
            banner: "",
            link: "/fulfillment",
        },
        {
            title: "Experiência de marca personalizada como flagship digital:",
            text: "Criamos uma experiência de marca única e imersiva, transformando sua loja virtual em um verdadeiro flagship digital que encanta e fideliza seus clientes.",
            banner: "",
            link: "/fulfillment",
        },
        {
            title: "Meios de pagamento e logística instalados:",
            text: "Integramos os principais meios de pagamento e soluções logísticas, simplificando o processo de compra e garantindo entregas rápidas e seguras.",
            banner: "",
            link: "/fulfillment",
        },

    ];

    return (
        <>
            <section className="bg-white flex items-center flex-col justify-center  w-full md:px-0 px-5 ">
                <div className="max-w-[1996px] w-full flex flex-col items-center justify-center md:justify-center">

                    <div className="w-[90%]">
                        <div className="flex gap-0 flex-col leading-[120%]">
                            <h1 className="text-black"> Venda mais com um e-commerce sob medida.</h1>
                        </div>
                        <p className="w-full text-black lg:w-3/4">
                            Fácil para quem está começando e feito para quem quer ir mais longe, a plataforma one stop shop, oferecida pela UX em
                            conexão com a Unbox, possui todas as ferramentas necessárias para o sucesso do seu e-commerce. Uma loja personalizada
                            de acordo com o perfil e tamanho do seu negócio,
                            focada na experiência do cliente com soluções integradas que vão desde a estratégia de marketing até a entrega final:                        </p>
                    </div>
                    <div className="w-[90%] flex-row gap-4 pb-2 md:[display:flex] [display:none] justify-center md:justify-end">
                        <div
                            className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                        // onClick={handleScrollLeft}
                        >
                            <Image
                                src={arrowLeft}
                                alt="Seta esquerda"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div
                            className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                        // onClick={handleScrollRight}
                        >
                            <Image
                                src={arrowRight}
                                alt="Seta direita"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>
                </div>



                <CarrouselCards
                    // containerRef={containerRef}
                    colorText="black"
                    content={content}
                />
            </section>
        </>
    );
}