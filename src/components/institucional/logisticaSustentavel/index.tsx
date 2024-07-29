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
                  Nossas soluções abrangem desde o Green Mile com entregas realizadas com motos elétricas,
                  ship from store e entregas agendadas feita por mulheres,  até avançadas tecnologias pré
                  e pós-venda que calculam a emissão e geram a compensação de carbono de cada venda e apps
                  para redução do uso do papel na operação
                </p>
                <p>
                  <Link href={"/torre"} style={{ fontWeight: "bold" }}>
                    Faça parte da mudança: Juntos podemos criar um futuro mais verde. 
                  </Link>
                </p>
                <Link className="w-full" target="_blank" href={"/torre"} >
                  <button className="md:w-[170px] w-full hover:border hover:font-semibold hover:border-[#7DB058] text-white bg-[#7DB058]   hover:shadow-md">
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
