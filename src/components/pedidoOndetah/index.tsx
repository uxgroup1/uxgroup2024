import { useState } from "react";
import { IoClose } from "react-icons/io5";
import carrefour from "@/assets/logosOndetah/carrefour.png";
import dafiti from "@/assets/logosOndetah/dafiti.png";
import curta from "@/assets/logosOndetah/curta.png";
import dorel from "@/assets/logosOndetah/dorel.png";
import acioly from "@/assets/logosOndetah/acciloly01.png";
import consul from "@/assets/logosOndetah/consul.png";
import brastemp from "@/assets/logosOndetah/brastemp.png";
import compraCerta from "@/assets/logosOndetah/compra-certa.png";
import kitchenaid from "@/assets/logosOndetah/kitchenaid.png";
import Image from "next/image";
import Link from "next/link";

export default function PedidoOndetah() {
  const [modalOpen, setModalOpen] = useState(false);
  const [codigoPedido, setCodigoPedido] = useState("");
  const [codigoTransport, setCodigoTransport] = useState("");
  const [messageError, setMessageError] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  console.log(codigoTransport);


  const [clicked, setClicked] = useState();

  const handleSetLink = (codigoTransport: string, codigoPedido: string) => {
    let result: string;
    let boolean = false;
    if (codigoPedido === undefined || codigoPedido.length <= 2) {
      result = "Por favor informe um número de pedido válido.";
      setMessageError(result);
    } else if (codigoTransport === undefined || codigoTransport === "") {
      result = "Por favor selecione um transportador.";
      setMessageError(result);
    } else {
      result = `https://cliente.ondetah.com.br/${codigoTransport}/${codigoPedido}`;
      boolean = true;
      setLinkUrl(result);
    }
    return {
      validate: boolean,
      message: result,
    };
  };

  const handleCodigoPedido = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigoPedido(event.target.value);
  };

  const handleCodigoTransport = (codigo: {codigo: string, index: any}) => {
    setCodigoTransport(codigo.codigo);
    setClicked(codigo.index);
  };

  const handleOpenClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const content = [
    {
      index: 0,
      image: carrefour.src,
      codigo: "CRF",
    },

    {
      index: 8,
      image: acioly.src,
      codigo: "AGM",
    },
    {
      index: 2,
      image: dafiti.src,
      codigo: "DF",
    },
    {
      index: 3,
      image: curta.src,
      codigo: "CTA",
    },
    {
      index: 4,
      image: dorel.src,
      codigo: "DL",
    },
    {
      index: 5,
      image: consul.src,
      codigo: "WHP",
    },
    {
      index: 6,
      image: brastemp.src,
      codigo: "WHP",
    },
    {
      index: 7,
      image: compraCerta.src,
      codigo: "WHP",
    },
    {
      index: 1,
      image: kitchenaid.src,
      codigo: "WHP",
    },

    // {
    //   index:9,
    //   image: uxd.src,
    //   codigo: "uxd",
    // },
  ];

  return (
    <>
      <button
        onClick={() => handleOpenClick()}
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        className="block w-[95%] md:mt-0 mt-3  text-black   bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Localizar meu pedido
      </button>

      {modalOpen && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          aria-hidden="true" style={{ zIndex: 100 }}
          className={`fixed bg-[#00000093] transition-all flex items-center justify-center w-full left-0 h-[120vh]  top-0`}
        >
          <div className="flex absolute md:top-1/4 top-10 items-center justify-center md:w-[700px]  w-[400px] bg-white rounded-2xl h-[700px] md:h-[650px] transition-all">
            <div className="p-10 flex items-center w-full justify-center flex-col">
              <div className="flex items-center justify-center w-full flex-col">
                <div className="w-full pb-10 flex justify-end items-end">
                  <IoClose
                    onClick={() => handleClose()}
                    className="text-black text-2xl hover:rotate-180 hover:text-[#ff0000] hover:bg-[#dedede] rounded-lg transition-all"
                  />
                </div>
                <h1 className="md:text-4xl md:pl-0 pl-[10px] leading-normal md:text-left flex justify-center items-center w-full text-[19px] text-[#29235c]">
                  Digite o código do seu pedido:
                </h1>
              </div>

              <form className="w-full flex items-center justify-center pt-0 md:pt-4">
                <div className="relative z-0 pt-5 w-[90%] mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gradi appearance-none border-[#0095815b]  focus:outline-none focus:ring-0 focus:border-[#009580] peer"
                    placeholder=""
                    required
                    value={codigoPedido}
                    onChange={(event) => handleCodigoPedido(event)} // Passando o evento para a função handleCodigoPedido
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-[#009580] duration-300 transform -translate-y-2 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#29265B]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
                  >
                    Código do Pedido:
                  </label>
                </div>
              </form>
              <div className="w-[90%] h-full">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h3 className="text-[#29235c]">
                    Selecione a loja onde realizou a compra:
                  </h3>
                  <div className="w-full md:flex md:items-center md:justify-center gap-3 grid md:pt-2 pt-3 grid-cols-4 md:flex-wrap">
                    {content.map((content, index) => {
                      return (
                        <div
                          onClick={() => handleCodigoTransport(content)}
                          key={index}
                          className={`hover:shadow-md hover:scale-90 transition border-[1px] border-[#0000000f]  rounded-lg ${clicked === content.index ? "border-1 shadow-xl rounded-md" : ""}  md:w-[100px] w-[70px]`}
                        >
                          <Image
                            className={` rounded-lg ${clicked === content.codigo ? "border-1 shadow-xl p-1 rounded-md" : ""} focus:p-4 transition-all`}
                            src={content.image}
                            quality={100}
                            priority
                            width={100}
                            height={100}
                            alt="Clientes ondetah"
                          />
                        </div>
                      );
                    })}
                  </div>
                  {messageError && (
                    <p className="text-red-500 md:text-lg text-sm pb-0 pt-4">
                      {messageError}
                    </p>
                  )}
                  <Link
                    className="w-full h-14 mt-5 hover:p-[1px] transition-all rounded-2xl"
                    onClick={(e) => {
                      const linkResult = handleSetLink(
                        codigoTransport,
                        codigoPedido
                      );
                      if (linkResult.validate === false) {
                        e.preventDefault();
                        setMessageError(linkResult.message);
                      } else {
                        setLinkUrl(linkResult.message);
                      }
                    }}
                    href={linkUrl}
                    target="_blank"
                  >
                    <button
                      type="submit"
                      className="w-full h-full hover:shadow-xl transition-all text-white rounded-lg bg-[#009580]"
                    >
                      localizar pedido
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
