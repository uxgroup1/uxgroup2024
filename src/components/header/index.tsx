"use client";

import { useEffect, useState } from "react";
import logoUx from "../../assets/ux-branco.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import ondetahBanner from "@/assets/ondetah/ondetah.png";
import truxBanner from "@/assets/trux/tms-transp.png";
import fusionBanner from "@/assets/fusion/fusionBanner.png";
import bannerFulfillment from "@/assets/logistica/ffBanner.png";
import bannerTorre from "@/assets/trux/torre.png";
import bannerPudos from "@/assets/pudo/pudoImages/banner-pudo.png";
import torreLogo from "@/assets/logoProdutosAnimados/torre-animado.gif";
import truxLogo from "@/assets/logoProdutosAnimados/trux-animado.gif";
import fusionLogo from "@/assets/logoProdutosAnimados/fusion-animado.gif";
import fulfillmetlogo from "@/assets/logoProdutosAnimados/fulfillment-animado.gif";
import ondetahLogo from "@/assets/logoProdutosAnimados/ondetah-animado.gif";
import pudoLogo from "@/assets/logoProdutosAnimados/pudo-animado.gif";
import vendasLogo from "@/assets/logos/logo-vendas.png"
import connectLogo from "@/assets/logos/logo-connect.png"
import Link from "next/link";
import Image from "next/image";
import PedidoOndetah from "../pedidoOndetah";

interface contentCard {
  index: number;
  text: string;
  banner: string;
  link: string;
  logo: string;
}

const contentGestao: contentCard[] = [
  {
    index: 0,
    text: "Gestão e comunicação com o cliente a partir do tracking.",
    banner: ondetahBanner.src,
    link: "/ondetah",
    logo: ondetahLogo.src,
  },
  {
    index: 1,
    text: "Gestão de fretes para e-commerce e marketplaces.",
    banner: fusionBanner.src,
    link: "/fusion",
    logo: fusionLogo.src,
  },
  {
    index: 2,
    text: "Gestão de motoristas e entregas para operações de transporte.",
    banner: truxBanner.src,
    link: "/trux",
    logo: truxLogo.src,
  },
];
const contentLog: contentCard[] = [
  {
    index: 0,
    text: "Controle, Armazenagem e Expedição eficiente.",
    banner: bannerFulfillment.src,
    link: "/fulfillment",
    logo: fulfillmetlogo.src,
  },
  {
    index: 1,
    text: "Torre de controle e gestão de transportes para operações de e-commerce.",
    banner: bannerTorre.src,
    link: "/torre",
    logo: torreLogo.src,
  },
  {
    index: 2,
    text: "Pontos de coleta e entrega para operações first e last mile.",
    banner: bannerPudos.src,
    link: "/pudos",
    logo: pudoLogo.src,
  },
];
const contentVendas: contentCard[] = [
  {
    index: 0,
    text: "Texto de Vendas",
    banner: "",
    link: "/vendas",
    logo: vendasLogo.src,
  },

];
const contentConnect: contentCard[] = [
  {
    index: 0,
    text: "Texto de Connect",
    banner: bannerFulfillment.src,
    link: "/connect",
    logo: connectLogo.src,
  },

];

export default function Header() {
  const [openMenuGestao, setOpenMenuGestao] = useState(false);
  const [openMenuLog, setOpenMenuLog] = useState(false);
  const [openMenuVendas, setOpenMenuVendas] = useState(false);
  const [openMenuConnect, setOpenMenuConnect] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [indexHover, setIndexHover] = useState(0);
  const [openModal, setOpenModal] = useState(true);


  const handleOpenClick = () => {
    setOpenMenu(!openMenu);
    setOpenMenuLog(false);
    setOpenMenuGestao(false);
    setOpenMenuConnect(false);
    setOpenMenuVendas(false);
    setOpenModal(true)
  };
  const handleOpenClickGestao = () => {
    setOpenMenuGestao(!openMenuGestao);
    setOpenMenuLog(false);
    // setOpenModal(false);
    setOpenMenuConnect(false);
    setOpenMenuVendas(false);
  };
  const handleOpenClickLog = () => {
    setOpenMenuLog(!openMenuLog);
    setOpenMenuGestao(false);
    // setOpenModal(!openMenuLog); 
    setOpenMenuConnect(false);
    setOpenMenuVendas(false);
  };
  
  // useEffect(() => {
  //   if(openMenuGestao || openMenuLog){
  //     setOpenModal(false);

  //   }else{
  //     setOpenModal(true);
  //   }
  // })

  return (
    <>
      <nav className="bg-black fixed flex items-center   justify-center z-50  top-0 w-full px-1 md:px-4 border-gray-200">
        <div className="flex items-center justify-center w-full max-w-[1996px] h-full">
          <div className="xl:w-[94%]  lg:w-[95%] w-[97%] flex items-center justify-center">
            <div className="flex w-full flex-wrap  justify-between items-center mx-auto  py-5">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  width={100}
                  height={100}
                  src={logoUx.src}
                  className="h-8 flex items-start justify-start"
                  alt="UX Group"
                />
              </Link>
              <button
                onClick={handleOpenClick}
                data-collapse-toggle="mega-menu-full-image"
                type="button"
                className="inline-flex items-center p-2 w-10 h-12 justify-center text-sm text-white rounded-lg md:hidden focus:font-bold  "
                aria-controls="mega-menu-full-image"
                aria-expanded={openMenu ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                id="mega-menu-full-image"
                className={`items-center justify-between ${openMenu ? "block" : "hidden"
                  } w-full pl-5 md:flex md:w-auto md:order-1`}
              >
                <ul className="flex md:items-center md:justify-center flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                  <li>
                    <Link
                      href="/"
                      className="flex md:hover:border-b md:border-b hover:transition-all  items-center cursor-pointer justify-between w-20 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      onClick={handleOpenClickGestao}
                      id="mega-menu-full-cta-image-button"
                      data-collapse-toggle="mega-menu-full-image-dropdown"
                      className="flex hover:transition-all  items-center hover:font-normal cursor-pointer justify-between  bg-transparent font-normal py-2 w-20  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                    >
                      Gestão
                      <MdKeyboardArrowDown
                        className={`${openMenuGestao === true
                          ? "rotate-180 transition ease-in-out"
                          : ""
                          } text-xl`}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      onClick={handleOpenClickLog}
                      className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                      aria-current="page"
                    >
                      Logística
                      <MdKeyboardArrowDown
                        className={`${openMenuLog === true
                          ? "rotate-180 transition ease-in-out"
                          : ""
                          } text-xl`}
                      />
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href={""}
                      onClick={handleOpenClickVendas}
                      className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                      aria-current="page"
                    >
                      Vendas
                      <MdKeyboardArrowDown
                        className={`${openMenuVendas === true
                          ? "rotate-180 transition ease-in-out"
                          : ""
                          } text-xl`}
                      />
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href={""}
                      onClick={handleOpenClickConnect}
                      className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                      aria-current="page"
                    >
                      Connect
                      <MdKeyboardArrowDown
                        className={`${openMenuConnect === true
                          ? "rotate-180 transition ease-in-out"
                          : ""
                          } text-xl`}
                      />
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      target="_blank"
                      href={"https://esg.uxgroup.com.br/"}
                      className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                      aria-current="page"
                    >
                      ESG
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={"https://blog.uxgroup.com.br/"}
                      className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                      aria-current="page"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className={`  $ w-full lg:w-[200px]`}>

                    {openModal && (
                      <PedidoOndetah />
                    )}


                  </li>
                  {/* <li className="w-full md:w-[200px]">
                    <PedidoOndetah />
                  </li> */}
                </ul>
              </div>
            </div>
            {openMenuLog && (
              <div
                id="mega-menu-full-image-dropdown"
                className={`mt-1 bg-black flex items-center justify-center absolute w-full xl:pl-5  pl-0 top-[95%] md:top-16 left-0 border-t-white transition-transform animated-state-header`}
              >
                <div className=" flex items-center justify-center w-full py-5 text-sm max-w-[1996px]">
                  <div className="grid bg-black xl:w-[93%] lg:w-[90%] w-[90%] md:grid-cols-2 md:px-0">
                    <div className="md:[display:none] pt-5 border-t border-t-white flex w-full items-center justify-center gap-3">
                      <h1 className="text-white">Logística</h1>
                    </div>

                    <ul className="mb-4 space-y-4 md:mb-0">
                      <li
                        onMouseOver={() => setIndexHover(0)}
                        className="w-4/5 py-1 transition hover:border-b-[0.5px] hover:border-white"
                      >
                        <Link
                          href="/fulfillment"
                          className="font-normal text-white text-lg "
                        >
                          Fulfillment
                        </Link>
                      </li>
                      <li
                        onMouseOver={() => setIndexHover(1)}
                        className="w-4/5 py-1  pb-1 transition hover:border-b-[0.5px] hover:border-white"
                      >
                        <Link
                          href="/torre"
                          className="font-normal text-white text-lg "
                        >
                          Torre de controle
                        </Link>
                      </li>
                      <li
                        onMouseOver={() => setIndexHover(2)}
                        className="w-4/5 py-1  pb-1 transition hover:border-b-[0.5px] hover:border-white"
                      >
                        <Link
                          href="/pudos"
                          className="font-normal text-white text-lg "
                        >
                          Pudos
                        </Link>
                      </li>
                    </ul>
                    <div
                      className=" bg-local bg-center bg-no-repeat bg-cover rounded-lg  hover:bg-blend-soft-light "
                      style={{
                        transition: "0.1s",
                        backgroundImage: `url(${contentLog[indexHover].banner})`,
                      }}
                    >
                      <div className={` w-full h-full bg-[#00000080] p-8`}>
                        <Image
                          src={contentLog[indexHover].logo}
                          width={100}
                          height={100}
                          className={`${indexHover === 1
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } h-16 w-auto flex items-start justify-start pb-5`}
                          alt="Gestão, Logística e Sustentabilidade"
                        />
                        <p
                          className={`max-w-3xl text-xl mb-5 font-semibold [letter-spacing:normal] ${indexHover === 1
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } animated-state-Banner leading-tight tracking-tight text-white`}
                        >
                          {contentLog[indexHover].text}
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center px-2.5 py-1.5 text-sm font-normal text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                        >
                          <Link href={contentLog[indexHover].link}>
                            conheça sua solução
                          </Link>

                          <svg
                            className="w-3 h-3 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* {openMenuVendas && (
              <div
                id="mega-menu-full-image-dropdown"
                className={`mt-1 bg-black flex items-center justify-center absolute w-full xl:pl-5  pl-0 top-[95%] md:top-16 left-0 border-t-white transition-transform animated-state-header`}
              >
                <div className=" flex items-center justify-center w-full py-5 text-sm max-w-[1996px]">
                  <div className="grid bg-black xl:w-[93%] lg:w-[90%] w-[90%] md:grid-cols-2 md:px-0">
                    <div className="md:[display:none] pt-5 border-t border-t-white flex w-full items-center justify-center gap-3">
                      <h1 className="text-white">Vendas</h1>
                    </div>

                    <ul className="mb-4 space-y-4 md:mb-0">
                      <li
                        onMouseOver={() => setIndexHover(0)}
                        className="w-4/5 py-1 transition hover:border-b-[0.5px] hover:border-white"
                      >
                        <Link
                          href="/vendas"
                          className="font-normal text-white text-lg "
                        >
                          Vendas
                        </Link>
                      </li>

                    </ul>
                    <div
                      className=" bg-local bg-center bg-no-repeat bg-cover rounded-lg  hover:bg-blend-soft-light "
                      style={{
                        transition: "0.1s",
                        backgroundImage: `url(${contentVendas[indexHover].banner})`,
                      }}
                    >
                      <div className={` w-full h-full bg-[#00000080] p-8`}>
                        <Image
                          src={contentVendas[indexHover].logo}
                          width={100}
                          height={100}
                          className={`${indexHover === 1
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } h-12 w-auto flex items-start justify-start pb-5`}
                          alt="Gestão, Logística e Sustentabilidade"
                        />
                        <p
                          className={`max-w-3xl text-xl mb-5 font-semibold [letter-spacing:normal] ${indexHover === 1
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } animated-state-Banner leading-tight tracking-tight text-white`}
                        >
                          {contentVendas[indexHover].text}
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center px-2.5 py-1.5 text-sm font-normal text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                        >
                          <Link href={contentVendas[indexHover].link}>
                            conheça sua solução
                          </Link>

                          <svg
                            className="w-3 h-3 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            {/* {openMenuConnect && (
              <div
                id="mega-menu-full-image-dropdown"
                className={`mt-1 bg-black flex items-center justify-center absolute w-full xl:pl-5  pl-0 top-[95%] md:top-16 left-0 border-t-white transition-transform animated-state-header`}
              >
                <div className=" flex items-center justify-center w-full py-5 text-sm max-w-[1996px]">
                  <div className="grid bg-black xl:w-[93%] lg:w-[90%] w-[90%] md:grid-cols-2 md:px-0">
                    <div className="md:[display:none] pt-5 border-t border-t-white flex w-full items-center justify-center gap-3">
                      <h1 className="text-white">Connect</h1>
                    </div>

                    <ul className="mb-4 space-y-4 md:mb-0">
                      <li
                        onMouseOver={() => setIndexHover(0)}
                        className="w-4/5 py-1 transition hover:border-b-[0.5px] hover:border-white"
                      >
                        <Link
                          href="/connect"
                          className="font-normal text-white text-lg "
                        >
                          Connect
                        </Link>
                      </li>

                    </ul>
                    <div
                      className=" bg-local bg-center bg-no-repeat bg-cover rounded-lg  hover:bg-blend-soft-light "
                      style={{
                        transition: "0.1s",
                        backgroundImage: `url(${contentConnect[indexHover].banner})`,
                      }}
                    >
                      <div className={` w-full h-full bg-[#00000080] p-8`}>
                        <Image
                          src={contentConnect[indexHover].logo}
                          width={100}
                          height={100}
                          className={`${indexHover === 1
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } h-16 w-auto flex items-start justify-start pb-5`}
                          alt="Gestão, Logística e Sustentabilidade"
                        />
                        <p
                          className={`max-w-3xl text-xl mb-5 font-semibold [letter-spacing:normal] ${indexHover === 1
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } animated-state-Banner leading-tight tracking-tight text-white`}
                        >
                          {contentConnect[indexHover].text}
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center px-2.5 py-1.5 text-sm font-normal text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                        >
                          <Link href={contentVendas[indexHover].link}>
                            conheça sua solução
                          </Link>

                          <svg
                            className="w-3 h-3 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            {openMenuGestao && (
              <div
                id="mega-menu-full-image-dropdown"
                className={`mt-1 bg-black flex items-center justify-center absolute w-full  top-[95%] md:top-16 left-0 border-t-white transition-transform animated-state-header`}
              >
                <div className=" flex items-center justify-center w-full py-5 xl:pl-5  pl-0 text-sm max-w-[1996px]">
                  <div className="grid bg-black xl:w-[93%] lg:w-[90%] w-[90%] md:grid-cols-2 md:px-0">
                    <div className="md:[display:none] pt-5 border-t border-t-white flex w-full items-center justify-center gap-3">
                      <h1 className="text-white">Gestão</h1>
                    </div>
                    <ul className="mb-4 space-y-4 md:mb-0">
                      <li
                        onMouseOver={() => setIndexHover(1)}
                        className={`w-4/5 py-1  pb-1 transition hover:border-b-[0.5px] hover:border-white`}
                      >
                        <Link
                          href="/fusion"
                          className="font-normal text-white text-lg"
                        >
                          TMS para Embarcadores
                        </Link>
                      </li>
                      <li
                        onMouseOver={() => setIndexHover(0)}
                        className={`w-4/5 py-1  pb-1 transition hover:border-b-[0.5px] hover:border-white`}
                      >
                        <Link
                          href="/ondetah"
                          className="font-normal text-white text-lg"
                        >
                          Experiência do Cliente
                        </Link>
                      </li>
                      <li
                        onMouseOver={() => setIndexHover(2)}
                        className={`w-4/5 py-1  pb-1 transition hover:border-b-[0.5px] hover:border-white`}
                      >
                        <Link
                          href="/trux"
                          className="font-normal text-white text-lg"
                        >
                          TMS para Transportadores
                        </Link>
                      </li>
                    </ul>
                    <div
                      className={` bg-local bg-center bg-no-repeat bg-cover  rounded-lg  hover:bg-blend-soft-light `}
                      style={{
                        transition: "0.1s",
                        backgroundImage: `url(${contentGestao[indexHover].banner})`,
                      }}
                    >
                      <div className="w-full h-full bg-[#00000080] p-8">
                        <Image
                          src={contentGestao[indexHover].logo}
                          width={10}
                          height={10}
                          className={`${indexHover === 0
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } h-16 w-auto flex items-start justify-start pb-5`}
                          alt="Gestão, Logística e Sustentabilidade"
                        />
                        <p
                          className={`max-w-2xl text-xl mb-5 font-semibold [letter-spacing:normal] ${indexHover === 0
                            ? "animated-state-BannerTwo "
                            : "animated-state-BannerHeader"
                            } animated-state-Banner leading-tight tracking-tight text-white`}
                        >
                          {contentGestao[indexHover]?.text}
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center px-2.5 py-1.5 text-sm font-normal text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                        >
                          <Link href={contentGestao[indexHover].link}>
                            conheça sua solução
                          </Link>

                          <svg
                            className="w-3 h-3 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}


{/* <Link
                  target="_blank"
                  className={style.category}
                  href={p._embedded["wp:term"][0][0].link}
                  style={{ zIndex: 1 }}
                >
                  {p._embedded["wp:term"][0][0].name}
                  {p._embedded["wp:term"][0][0].name}
                </Link>
                <Link
                  target="_blank"
                  href={p.link}
                  style={{
                    display: "block",
                    width: "234px",
                    height: "203px",
                    position: "relative",
                  }}
                ></Link> */}