import { useClientData } from "@/hooks/clientData";
import { contactFormData } from "@/interfaces/contactFormData";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { ClientData } from "@/interfaces/clientData";

export default function ContactForm({
  content,
  inputAlternative,
  page,
  nameForm,
}: contactFormData) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    floating_first_name: "",
    floating_email: "",
    floating_phone: "",
    floating_company: "",
    floating_cargo: "",
    floating_segmento: "",
    floating_numeroFuncionarios: "",
    floating_querofalarSobre: "",
    floating_message: "",
    floating_terms: "",

    conversion_identifier: nameForm,
    page_name: page,
  });

  const { mutate, isPending, isSuccess } = useClientData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prevFormData) => {
        // checkbox dos termos: guarda string quando marcado (compatível com validação atual)
        if (name === "floating_terms") {
          return {
            ...prevFormData,
            [name]: checked ? value : "",
          };
        }

        // checkboxes múltiplos (Quero falar sobre)
        const current = prevFormData[name as keyof ClientData]
          ? String(prevFormData[name as keyof ClientData]).split(",")
          : [];
        const updated = checked
          ? [...current, value].filter((item, idx, self) => self.indexOf(item) === idx)
          : current.filter((item) => item !== value);

        return {
          ...prevFormData,
          [name as keyof ClientData]: updated.join(","),
        };
      });
    } else {
      setFormData({
        ...formData,
        [name as keyof ClientData]: value,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      setFormData({
        floating_first_name: "",
        floating_email: "",
        floating_phone: "",
        floating_company: "",
        floating_cargo: "",
        floating_numeroFuncionarios: "",
        floating_segmento: "",
        floating_querofalarSobre: "",
        floating_message: "",
        floating_terms: "",
        conversion_identifier: nameForm,
        page_name: page,
      });
    }
  }, [isSuccess, nameForm, page]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validações extras para evitar placeholders
    if (!formData.floating_terms) {
      alert("Você precisa aceitar os termos para enviar o formulário.");
      return;
    }
    if (formData.floating_querofalarSobre === "") {
      alert("Você precisa selecionar pelo menos um item no campo 'Quero falar sobre'.");
      return;
    }
    if (formData.floating_numeroFuncionarios === "0") {
      alert("Selecione o número de funcionários.");
      return;
    }
    if (formData.floating_segmento === "Segmento*") {
      alert("Selecione o segmento.");
      return;
    }
    if (formData.floating_cargo === "Cargo") {
      alert("Selecione o cargo.");
      return;
    }

    // trim nos principais campos antes de enviar
    const payload = {
      ...formData,
      floating_first_name: formData.floating_first_name.trim(),
      floating_email: formData.floating_email.trim(),
      floating_phone: formData.floating_phone.trim(),
      floating_company: formData.floating_company.trim(),
    };

    mutate(payload);
  };

  return (
    <section id="formulario" className="bg-black pt-[100px] w-full">
      <div className="w-full md:w-full text-white flex text-center items-center justify-center flex-col">
        <h1 className="w-[90%] md:w-full text-center">Fale diretamente com o nosso time.</h1>
        <p className="w-4/5 md:w-full">Nos informe qual tipo de contato gostaria de fazer.</p>
      </div>

      <form id={nameForm} name={nameForm} className="max-w-md w-[90%] mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            value={formData.floating_first_name}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nome*
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            value={formData.floating_email}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            E-mail*
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            value={formData.floating_phone}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Telefone*
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            value={formData.floating_company}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Empresa* (Ex. UX Group)
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="floating_numeroFuncionarios"
            id="floating_numeroFuncionarios"
            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={formData.floating_numeroFuncionarios}
            onChange={handleChange}
            required
          >
            <option value="0" className="text-white">Número de funcionários*</option>
            <option value="1 - 10" className="text-black ">1 - 10</option>
            <option value="11 - 50" className="text-black ">11 - 50</option>
            <option value="51 - 200" className="text-black ">51 - 200</option>
            <option value="201 - 500" className="text-black ">201 - 500</option>
            <option value="501 - 1.000" className="text-black ">501 - 1.000</option>
            <option value="1.001 - 5.000" className="text-black ">1.001 - 5.000</option>
            <option value="5.001 - 10.000" className="text-black ">5.001 - 10.000</option>
            <option value="Mais de 10.000" className="text-black ">Mais de 10.000</option>
          </select>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="floating_segmento"
            id="floating_segmento"
            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={formData.floating_segmento}
            onChange={handleChange}
            required
          >
            <option value="Segmento*" className="text-white">Segmento*</option>
            <option value="Comércio Varejista" className="text-black ">Comércio Varejista</option>
            <option value="Comércio Atacadista" className="text-black ">Comércio Atacadista</option>
            <option value="Transporte de cargas" className="text-black ">Transporte de cargas</option>
            <option value="Indústria" className="text-black ">Indústria</option>
            <option value="Serviços" className="text-black ">Serviços</option>
          </select>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="floating_cargo"
            id="floating_cargo"
            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={formData.floating_cargo}
            onChange={handleChange}
            required
          >
            <option value="Cargo" className="text-white">Cargo*</option>
            <option value="Proprietário/ Fundador" className="text-black ">Proprietário/ Fundador</option>
            <option value="C-Level/ Diretor" className="text-black ">C-Level/ Diretor</option>
            <option value="Gerente/Coordenador" className="text-black ">Gerente/Coordenador</option>
            <option value="Especialista" className="text-black ">Especialista</option>
            <option value="Analista" className="text-black ">Analista</option>
            <option value="Consultor Externo" className="text-black ">Consultor Externo</option>
            <option value="Outros" className="text-black ">Outros</option>
          </select>
        </div>

        {/* inputs alternativos */}
        {inputAlternative?.map((data, index) => (
          <div key={data.id + index} className="relative z-0 w-full mb-5 group">
            <input
              type={data.type}
              name={data.name}
              id={data.id}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder={data.placeholder}
              onChange={handleChange}
              required={data.required}
            />
            <label
              htmlFor={data.id}
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {data.text}
            </label>
          </div>
        ))}

        {/* Quero falar sobre - checkboxes com IDs únicos */}
        <div className="relative z-0 w-full mb-5 group">
          <label className="sr-only text-white" htmlFor="underline_select">Underline select</label>
          <div className="relative p-3 lg:p-5 border flex-col gap-2 z-0 w-full mb-5 group">
            <label className="text-sm text-[#bfbfbf]" htmlFor="title">Quero falar sobre*</label>
            <div className="pb-2">
              {content.map((data, index) => {
                const id = `floating_querofalarSobre_${index}`;
                return (
                  <React.Fragment key={data.value + index}>
                    <input
                      className="mr-2 mt-2"
                      type="checkbox"
                      id={id}
                      name="floating_querofalarSobre"
                      value={data.value}
                      onChange={handleChange}
                    />
                    <label className="text-white" htmlFor={id}>{data.value}</label>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <input type="hidden" id="referencia" name="referencia" value={page} />

        {/* Termos */}
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="flex items-center pb-10">
            <input
              id="floating_terms"
              name="floating_terms"
              type="checkbox"
              value="Eu concordo em receber comunicações."
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="floating_terms" className="ms-2 text-sm font-medium text-[#bfbfbf] focus:text-white">
              Eu concordo em receber comunicações.*
            </label>
          </div>
        </div>

        {showSuccess && (
          <motion.div
            initial={{ left: -400, opacity: 0 }}
            animate={{ left: 100, opacity: 100, transition: { duration: 0.5 } }}
            id="toast-simple"
            className="fixed bottom-[80%] left-20 flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
            role="alert"
          >
            <FaRegCheckCircle className="w-9 text-4xl text-[#009580]" />
            <div className="ps-4 text-sm text-black font-normal">
              <h1 className="text-base">Obrigado pelo contato.</h1>
              Em breve nosso time comercial entrará em contato com você.
            </div>
          </motion.div>
        )}

        <button
          type="submit"
          className={`text-white md:w-full hover:font-semibold w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ${
            (!formData.floating_terms || formData.floating_querofalarSobre === "" || isPending)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={!formData.floating_terms || formData.floating_querofalarSobre === "" || isPending}
        >
          {isPending ? "Enviando..." : "Enviar contato"}
        </button>
      </form>
    </section>
  );
}
