import { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        { question: "O que é Fulfillment?", answer: "Fulfillment refere-se ao processo de gerenciar e executar todas as etapas da cadeia logística, desde o recebimento dos produtos até a entrega final aos clientes." },
        { question: "Quais serviços uma empresa de Fulfillment oferece?", answer: "Normalmente, os serviços incluem recebimento de mercadorias, armazenagem, gestão de estoque, picking (seleção de produtos), packing (embalagem), expedição de pedidos e logística reversa." },
        { question: "Como uma empresa de Fulfillment pode beneficiar meu negócio?", answer: "Ela pode reduzir custos operacionais, melhorar os prazos de entrega, permitir maior foco no core business da empresa, além de oferecer escalabilidade para atender aumentos sazonais ou de demanda." },
        { question: "Como a UX pode ajudar a reduzir custos de frete?", answer: "A UX otimiza rotas de entrega e utiliza estratégias eficientes de gestão logística para reduzir custos de frete." },
        { question: "A UX oferece soluções de Fulfillment Same Day e Next Day Delivery?", answer: "Sim, a UX trabalha com entrega rápida para atender às expectativas dos consumidores por prazos de entrega reduzidos." },
        { question: "Como posso começar a utilizar os serviços de Fulfillment da UX?", answer: "Entre em contato conosco para uma consulta personalizada. Estamos preparados para oferecer uma proposta sob medida que atenda às suas necessidades de logística e fulfillment." },

    ];

    return (
        <section className="bg-white flex items-center justify-center h-[140vh] lg:h-[80vh] max-w-[1996px] w-full">
            <div className="flex flex-col gap-10 items-center justify-center w-[90%] lg:px-0 lg:py-0 pb-10 lg:pt-10">
                <h1 className="text-black text-center text-5xl lg:w-[85%]">
                    Perguntas <span className='text-[#fbc705]'>frequentes</span> 
                </h1>
                <div className='flex flex-col items-center h-auto lg:h-[60vh] justify-center w-full'>


                    {faqItems.map((item, index) => (
                        <div key={index} className="w-[90%]" id={`accordion-open-${index}`} data-accordion="open">
                            <h2 id={`accordion-open-heading-${index}`}>
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-[#EDEDED] shadow-sm  gap-3"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`accordion-open-body-${index}`}>
                                    <span className="text-lg">{index + 1}. {item.question}</span>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 ${openIndex === index ? 'rotate-180' : ''} shrink-0`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-open-body-${index}`}
                                className={`${openIndex === index ? ' transition-all' : 'hidden'}`}
                                aria-labelledby={`accordion-open-heading-${index}`}>
                                <div className="p-5 border border-b-0 border-gray-200">
                                    <p className="mb-2 text-black">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
