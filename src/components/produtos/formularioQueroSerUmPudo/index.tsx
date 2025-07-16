import { IoCloseCircleOutline } from "react-icons/io5";
import { HiOutlineUserAdd } from "react-icons/hi";
import React, { useState } from "react";
import { LuStore } from "react-icons/lu";
import { TfiClip } from "react-icons/tfi";
import emailjs from "@emailjs/browser";

type Props = {
    onClose: () => void;
};

export default function FormularioQueroSerUmPudo({ onClose }: Props) {
    const [formData, setFormData] = useState({
        floating_first_name: "",
        floating_email: "",
        floating_phone: "",
        floating_cnpj: "",
        floating_razaoSocial: "",
        floating_nomeFantasia: "",
        floating_cep: "",
        floating_endereco: "",
        floating_numero: "",
        floating_complemento: "",
        floating_bairro: "",
        floating_cidade: "",
        floating_estado: "",
        conversion_identifier: "",
        page_name: "PUDO",
    });

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCepBlur = async () => {
        const cep = formData.floating_cep.replace(/\D/g, "");
        if (cep.length !== 8) return;

        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await res.json();
            if (!data.erro) {
                setFormData((prev) => ({
                    ...prev,
                    floating_endereco: data.logradouro || "",
                    floating_bairro: data.bairro || "",
                    floating_cidade: data.localidade || "",
                    floating_estado: data.uf || "",
                }));
            } else {
                console.log("CEP inválido.");
            }
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (uploadedFiles.length === 5) {
            alert("Só é possível enviar 5 arquivos ou imagens.")
            return;
        }

        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    // Vamos usar React.useRef para capturar o form
    const formRef = React.useRef<HTMLFormElement>(null);

    const sendEmail = () => {
        if (!formRef.current) return;

        debugger

        // Substitua os valores abaixo pelos seus dados do EmailJS
        const serviceID = "service_g5abkym";
        const templateID = "template_zbfv62j";
        const publicKey = "HCRbP_WY4XzmI-Cw_";

        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(
                (result) => {
                    alert("Formulário enviado com sucesso!");
                    // Limpar formulário e arquivos
                    setFormData({
                        floating_first_name: "",
                        floating_email: "",
                        floating_phone: "",
                        floating_cnpj: "",
                        floating_razaoSocial: "",
                        floating_nomeFantasia: "",
                        floating_cep: "",
                        floating_endereco: "",
                        floating_numero: "",
                        floating_complemento: "",
                        floating_bairro: "",
                        floating_cidade: "",
                        floating_estado: "",
                        conversion_identifier: "",
                        page_name: "PUDO",
                    });
                    setUploadedFiles([]);
                    if (formRef.current) formRef.current.reset();
                },
                (error) => {
                    alert("Erro ao enviar formulário: " + error.text);
                }
            );
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (uploadedFiles.length !== 5) {
            alert("Por favor, envie exatamente os 5 documentos solicitados.");
            return;
        }

        try {
            // Limpa hidden inputs anteriores
            if (formRef.current) {
                const formElements = Array.from(formRef.current.elements).filter(el =>
                    el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement
                ).map(el => ({
                    name: el.name,
                    value: (el as HTMLInputElement).value,
                }));

                console.log("Campos do form para envio:", formElements);
            }

            // Upload arquivos para ImgBB e cria hidden inputs com URLs
            const imageUrls = await Promise.all(uploadedFiles.map(uploadToImgBB));

            imageUrls.forEach((url, index) => {
                const hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.name = `image_url_${index + 1}`;
                hiddenInput.value = url;
                formRef.current?.appendChild(hiddenInput);
            });

            // Adiciona data/hora do envio
            const timeInput = document.createElement("input");
            timeInput.type = "hidden";
            timeInput.name = "current_time";
            timeInput.value = new Date().toLocaleString();
            formRef.current?.appendChild(timeInput);

            // Remove input de arquivos para não enviar o arquivo bruto
            const fileInput = formRef.current?.querySelector("#uploadDocs");
            if (fileInput) fileInput.remove();

            // Envia o email
            sendEmail();
        } catch (error) {
            console.error("Erro ao enviar arquivos:", error);
            alert("Erro ao enviar os arquivos. Tente novamente.");
        }
    };

    const handleRemoveFile = (indexToRemove: number) => {
        setUploadedFiles((prevFiles) =>
            prevFiles.filter((_, index) => index !== indexToRemove)
        );
    };



    const toBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const uploadToImgBB = async (file: File): Promise<string> => {
        const apiKey = "317ee204d1add01b0ed40b6a454a437b";
        const base64 = await toBase64(file);
        const formData = new FormData();
        formData.append("image", base64.split(",")[1]);

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (data.success) {
            return data.data.url;
        } else {
            throw new Error("Erro ao enviar imagem para o ImgBB.");
        }
    };

    return (
        <div className="w-full h-full overflow-hidden top-0 z-50 left-0 fixed bg-[#b7b7b771]">
            <div className="lg:w-1/2 w-full flex-col h-full">
                <div className="h-full overflow-auto w-full flex-col bg-black p-10 text-white">
                    <div className="w-full flex justify-end h-auto ">
                        <IoCloseCircleOutline
                            onClick={onClose}
                            className="text-white hover:scale-110 transition flex cursor-pointer"
                            fontSize={25}
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-1">Quero ser um PUDO:</h1>
                    <p className="font-medium text-base">
                        Transforme seu espaço em um ponto de retirada!
                    </p>
                    <p className="text-base mb-10">
                        Seja um PUDO da UX e gere renda extra com o espaço que você já tem.
                    </p>

                    <form ref={formRef} onSubmit={handleFormSubmit}>
                        {/* INFORMAÇÕES PESSOAIS */}
                        <h2 className="flex text-lg gap-2 mb-3 items-center">
                            <HiOutlineUserAdd /> Informações Pessoais:
                        </h2>
                        <div className="w-full gap-5 flex lg:flex-row flex-col">
                            {[
                                { name: "floating_first_name", label: "Nome*", type: "text" },
                                { name: "floating_email", label: "E-mail de contato*", type: "email" },
                                { name: "floating_phone", label: "Telefone de contato com DDD*", type: "tel" },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className="relative z-0 lg:w-1/3 w-full mb-5 group"
                                >
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        id={field.name}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-white peer"
                                        placeholder=" "
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className="absolute text-sm text-[#bfbfbf] duration-300 transform scale-75 top-3 -z-10 origin-[0]
                                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white
                                                peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-white"
                                    >
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <span className="w-full my-14 flex h-[0.5px] bg-[#B7b7b766]"></span>

                        {/* INFORMAÇÕES DA EMPRESA */}
                        <h2 className="flex text-lg gap-2 mb-3 items-center">
                            <LuStore /> Informações da Empresa:
                        </h2>
                        <div className="w-full gap-5 flex lg:flex-row flex-col">
                            {[
                                { name: "floating_cnpj", label: "CNPJ*", type: "text" },
                                { name: "floating_razaoSocial", label: "Razão Social*", type: "text" },
                                { name: "floating_nomeFantasia", label: "Nome Fantasia*", type: "text" },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className="relative z-0 lg:w-1/3 w-full mb-5 group"
                                >
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        id={field.name}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-white peer"
                                        placeholder=" "
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className="absolute text-sm text-[#bfbfbf] duration-300 transform scale-75 top-3 -z-10 origin-[0]
                                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white
                                                peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-white"
                                    >
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="w-full gap-5 flex lg:flex-row flex-col">
                            <div className="relative z-0 lg:w-1/3 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_cep"
                                    id="floating_cep"
                                    onBlur={handleCepBlur}
                                    value={formData.floating_cep}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_cep"
                                    className="absolute text-sm text-[#bfbfbf] duration-300 transform scale-75 top-3 -z-10 origin-[0]
                                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white
                                                peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-white"
                                >
                                    CEP*
                                </label>
                            </div>
                            <div className="relative z-0 lg:w-2/3 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_endereco"
                                    id="floating_endereco"
                                    value={formData.floating_endereco}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    readOnly
                                    required
                                />
                                <label
                                    htmlFor="floating_endereco"
                                    className={`absolute text-sm duration-300 transform ${formData.floating_endereco
                                        ? "scale-75 -translate-y-6 text-white"
                                        : "scale-100 translate-y-0 text-[#bfbfbf]"
                                        } top-3 -z-10 origin-[0]
                                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white`}
                                >
                                    Endereço*
                                </label>
                            </div>
                        </div>

                        <div className="w-full gap-5 flex lg:flex-row flex-col">
                            {[
                                { name: "floating_numero", label: "Número*", type: "text" },
                                { name: "floating_complemento", label: "Complemento", type: "text" },
                                { name: "floating_bairro", label: "Bairro*", type: "text", readOnly: true },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className="relative z-0 lg:w-1/3 w-full mb-5 group"
                                >
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        id={field.name}
                                        readOnly={field.readOnly || false}
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-white peer"
                                        placeholder=" "
                                        required={field.name !== "floating_complemento"}
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className={`absolute text-sm duration-300 transform ${formData[field.name as keyof typeof formData]
                                            ? "scale-75 -translate-y-6 text-white"
                                            : "scale-100 translate-y-0 text-[#bfbfbf]"
                                            } top-3 -z-10 origin-[0]
                                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white`}
                                    >
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="w-full gap-5 flex lg:flex-row flex-col">
                            {[
                                { name: "floating_cidade", label: "Cidade*", type: "text", readOnly: true },
                                { name: "floating_estado", label: "Estado*", type: "text", readOnly: true },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className="relative z-0 lg:w-1/2 w-full mb-5 group"
                                >
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        id={field.name}
                                        readOnly={field.readOnly || false}
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-white peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className={`absolute text-sm duration-300 transform ${formData[field.name as keyof typeof formData]
                                            ? "scale-75 -translate-y-6 text-white"
                                            : "scale-100 translate-y-0 text-[#bfbfbf]"
                                            } top-3 -z-10 origin-[0]
                                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white`}
                                    >
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <span className="w-full my-14 flex h-[0.5px] bg-[#B7b7b766]"></span>

                        <h2 className="flex text-lg gap-2 mb-3 items-center">
                            <TfiClip /> Documentação da Empresa:
                        </h2>
                        <p className="text-base">
                            Faça o upload dos arquivos listados abaixo e certifique-se de que
                            cada um esteja nomeado de forma clara antes do envio.
                        </p>
                        <div className="w-full border border-dashed border-[#bfbfbf] rounded-lg flex flex-col items-center justify-center p-10 text-center text-white mb-8">
                            <div className="text-white w-full flex-col text-left justify-start text-sm mb-4">
                                <p className="mb-2">
                                    1. Foto da fachada do local —{" "}
                                    <span className="text-gray-400">ex: fachada_loja.jpg</span>
                                </p>
                                <p className="mb-2">
                                    2. Foto do espaço interno onde os volumes ficarão armazenados —
                                    <span className="text-gray-400">ex: espaco_interno.jpg</span>
                                </p>
                                <p className="mb-2">
                                    3. Cópia do comprovante de endereço —{" "}
                                    <span className="text-gray-400">ex: comprovante_endereco.pdf</span>
                                </p>
                                <p className="mb-2">
                                    4. Cópia do contrato social (ou MEI) —{" "}
                                    <span className="text-gray-400">ex: contrato_social.pdf</span>
                                </p>
                                <p className="mb-4">
                                    5. Cópia do documento do responsável legal —{" "}
                                    <span className="text-gray-400">ex: documento_responsavel.pdf</span>
                                </p>
                            </div>
                            <div className="w-full flex flex-wrap gap-5 mb-10">
                                {uploadedFiles.map((file, index) => (
                                    <div key={index} className="flex justify-between items-center w-2/5 gap-2 bg-[#FFFFFF33] text-white px-3 py-2 rounded">
                                        <span>{file.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFile(index)}
                                            className="text-red-400 hover:text-red-600"
                                        >
                                            <IoCloseCircleOutline size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {uploadedFiles.length < 5 && (
                                <div className="w-full">
                                    <label
                                        htmlFor="uploadDocs"
                                        className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 hover:border-white transition"
                                    >
                                        <svg
                                            className="w-10 h-10 mb-2 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                        Clique para selecionar os arquivos
                                        <input
                                            id="uploadDocs"
                                            type="file"
                                            multiple
                                            accept=".jpg,.jpeg,.png,.pdf"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            name="documentos" // Nome do input que o emailjs vai pegar
                                            required
                                        />
                                    </label>
                                </div>
                            )}

                        </div>

                        <button
                            type="submit"
                            className=" bg-[#FF7F13] rounded-lg w-full items-center text-white justify-center "
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
