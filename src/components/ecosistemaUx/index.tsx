import Image from "next/image";
import style from "./style.module.scss";
import ecoImage from "../../assets/ondetah/imagesSections/porqueUx.png";
import Link from "next/link";

interface Content {
  title: string;
  text: string;
  textTwo: string;
}

function EcoSistemaUx() {
  return (
    <>
      <section className={style.LogisticaSustentavel}>
        <div className={style.Container}>
          <div className={style.BoxLogisticaSustentavel}>
            <div className={style.Controller}>
              <div className={style.ContentText}>
                <div>
                  <h1>Por quê UX?</h1>
                </div>
                <p>
                  Nosso propósito é apoiar a evolução do mercado de e-commerce
                  através de tecnologias inovadoras e imprescindíveis para o
                  gestor de operações digitais.
                </p>
                <p>
                  Acreditamos que a excelência na experiência do cliente é
                  fundamental para o sucesso no mundo online e que há uma etapa
                  do processo capaz de diferenciar e transformar um negócio: a
                  logística.
                </p>
                <Link className="w-full h-12" href={"#contactForm"}>
                  <button className="hover:border md:w-[170px] h-12 w-full hover:font-semibold hover:border-black text-white bg-black hover:text-black hover:bg-white transition  hover:shadow-md">
                    saiba mais
                  </button>
                </Link>
              </div>
            </div>
            <div className={style.ContentImage}>
              <div className={style.BoxImage}>
                <Image
                  className="w-[900px] "
                  src={ecoImage}
                  width={100}
                  height={100}
                  alt="Ecosistema Sustentavel UX"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EcoSistemaUx;
