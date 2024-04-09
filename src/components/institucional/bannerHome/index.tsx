import Image from "next/image";
import ecoImage from "@/assets/home/ecossistema-ux-grande.png";
import ecoImageMob from "@/assets/home/ecossistema.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";

export default function BannerHome() {
  return (
    <>
      <section className="bg-white max-w-[1996px] pt-[30%] xl:pt-[03%] w-full  ">
        <div className="flex items-center justify-center flex-col">
          <div className="w-full transition-transform md:p-32 animated-state-Jumbotron flex items-center justify-center flex-col">
            <div className="flex items-center justify-center font-semibold w-48 p-3 mb-5 rounded-full border-2 border-black bg-white text-black">
              SOMOS UX
            </div>
            <h1 className="text-black w-[90%] text-3xl xl:text-6xl text-center xl:w-[63%]">
              Transformamos a experiência do cliente através da tecnologia.
            </h1>
            <div className="w-full py-5 flex-col md:flex-row flex justify-center items-center gap-5">
              <button
                className={`md:w-52 w-[90%] border text-xl h-12 rounded-lg hover:bg-gradient-to-r hover:from-[#29265B] hover:border-transparent hover:transition hover:text-white hover:font-semibold hover:to-[#009881] border-black`}
              >
                <Link href={"#gestao"}>Gestão</Link>
              </button>
              <button
                className={`md:w-52 w-[90%]  border text-xl h-12 rounded-lg hover:bg-gradient-to-r hover:from-[#FBC709] hover:border-transparent transition hover:text-white hover:font-semibold hover:to-[#FF7F13] border-black`}
              >
                <Link href={"#logistica"}>Logística</Link>
              </button>
              <button
                className={`md:w-52 w-[90%]  border text-xl h-12 rounded-lg hover:bg-gradient-to-r hover:from-[#7DAD58] hover:border-transparent transition hover:text-white hover:font-semibold hover:to-[#014C34] border-black`}
              >
                <Link href={"#sustentabilidade"}>Sustentabilidade</Link>
              </button>
            </div>
            {/* <p className="text-black py-5 w-4/5 text-center text-lg">
              Conheça nosso ecossistema de soluções para vendas digitais.
            </p> */}
          </div>

          <div className="flex w-[150%] justify-center transition-transform animated-state-Jumbotron-two mt-10">
            <Image
              id="imageContent"
              alt="Sustentabilidade"
              width={100}
              height={100}
              className="xl:w-full md:flex lg:flex xl:flex md:w-full lg:w-full [display:none] w-full"
              src={ecoImage.src}
            />
            <Image
              alt="Sustentabilidade"
              width={100}
              height={100}
              className="xl:w-full md:[display:none] lg:[display:none] xl:[display:none] md:w-full lg:w-full flex w-[100%]"
              src={ecoImageMob.src}
            />
          </div>
        </div>
      </section>
    </>
  );
}
