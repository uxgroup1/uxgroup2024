import style from "./style.module.scss";

function EcoSistemaUx() {
  return (
    <>
      <section className={style.LogisticaSustentavel}>
        <div className={style.Container}>
          <div className={style.BoxLogisticaSustentavel}>
            <div className={style.Controller}>
              <div className={style.ContentText}>
                <div>
                  <h1>Ecossistema UX</h1>
                </div>
                <p>
                  Inovamos e entregamos ao mercado soluções para uma gestão
                  completa da venda digital. Através de Tecnologia, Logística e
                  Sustentabilidade automatizamos os processos, otimizamos a sua
                  operação e geramos valor para o seu cliente.
                </p>
                <p>
                  Fazemos estratégias personalizadas e adaptadas ao tamanho do
                  seu negócio com foco em impulsionar os resultados e reduzir os
                  custos.
                </p>
                <button>saiba mais</button>
              </div>
            </div>
            <div className={style.ContentImage}>
              <div className={style.BoxImage}>.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EcoSistemaUx;
