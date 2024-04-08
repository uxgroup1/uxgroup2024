import Image from "next/image";
import style from "./style.module.scss";
import imageUxPartners from "@/assets/logos/ux-partners.svg";

function UxPartners() {
  return (
    <>
      <section className={style.UxPartners}>
        <div className={style.Container}>
          <div className={style.BoxUxPartners}>
            <div className={style.UX_partners}>
              <Image
                className="lg:w-[400px] w-[300px]"
                src={imageUxPartners}
                alt=""
                width={0}
                height={0}
              />
            </div>
            <div className={style.Content}>
              <h1>UX Partners e Aceleradora de Startups.</h1>
              <p className="xl:text-center flex text-justify w-4/5">
                A UX entende que esse processo de transformação do e-commerce
                requer a união de todos os agentes envolvidos na missão de
                fornecer uma boa experiência de compra para o consumidor
                digital. Para isso, estimulamos parcerias com aqueles que
                acreditam nesse propósito e investimos em startups que nascem
                com o desafio de trazer inovação para o setor.
              </p>
              <button className="hover:font-semibold transition">
                fale com a gente
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UxPartners;
