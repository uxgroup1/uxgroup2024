import Image from "next/image";
import connect from "@/assets/connect.svg"
import Link from "next/link";
import connectBanner from "@/assets/cards/connectBannerCard.png"

function UxPartners() {
  return (
    <>
      <section className="bg-white lg:h-auto max-w-[1996px] lg:pt-[15%] pt-[0%] xl:pt-[03%] w-full  ">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-[90%] flex lg:flex-row flex-col h-full">
            <div style={{ backgroundImage: `url(${connectBanner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="lg:w-1/2 w-full shadow-md rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl bg-gray-400 h-[400px] lg:h-[500px]">

            </div>
            <div className="flex flex-col gap-5 lg:text-left text-center items-center lg:items-start p-12 lg:p-[60px] justify-center w-full lg:w-1/2 border lg:rounded-b-none rounded-b-2xl lg:rounded-r-2xl shadow-md">
              <Image className="w-72" src={connect} alt="" width={100} height={100} />
              <p className="lg:w-[95%] text-black">Na UX, acreditamos que para alcançar a transformação que o e-commerce exige em oferecer uma experiência de compra excepcional para o consumidor digital, precisamos criar conexões estratégicas que compartilhem do propósito de gerar valor ao cliente, promovendo uma sinergia que eleve os padrões de qualidade e eficiência através soluções integradas e inovadoras.</p>
              <button className="w-[200px] h-10 rounded-lg bg-black text-white hover:scale-95 transition"> <Link className="w-full h-full flex items-center justify-center" href={"#formulario"}>saiba mais</Link>  </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UxPartners;
