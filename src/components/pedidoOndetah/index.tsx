import { useState } from "react";
import bannerOndetah from "@/assets/modalOndetah/bannerModal.png";
import { IoClose } from "react-icons/io5";
import carrefour from "@/assets/logosOndetah/carrefour.png";
import whirpoll from "@/assets/logosOndetah/whirpoll.png";
import dafiti from "@/assets/logosOndetah/dafiti.png";
import curta from "@/assets/logosOndetah/curta.png";
import dorel from "@/assets/logosOndetah/dorel.png";
import scolados from "@/assets/logosOndetah/scolados.png";
import multi from "@/assets/logosOndetah/multimoveis.png";
import veste from "@/assets/logosOndetah/veste.png";
import acioly from "@/assets/logosOndetah/acciloly01.png";
import uxd from "@/assets/ux-branco.svg";
import Image from "next/image";
import Link from "next/link";

export default function PedidoOndetah() {
  const [modalOpen, setModalOpen] = useState(false);
  const [codigoPedido, setCodigoPedido] = useState("");
  const [codigoTransport, setCodigoTransport] = useState("");
  const [messageError, setMessageError] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [clicked, setClicked] = useState("");

  const handleSetLink = (codigoTransport: string, codigoPedido: string) => {
    let result: string;
    let boolean = false;
    if (codigoPedido === undefined || codigoPedido.length <= 5) {
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

  const handleCodigoTransport = (codigo: string) => {
    setCodigoTransport(codigo);
    setClicked(codigo);
  };

  const handleOpenClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const content = [
    { 
      index:0,
      image: carrefour.src,
      codigo: "CRF",
    },
    { 
      index:1,
      image: whirpoll.src,
      codigo: "WHP",
    },
    {
      index:2,
      image: dafiti.src,
      codigo: "DF",
    },
    {
      index:3,
      image: curta.src,
      codigo: "CTA",
    },
    {
      index:4,
      image: dorel.src,
      codigo: "DL",
    },
    {
      index:5,
      image: scolados.src,
      codigo: "scolados",
    },
    {
      index:6,
      image: multi.src,
      codigo: "mv",
    },
    {
      index:7,
      image: veste.src,
      codigo: "VESTE",
    },
    {
      index:8,
      image: acioly.src,
      codigo: "AGM",
    },
    {
      index:9,
      image: uxd.src,
      codigo: "uxd",
    },
  ];

  return (
    <>
      <button
        onClick={() => handleOpenClick()}
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        className="block w-[95%] md:mt-0 mt-3  text-white   bg-gradient-to-r to-[#009581] from-[#29265B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        localiar meu pedido
      </button>

      {modalOpen && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className={`absolute bg-[#00000093] flex items-center justify-center w-full left-0 h-[120vh] top-0`}
        >
          <div className="md:w-[700px] w-[400px] bg-white rounded-2xl h-[750px] md:h-[650px] md:mb-0  mb-[350px] transition-all">
            <div className="p-10 flex items-center w-full justify-center flex-col">
              <div className="flex items-center justify-center w-full flex-col">
                <div className="w-full flex justify-end items-end">
                  <IoClose
                    onClick={() => handleClose()}
                    className="text-black text-xl hover:text-[#ff0000] hover:bg-[#dedede] rounded-lg transition-all"
                  />
                </div>
                <h1 className="md:text-4xl md:pl-0 pl-2 leading-normal md:text-left flex justify-center items-center w-full text-[19px] text-[#29235c]">
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
                  <div className="w-full md:flex md:items-center md:justify-center gap-3 grid md:pt-2 pt-10 grid-cols-4 md:flex-wrap">
                    {content.map((content, index) => {
                      return (
                        <div
                          onClick={() => handleCodigoTransport(content.codigo)}
                          key={index}
                          className={`hover:shadow-md border-[1px] border-[#0000000f] transition-all rounded-lg ${clicked === content.codigo ? "border-1 shadow-xl rounded-md":""}  md:w-[100px] w-[70px]`}
                        >
                          <Image
                            className={` rounded-lg ${clicked === content.codigo ? "border-1 shadow-xl p-1 rounded-md":""} focus:p-4 transition-all`}
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
