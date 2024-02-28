import style from "./style.module.scss";

interface contentCards {
  title: string;
  text: string;
  banner: string;
}

interface carrouselCards {
  content: contentCards[];
}

function CarrouselCards({ content }: carrouselCards) {
  return (
    <>
      <div className={style.CarrouselCards}>
        <div className={style.Container}>
          {content.map((data) => {
            return (
              <>
                <div className={style.Card}>
                  <div className={style.content}>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    <button>
                      <a href=""> saiba mais</a>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CarrouselCards;
