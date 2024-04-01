import Link from "next/link";
import style from "./style.module.scss";
import motoEletrica from "@/assets/home/moto-eletrica.png";
import Image from "next/image";

function LogisticaSustentavel() {
  return (
    <>
      <section className={style.LogisticaSustentavel}>
        <div className={style.Container}>
          <div className={style.BoxLogisticaSustentavel}>
            <div className={style.Controller}>
              <div className={style.ContentText}>
                <div>
                  <h1>Logística Sustentável:</h1>
                  Redefina o seu compromisso com o futuro
                </div>
                <p>
                  Promova a sustentabilidade em cada pedido. Nossas soluções
                  abrangem desde o Green Mile com entregas de moto elétrica até
                  avançadas tecnologias pré e pós-venda com compensação de
                  carbono. Além do uso da tecnologia em todo o processo
                  logístico para redução do uso de papel na operação.
                </p>
                <p>
                  Faça parte da mudança: Conheça nossas soluções para uma
                  logística sustentável. <br />
                  <Link href={""} style={{ fontWeight: "bold" }}>
                    Juntos, Podemos Criar um Futuro Mais Verde.
                  </Link>
                </p>
                <button className="hover:border hover:border-black text-white bg-black hover:text-black hover:bg-white transition  hover:shadow-md">
                  saiba mais
                </button>
              </div>
            </div>
            <div className={style.ContentImage}>
              <div className={style.BoxImage}>
                <Image
                  className="w-full"
                  src={motoEletrica.src}
                  width={100}
                  height={100}
                  alt="Entrega Sustentavel"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogisticaSustentavel;
