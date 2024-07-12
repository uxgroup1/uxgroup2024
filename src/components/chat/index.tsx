"use client"

import Image from "next/image";
import icon from "@/assets/faviconBranco.svg";
import { useState, useEffect } from "react";

export default function ButtonChat() {
    const [message, setMessage] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(0); // Estado para alternar entre mensagens

    const messages = [
        "Quer saber qual a melhor solução pra você?",
        "Estamos aqui para ajudar com suas dúvidas!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setShowMessage(prev => !prev); // Alterna a exibição
            setCurrentMessage(prev => (prev + 1)); // Alterna entre as mensagens
        }, 5000);

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    return (
        <div
            onMouseEnter={() => setMessage(true)}
            onMouseLeave={() => setMessage(false)}
            className={`lg:w-24 lg:h-24 w-16 h-16 shadow-md hover:scale-90 cursor-pointer transition-all bg-black rounded-lg fixed top-[87%] lg:top-[84%] left-[80%] lg:left-[91%]`}
        >
            <Image src={icon} alt="" width={100} height={100} />

            {(message || showMessage) && (
                <div className="relative flex items-center justify-center border-[#ededed] py-4 px-4 font-medium text-lg -top-40 shadow-md border-2 left-[-430px] max-w-[500px] w-[450px] bg-white h-[80px] rounded-t-lg rounded-bl-lg">
                    {messages[currentMessage]}
                </div>
            )}
        </div>
    );
}
