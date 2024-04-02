import Image from "next/image";
import logo from "@/assets/faviconBanner/ux.svg";
import logoHerchcovitch from "@/assets/home/imageClients/herchcovitch.png";
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

const images = [
  logoWhirpol,
  logoVia,
  logoVested,
  logoShopee,
  logoSalon,
  logoPetlove,
  logoMulti,
  logoLemon,
  logoKabum,
  logoDorel,
  logoDafiti,
  logoCurta,
  logoCarrefour,
  logoCargo,
];

export default function ClientsCases() {
  return (
    <section className="bg-white  flex items-center justify-center max-w-[1996px] w-full">
      <div className="w-[90%] lg:px-0  lg:py-0 pt-10 ">
        <div className="lg:flex gap-10 lg:flex-row-reverse lg:items-center">
          <div className="w-full space-y-12  ">
            <div className="lg:w-[65%]">
              <h1 className="text-black lg:w-[85%]">
                UX {"(user experience)"} para nós, também siginifica unique
                experience.
              </h1>
              <p className="text-black w-full lg:w-4/5">
                Ou seja, uma expêriencia única, pensada no cliente final, com
                soluções integradas entre tecnologia e operções que geram valor
                ao negócio.
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

        <div className=" flex w-full lg:flex-row flex-row items-center gap-5 pb-5  lg:flex  lg:pl-[0%] overflow-auto ">
          {images.map((image, index) => {
            return (
              <Image
                className="w-48 transition border-transparent rounded-2xl hover:border-2 hover:border-transparent hover:shadow-xl lg:p-2  text-black lg:w-[180px]"
                key={index}
                src={image.src}
                alt="Logo dos clientes UX"
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
