import Link from "next/link";
import style from "./style.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

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
          {content?.map((data, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${data.banner})` }}
                key={index}
                className={` ${style.Card}`}
              >
                <div className={style.content}>
                  <h2 className="text-black leading-[30px]">{data.title}</h2>
                  <p className="text-black">{data.text}</p>
                  <button className="text-black">
                    <Link className="flex hover:border-b transition border-transparent hover:border-black items-center gap-2" href="">
                      saiba mais <FaArrowRightLong className="text-lg" />
                    </Link>
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
