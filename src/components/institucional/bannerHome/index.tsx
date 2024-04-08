import Image from "next/image";
import ecoImage from "@/assets/home/ecossistema.png";

export default function BannerHome() {
  return (
    <>
      <section className="bg-white max-w-[1996px] pt-[30%] xl:pt-[06%] w-full  ">
        <div className="flex items-center justify-center flex-col">
          <div className="w-full transition-transform animated-state-Jumbotron flex items-center justify-center flex-col">
            <div className="flex items-center justify-center font-semibold w-48 p-3 mb-5 rounded-full border-2 border-black bg-white text-black">
                SOMOS UX
            </div>
            <h1 className="text-black w-[90%] text-3xl xl:text-5xl text-center xl:w-[60%]">
              Transformamos a experiência do cliente através da tecnologia para
              gestão, logística e sustentabilidade.
            </h1>
            <p className="text-black py-5 w-4/5 text-center text-lg">
              Conheça nosso ecossistema de soluções para vendas digitais.
            </p>
            <button className="h-12 w-48 leading-6 bg-black text-white rounded-lg">
              saiba mais
            </button>
          </div>

          <div className="flex w-full justify-center transition-transform animated-state-Jumbotron-two mt-10">
            <Image
            
            alt=""
            width={100}
            height={100}
              className="xl:w-[65%] w-full"
              src={ecoImage.src}     />
          </div>
        </div>
      </section>
    </>
  );
}
