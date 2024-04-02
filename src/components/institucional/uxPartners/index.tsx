import style from "./style.module.scss";

function UxPartners() {
  return (
    <>
      <section className={style.UxPartners}>
        <div className={style.Container}>
          <div className={style.BoxUxPartners}>
            <div className={style.UX_partners}>UX Partners</div>
            <div className={style.Content}>
              <h1>
                Diversas categorias de parceiros especialistas que agregam a
                proposta de valor de uma solução full commerce.
              </h1>
              <p>Conheça as experiências reais dos nossos parceiros.</p>
              <button className="hover:font-semibold transition">fale com um consultor</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UxPartners;
