import style from "./style.module.scss";

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
                  logística sustentável.  <br/>
                  <a style={{ fontWeight: "bold", }}>
                     Juntos, Podemos Criar um Futuro Mais Verde.
                  </a>
                </p>
                <button>saiba mais</button>
              </div>
            </div>
            <div className={style.ContentImage}>
                <div className={style.BoxImage}>
                .
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogisticaSustentavel;
