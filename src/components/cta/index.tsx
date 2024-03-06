import { text } from "stream/consumers";
import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface ConteudoCTA {
  title: String;
  banner: String;
}

function Cta({ title, banner }: ConteudoCTA) {


  return (
    <>
      <section className={style.Cta}>
        <div className={style.Container}>
          <div className={style.BoxCta} style={{backgroundImage:`url(${banner})`}}>
            <div className={style.ContainerContent}>
              <div className={style.Controller}>
                <h1>{title}</h1>
                <button> <Link href="/logistica">fale com um consultor</Link></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
