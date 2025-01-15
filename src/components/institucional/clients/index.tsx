import { useRef } from "react";
import Image from "next/image";
import logo from "@/assets/faviconBranco.svg";
import arrowLeft from "@/assets/cta/arrowLeft.svg";
import arrowRight from "@/assets/cta/arrowRigth.svg";
import logoWhirpol from "@/assets/home/imageClients/whirpool-8.png";
import logoVia from "@/assets/home/imageClients/Via-8.png";
import logoVested from "@/assets/home/imageClients/veste-8.png";
import logoShopee from "@/assets/home/imageClients/Shopee-8.png";
import logoSalon from "@/assets/home/imageClients/salon-8.png";
import logoPetlove from "@/assets/home/imageClients/Petlove-8.png";
import logoMulti from "@/assets/home/imageClients/multi-8.png";
import logoLemon from "@/assets/home/imageClients/lemon.png";
import logoKabum from "@/assets/home/imageClients/kabum-8.png";
import logoDorel from "@/assets/home/imageClients/dorel-8.png";
import logoDafiti from "@/assets/home/imageClients/dafiti-8.png";
import logoCurta from "@/assets/home/imageClients/curta-8.png";
import logoCarrefour from "@/assets/home/imageClients/Carrefour-8.png";
import logoCargo from "@/assets/home/imageClients/cargo-8.png";
import logoHer from "@/assets/home/imageClients/ah-8.png";
import logoGinger from "@/assets/home/imageClients/ginger-8.png";
import logoDuty from "@/assets/home/imageClients/duty-8.png";

const images = [
  logoWhirpol,
  logoVia,
  logoPetlove,
  logoShopee,
  logoCarrefour,
  logoDafiti,
  logoKabum,
  logoHer,
  logoSalon,
  logoCurta,
  logoVested,
  logoLemon,
  logoDuty,
  logoMulti,
  logoDorel,
];

export default function ClientsCases() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 1000,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white flex items-center justify-center max-w-[1996px] w-full">
      <div className="w-[90%] lg:px-0 lg:py-0 pt-10">
        <div className="lg:flex gap-10 lg:flex-row-reverse lg:items-center">
          <div className="w-full space-y-12">
            <div className="lg:w-[65%]">
              <h1 className="text-black lg:w-[85%]">
                UX {"(user experience),"} para nós, também significa unique
                experience.
              </h1>
              <p className="text-black w-full lg:w-4/5">
                Ou seja, uma experiência única, pensada no cliente final, com
                soluções personalizadas, que conectam tecnologias e operações.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center  lg:justify-start">
            <Image
              className="w-[100%]"
              alt=" Clintes UX"
              width={100}
              height={100}
              src={logo}
            />
          </div>
        </div>

        <hr className="lg:my-12 my-5 border-[#bfbfbf9b] border-1 " />

        <div className="w-full flex-row gap-4 pb-2 md:[display:flex] [display:none] justify-center md:justify-end">
          <div
            className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
            onClick={handleScrollLeft}
          >
            <Image src={arrowLeft} alt="Seta esquerda" width={40} height={40} />
          </div>
          <div
            className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
            onClick={handleScrollRight}
          >
            <Image src={arrowRight} alt="Seta direita" width={40} height={40} />
          </div>
        </div>

        <div
          className="flex w-full lg:flex-row flex-row items-center gap-5 pb-5 transition lg:flex  lg:pl-[0%] overflow-auto"
          ref={containerRef}
        >
          {images.map((image, index) => (
            <Image
              className="w-48 transition border-transparent rounded-2xl hover:border-2 hover:border-transparent hover:shadow-xl lg:p-2  text-black lg:w-[180px]"
              key={index}
              src={image.src}
              alt="Logo dos clientes UX"
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
