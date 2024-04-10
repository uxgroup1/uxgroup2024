import Link from "next/link";
import style from "./style.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

interface contentCards {
  title: string;
  text: string;
  banner: string;
  link:string;
  
}

interface carrouselCards {
  content: contentCards[];
  colorText: string;
}

function CarrouselCards({ content,colorText }: carrouselCards) {
  return (
    <>
      <div className={style.CarrouselCards}>
        <div className={style.Container}>
          {content?.map((data, index) => {            
            return (
              <div
                style={{ backgroundImage: `url(${data.banner})`, backgroundPosition: `center` }}
                key={index}
                className={` bg-cover ${style.Card}`}
              >
                <div className={style.content}>
                  <h2 className={`text-black leading-[30px]`}>{data.title}</h2>
                  <p className={`text-black text-sm `}>{data.text}</p>
                  <button className={`text-black `}>
                    <Link target="_blank" className="flex hover:border-b transition border-transparent hover:border-black items-center gap-2" href={data.link}>
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
