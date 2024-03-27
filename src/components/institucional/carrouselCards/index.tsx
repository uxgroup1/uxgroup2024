import Link from "next/link";
import style from "./style.module.scss";

interface contentCards {
  title: string;
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
          {content?.map((data,index) => {
            return (
              <div
                key={index}
                className={`hover:bg-slate-600 ${style.Card}`}
              >
                <div className={style.content}>
                  <h2 className="leading-[30px]">{data.title}</h2>
                  <button>
                    <Link href=""> saiba mais</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CarrouselCards;
