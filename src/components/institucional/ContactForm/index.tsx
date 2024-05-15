import { contactFormData } from "@/interfaces/contactFormData";
import Script from "next/script";
import { useState } from "react";

export default function ContactForm({
  content,
  inputAlternative,
  page
}: contactFormData) {
  return (
    <>
      <Script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
      ></Script>
      <section id="formulario" className="bg-black pt-[100px] w-full ">
        <div className="w-full md:w-full text-white flex text-center items-center justify-center flex-col">
          <h1 className=" w-[90%] md:w-full text-center">
            Fale diretamente com o nosso time.
          </h1>
          <p className="w-4/5 md:w-full">
            Nos informe qual tipo de contato gostaria de fazer.
          </p>
        </div>
        <form id="contactFormTeste" className="max-w-md w-[90%] mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nome*
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail*
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefone*
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Empresa* (Ex. UX Group)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_cargo"
              id="floating_cargo"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_cargo"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cargo*
            </label>
          </div>
          {inputAlternative?.map((data) => {
            return (
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type={data.type}
                  name={data.name}
                  id={data.id}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder={data.placeholder}
                  required={data.required}
                />
                <label
                  htmlFor="floating_cargo"
                  className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {data.text}
                </label>
              </div>
            );
          })}
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="underline_select" className="sr-only text-white">
              Underline select
            </label>
            <select
              defaultValue={"0"}
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              {content.map((data, index) => {
                return (
                  <option key={index} value={data.value} className="text-white">
                    {data.value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_message"
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mensagem
              </label>
            </div>
            <input type="hidden" id="referência" name="referência" value={page} />
            <div className="flex items-center pb-10">
              <input
                id="disabled-checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="disabled-checked-checkbox"
                className="ms-2 text-sm font-medium text-[#bfbfbf] focus:text-white"
              >
                Eu concordo em receber comunicações.*
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white md:w-full hover:font-semibold w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"
          >
            enviar contato
          </button>
        </form>
      </section>
    </>
  );
}
// {
//   /* <option
//                 className="text-white"
//                 value="Quero conhecer todo o ecossistema UX."
//               >
//                 Quero conhecer todo o ecossistema UX.
//               </option>
//               <option value="Quero conhecer as tecnologias para operação.">
//                 Quero conhecer as tecnologias para operação.
//               </option>
//               <option value="Quero conhecer os serviços logísticos.">
//                 Quero conhecer os serviços logísticos.
//               </option>
//               <option value="Quero que meu negócio seja parte do ecossistema.">
//                 Quero que meu negócio seja parte do ecossistema.
//               </option>
//               <option value="Quero trabalhar na UX.">
//                 Quero trabalhar na UX.
//               </option> */
//               <option value={"0"} className="text-white">
//                 Qual assunto gostaria de falar?*
//               </option>
// }
