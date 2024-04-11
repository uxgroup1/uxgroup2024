import Image from "next/image";
import ecoImage from "@/assets/home/ecossistema-ux-grande.png";
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
            <p className="text-black pt-5 md:w-full w-4/5 text-center text-lg">
              Conheça nosso ecossistema de soluções para vendas digitais.
            </p>
            <div className="w-full py-5 flex-col md:flex-row flex justify-center items-center gap-5">
              <Link className="md:w-[200px] w-[80%]" href={"#gestao"}>
                <button
                  className={`md:w-52 w-full border text-xl h-12 rounded-lg bg-gradient-to-r from-[#29265B] hover:border-transparent hover:transition text-white hover:font-semibold to-[#009881]`}
                >
                  Gestão
                </button>
              </Link>
              <Link className="md:w-[200px] w-[80%]" href={"#logistica"}>
                <button
                  className={`md:w-52 w-full  border text-xl h-12 rounded-lg bg-gradient-to-r from-[#FBC709] hover:border-transparent transition text-white hover:font-semibold to-[#FF7F13] `}
                >
                  Logística
                </button>
              </Link>
              <Link className="md:w-[200px] w-[80%]" href={"#sustentabilidade"}>
                <button
                  className={`md:w-52 w-full  border text-xl h-12 rounded-lg bg-gradient-to-r from-[#7DAD58] border-transparent transition text-white hover:font-semibold to-[#014C34] `}
                >
                  Sustentabilidade
                </button>
              </Link>
            </div>
          </div>

          <div className="flex w-[150%] justify-center mt-10">
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
              src={ecoImage.src}
            />
          </div>
        </div>
      </section>
    </>
  );
}
