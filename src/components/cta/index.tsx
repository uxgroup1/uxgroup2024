import { text } from "stream/consumers";
import style from "./style.module.scss";

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
                <button>fale com um consultor</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
