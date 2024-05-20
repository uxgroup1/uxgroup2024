import { useClientData } from "@/hooks/clientData";
import { contactFormData } from "@/interfaces/contactFormData";
import { QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function ContactForm({
  content,
  inputAlternative,
  page,
  nameForm,
}: contactFormData) {
  const [formData, setFormData] = useState({
    floating_first_name: "",
    floating_email: "",
    floating_phone: "",
    floating_company: "",
    floating_cargo: "",
    underline_select: "",
    floating_message: "",
    cf_terms: false,
    conversion_identifier: nameForm,
    page_name: page,
  });


  console.log(formData);
  

  const { mutate, isPending, isSuccess } = useClientData();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      // Reset form data after successful submission, if needed
      setFormData({
        floating_first_name: "",
        floating_email: "",
        floating_phone: "",
        floating_company: "",
        floating_cargo: "",
        underline_select: "",
        floating_message: "",
        cf_terms: false,
        conversion_identifier: nameForm,
        page_name: page,
      });
    }
  }, [isSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(formData);
  };
  return (
    <>
      <Script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
      ></Script>
      <section id="formulario" className="bg-black pt-[100px] w-full">
        <div className="w-full md:w-full text-white flex text-center items-center justify-center flex-col">
          <h1 className="w-[90%] md:w-full text-center">
            Fale diretamente com o nosso time.
          </h1>
          <p className="w-4/5 md:w-full">
            Nos informe qual tipo de contato gostaria de fazer.
          </p>
        </div>
        <form
          id={nameForm}
          name={nameForm}
          className="max-w-md w-[90%] mx-auto"
          onSubmit={handleSubmit}
        >
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
            <input
              type="text"
              name="floating_cargo"
              id="floating_cargo"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              value={formData.floating_cargo}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_cargo"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cargo*
            </label>
          </div>
          {inputAlternative?.map((data) => (
            <div key={data.id} className="relative z-0 w-full mb-5 group">
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
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="underline_select" className="sr-only text-white">
              Underline select
            </label>
            <select
              name="underline_select"
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={formData.underline_select}
              onChange={handleChange}
              required
            >
              <option value="0" className="text-white">
                Qual assunto gostaria de falar?*
              </option>
              {content.map((data, index) => (
                <option key={index} value={data.value} className="text-white">
                  {data.value}
                </option>
              ))}
            </select>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_message"
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                value={formData.floating_message}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mensagem
              </label>
            </div>
            <input
              type="hidden"
              id="referencia"
              name="referencia"
              value={page}
            />
            <div className="flex items-center pb-10">
              <input
                id="cf_terms"
                name="cf_terms"
                type="checkbox"
                checked={formData.cf_terms}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="cf_terms"
                className="ms-2 text-sm font-medium text-[#bfbfbf] focus:text-white"
              >
                Eu concordo em receber comunicações.*
              </label>
            </div>
          </div>

          {isSuccess && (
            <p className="text-white text-sm">
              Obrigado por entrar em contato conosco. Em breve, nossa equipe
              entrará em contato com você.
            </p>
          )}

          <button
            type="submit"
            className="text-white md:w-full hover:font-semibold w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            enviar contato
          </button>
        </form>
      </section>
    </>
  );
}
