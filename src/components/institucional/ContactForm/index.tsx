export default function ContactForm() {
  return (
    <>
      <section className="bg-black pt-[60px] w-full ">
        <div className="w-full md:w-full text-white flex text-center items-center justify-center flex-col pb-10">
          <h1 className="w-full text-center">
            Saiba mais sobre nossas soluções.
          </h1>
          <p className="w-4/5 md:w-full">
            Nos informe qual tipo de contato gostaria de fazer.
          </p>
        </div>
        <form className="max-w-md w-[85%] mx-auto">
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
              Nome
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
              E-mail
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
              Empresa (Ex. UX Group)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cargo
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="underline_select" className="sr-only text-white">
              Underline select
            </label>
            <select
              defaultValue={"0"}
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value={"0"} className="text-white">
                De qual solução você gostaria de saber mais?
              </option>
              <option
                className="text-white"
                value="Logística - Armazenagem e gestão de estoque"
              >
                Logística - Armazenagem e gestão de estoque
              </option>
              <option value="Logística - Rede credenciada">
                Logística - Rede credenciada
              </option>
              <option value="Logística - Green Mile">
                Logística - Green Mile
              </option>
              <option value="Logística - Gestão de Transportes">
                Logística - Gestão de Transportes
              </option>
              <option value="Tecnologia - TMS Embarcador">
                Tecnologia - TMS Embarcador
              </option>
              <option value="Tecnologia - TMS Transportador">
                Tecnologia - TMS Transportador
              </option>
              <option value="Tecnologia - Live Tracking">
                Tecnologia - Live Tracking
              </option>
            </select>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mensagem
              </label>
            </div>
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
                Eu concordo em receber comunicações.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white md:w-full w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"
          >
            enviar contato
          </button>
        </form>
      </section>
    </>
  );
}
