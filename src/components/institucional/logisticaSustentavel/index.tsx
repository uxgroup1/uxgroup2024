import Link from "next/link";
import style from "./style.module.scss";
import motoEletrica from "@/assets/home/moto-eletrica.png";
import Image from "next/image";

function LogisticaSustentavel({ id }: any) {
  return (
    <>
      <section id={id} className={style.LogisticaSustentavel}>
        <div className={style.Container}>
          <div className={style.BoxLogisticaSustentavel}>
            <div className={style.Controller}>
              <div className={style.ContentText}>
                <div>
                  <h1>Logística Sustentável:</h1>
                  Redefina o seu compromisso com o futuro e promova a
                  sustentabilidade em cada pedido.
                </div>
                <p>
                  Nossas soluções abrangem desde o Green Mile com entregas
                  realizadas com motos elétricas até avançadas tecnologias pré e
                  pós-venda que calculam a emissão e geram a compensação de
                  carbono de cada venda.
                </p>
                <p>
                  Além disso, o uso da tecnologia em todo o processo logístico
                  permite não só a eficiência operacional como também a redução
                  do uso de papel nos CDs. <br />
                  <Link href={"/torre"} style={{ fontWeight: "bold" }}>
                    Faça parte da mudança: Juntos podemos criar um futuro mais
                    verde.
                  </Link>
                </p>
                <Link target="_blank" href={"/torre"} >
                <button className="hover:border hover:font-semibold hover:border-black text-white bg-black hover:text-black hover:bg-white transition  hover:shadow-md">
                  saiba mais
                </button>
                </Link>
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
