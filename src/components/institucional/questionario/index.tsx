import Image from "next/image";
import iconMessage from "@/assets/chat.svg";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ClientDataQuestionary } from "@/interfaces/questionarioCliente";
import { useClientDataQuestionary } from "@/hooks/clientQuestionario";
import axios from "axios";
import AnswersData from "@/interfaces/answers";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";

interface AnswerDataInterface {
    question: string;
    answer: string;
}

interface Fechar {
    fechar: () => {}
}

export default function Questionario({ fechar }: Fechar) {
    const initialClientData: ClientDataQuestionary = {
        name: "",
        phone: "",
        email: "",
        nameBusiness: ""
    };

    const [clientData, setClientData] = useState(initialClientData);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showNextQuestion, setShowNextQuestion] = useState(false);
    const [typedQuestion, setTypedQuestion] = useState("");
    const [inputText, setInputText] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [conversation, setConversation] = useState<{ type: string, text: string }[]>([{ type: "message", text: "" }]);
    const [messageFinal, setMessageFinal] = useState("");
    const [insucess, setInsucess] = useState(false);
    const { mutate, idEmpresa, isPending, isSuccess } = useClientDataQuestionary();
    console.log(messageFinal);

    const [answeredQuestionsCount, setAnsweredQuestionsCount] = useState(0);
    const [questionsOne, setQuestionsOne] = useState([
        {
            type: "name",
            question: "Olá, para começarmos a nos conhecer preciso que você informe seu nome.",
            answer: ""
        },
        {
            type: "outros",
            question: `Muito prazer, agora para mantermos o contato, poderia nos informar seu telefone com DDD, e-mail e também o nome do seu negocio usando virgula para separar cada informação? `,
            answer: ""
        },
    ]);

    const [resposta, setResposta] = useState<AnswerDataInterface[]>([]);
    const [respostasAPI, setRespostaAPI] = useState<AnswersData[]>([]);
    const [buttonAnswer, setButtonAnswer] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Função para validar e-mail
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Função para validar telefone
    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^\d{10,11}$/; // Ajuste conforme o formato esperado
        return phoneRegex.test(phone);
    };

    const getSolution = async (id: Number) => {
        const url = `https://backend-questionarioux.onrender.com/perguntas/${id}`;
        const response = await axios.get(url);
    };

    const getQuestions = async (startingPerguntaId: number) => {
        try {
            const response = await axios.get(`https://backend-questionarioux.onrender.com/respostas/${startingPerguntaId}`);

            if (!response.data.result || response.data.result[0] === "Não foi encontrado nenhum registro no banco de dados.") {
                setMessageFinal("aquii acabou");
                setShowNextQuestion(false);
                setInputText(false);
                setButtonAnswer(false);
                setTypedQuestion("");
            } else {
                const newQuestions = response.data.result.map((question: any) => ({
                    type: "dynamic",
                    question: question.pergunta,
                    answer: ""
                }));
                setRespostaAPI(response.data.result);
                setQuestionsOne((prevQuestions) => [...prevQuestions, ...newQuestions]);
                setShowNextQuestion(true);
                setInputText(false);
                setButtonAnswer(false);
            }
        } catch (error) {
            console.error("Erro ao buscar perguntas:", error);
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [conversation, showNextQuestion]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, type: string) => {
        if (e.key === "Enter") {
            nextQuestion(inputValue);
            setInputValue("");
        }
    };

    const postRespostaEmpresa = (idPergunta: number, resposta: string) => {
        const url = "https://backend-questionarioux.onrender.com/empresa-perguntas/";
        axios
            .post(url, {
                id_empresa: idEmpresa,
                id_pergunta: idPergunta,
                resposta_usuario: resposta,
            })
            .then((response) => {
                const proximaPerguntaId = response.data;
                nextQuestion(proximaPerguntaId);

                if (proximaPerguntaId) {
                    getSolution(proximaPerguntaId);
                    getQuestions(proximaPerguntaId);
                    setAnsweredQuestionsCount((count) => count + 1);
                } else {
                    setMessageFinal("acabou");
                }
            })
            .catch((err) => {
                console.log("Erro ao enviar resposta:", err);
            });
    };

    const handleButtonClick = (type: string) => {
        nextQuestion(inputValue);
    };

    const handleButtonClickAnswer = (value: string, idPergunta: number) => {
        const newConversation = [...conversation, { type: "answer", text: value }];
        setConversation(newConversation);
        postRespostaEmpresa(idPergunta, value);
    };

    const nextQuestion = (answer: string) => {
        if (answer.length > 0) {
            const updatedQuestions = [...questionsOne];
            updatedQuestions[currentQuestion].answer = answer;
            setQuestionsOne(updatedQuestions);

            const newConversation = [...conversation, { type: "answer", text: answer }];
            setConversation(newConversation);

            // Atualizar dados do cliente conforme necessário
            if (currentQuestion === 0) {
                setClientData((prev) => ({ ...prev, name: answer }));
            } else if (currentQuestion === 1) {
                const [phone, email, nameBusiness] = answer.split(",").map(info => info.trim());

                // Verificar se telefone, email e nome da empresa estão corretos
                if (!validatePhone(phone) || !validateEmail(email) || nameBusiness.length < 1) {
                    setInsucess(true);
                    console.log("Erro nas informações fornecidas.");

                    // Adicionar mensagem de erro e repetir a pergunta
                    setConversation((prev) => [
                        ...prev,
                        { type: "question", text: "Por favor, insira corretamente o telefone com DDD, e-mail e o nome da sua empresa separados por vírgula." }
                    ]);

                    // Não avançar para a próxima pergunta
                    setInputValue(""); // Limpar campo de entrada
                    setInputText(true); // Continuar mostrando o campo de entrada
                    return; // Sair da função sem mudar a pergunta
                } else {
                    // Dados válidos, atualiza o estado
                    setClientData((prev) => ({ ...prev, phone, email, nameBusiness }));
                }
            }

            // Avançar para a próxima pergunta
            if (currentQuestion === 0 || currentQuestion === 1) {
                setCurrentQuestion(currentQuestion + 1);
            }

            setShowNextQuestion(true);
            setInputText(false);
            setButtonAnswer(false);
            setInsucess(false);
        } else {
            currentQuestion >= 2 ? setInsucess(false) : setInsucess(true);
        }
    };


    useEffect(() => {
        if (insucess) {
            setTimeout(() => {
                setInsucess(false);
            }, 5000);
        }
    }, [insucess]);

    useEffect(() => {
        if (currentQuestion >= questionsOne.length) {
            mutate(clientData);
            console.log("Não há mais perguntas.");
            return;
        }

        if (showNextQuestion) {
            setTypedQuestion("");
            let question = questionsOne[currentQuestion].question;

            if (currentQuestion > 0) {
                question = questionsOne[questionsOne.length - 1].question;
            }

            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < question.length) {
                    setTypedQuestion((prev) => prev + question.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setConversation((prev) => [
                        ...prev,
                        { type: "question", text: question }
                    ]);
                    setShowNextQuestion(false);
                    setInputText(questionsOne[currentQuestion].type !== "dynamic");
                    setButtonAnswer(questionsOne[currentQuestion].type === "dynamic");
                }
            }, 10);

            return () => clearInterval(typingInterval);
        }
    }, [showNextQuestion, currentQuestion, questionsOne, clientData]);

    useEffect(() => {
        if (currentQuestion < questionsOne.length) {
            setShowNextQuestion(true);
            setInputText(false);
        } else if (currentQuestion === questionsOne.length) {
            getQuestions(1);
        }
    }, [currentQuestion, questionsOne.length]);



    return (
        <div className={`fixed flex items-center overflow-auto justify-center top-0 w-full h-full z-50 bg-[#0000008d] `}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="fixed flex lg:flex-row flex-col rounded-2xl bg-white w-[90%] h-[85%] lg:w-[1100px] lg:h-[750px]"
            >
                <div className="flex flex-col justify-between items-center lg:pb-5 lg:w-64 w-full h-auto lg:h-full bg-black  lg:rounded-s-2xl">
                    <div className="flex items-center justify-between lg:justify-start gap-4 px-4 lg:pl-4 bg-[#1E1E1E] rounded-t-2xl lg:rounded-tl-2xl w-full h-14">
                        <div className="flex items-center gap-2">
                            <Image className="w-7" src={iconMessage} alt="Icone branco do Questionario" width={100} height={100} />
                            <h1 className="text-white p-0 capitalize text-sm font-extralight">chat uX group</h1>
                        </div>
                        <IoCloseCircleOutline onClick={() => fechar()} className="lg:hidden text-white  flex" fontSize={25} />

                    </div>
                    <div className="w-full lg:flex hidden flex-col  items-start gap-2 px-5 justify-center">
                        <h1 className="text-white pb-0 text-sm font-normal">
                            Deseja sair?
                        </h1>
                        <button onClick={() => fechar()} className="border rounded-lg bg-transparent p-2 hover:bg-white hover:text-black transition-all text-base text-white w-full">sair</button>
                    </div>
                </div>
                <div style={{ paddingBottom: "50px" }} className=" p-4 lg:pl-10 px-5 lg:pr-10 rounded-l-2xl h-full flex overflow-auto flex-col justify-between gap-10 bg-white rounded-e-2xl w-full">
                    <div ref={scrollRef} className=" overflow-auto pb-10 flex flex-col h-full">
                        {conversation.map((entry, index) => (
                            <div
                                key={index}
                                className={`mt-2 flex justify-start  items-start max-w-[95%] font-medium ${entry.text.length === 0 ? "flex flex-col-reverse items-start text-black justify-start pb-0 text text-left" : "text-left"}  ${entry.type === "question" ? "text-left font-medium" : "text-left bg-[#ededed] pr-2 w-fit font-normal p-2 rounded-md"}`}
                            >
                                <p className="flex text-black pb-2 flex-col-reverse">{entry.text.length === 0 ? <span className="pb-0 text-base">Olá UX, tudo bem?</span> : ""}</p>
                                {entry.type === "question" ? <span className="flex text-black flex-col items-start py-5"> <span className="text-xs  text-black">UX Group:</span> {entry.text}</span> : <span className="flex text-wrap flex-col text-black items-start pr-1 p-0"> <span className="text-xs text-black">você:</span>  {entry.text}</span>}

                            </div>
                        ))}
                        {showNextQuestion && (
                            <div className="mt-2 w-full max-w-full text-black  text-start">
                                {typedQuestion}
                            </div>
                        )}
                    </div>
                    <div className={`flex h-2/5 items-center justify-end ${buttonAnswer === false && inputText === false ? "[display:none]" : "flex"}`}>
                        <p className="text-black">{buttonAnswer} {inputText}</p>
                        {buttonAnswer && (
                            <div className="w-full h-1/4 flex justify-center gap-2 items-end flex-col">
                                {respostasAPI?.map((data, index) => (
                                    <button
                                        key={index}
                                        className="flex items-center justify-center w-full hover:scale-95 transition-all text-[14px] bg-black rounded-lg p-8 h-fit lg:h-10 text-white"
                                        onClick={() => handleButtonClickAnswer(data.resposta, data.pergunta_id)}
                                    >
                                        {data.resposta}
                                    </button>
                                ))}
                            </div>
                        )}
                        {
                            messageFinal && (
                                <p>
                                    {messageFinal}
                                </p>
                            )
                        }
                        {inputText && (
                            <div className="w-full h-full flex justify-end items-end flex-col">
                                <input
                                    className="w-full align-text-top border-gray-400 bg-white text-black rounded-lg border h-14 pl-2"
                                    name=""
                                    id=""
                                    placeholder="Digite aqui..."
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyPress={(e) => handleKeyPress(e, questionsOne[currentQuestion].type)}
                                />
                                <button
                                    onClick={() => handleButtonClick(questionsOne[currentQuestion].type)}
                                    className="w-52 mt-2 hover:scale-95 h-10 bg-black text-white rounded-lg"
                                >
                                    Enviar
                                </button>
                            </div>
                        )}
                        {insucess && (
                            <motion.div
                                initial={{ left: -400, opacity: 0 }}
                                animate={{
                                    left: 100,
                                    opacity: 100,
                                    transition: { duration: 0.5 },
                                }}
                                id="toast-simple"
                                className="fixed bottom-[80%] left-20  flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow "
                                role="alert"
                            >
                                <FaWindowClose className="w-9 text-4xl text-[#CB1919] " />
                                <div className="ps-4 text-sm text-black font-normal">
                                    <h1 className="text-base ">Ocorreu um erro.</h1>
                                    Para prosseguir é preciso que preencha as informações.
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}