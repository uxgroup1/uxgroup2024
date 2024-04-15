import Link from "next/link";
import style from "./style.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";

interface contentCards {
  title: string;
  text: string;
  banner: string;
  link: string;
}

interface carrouselCards {
  content: contentCards[];
  colorText: string;
  containerRef?: any;
}

function CarrouselCards({ content, colorText, containerRef }: carrouselCards) {


  return (
    <>
      <div ref={containerRef} className={style.CarrouselCards}>
        <div className={style.Container}>
          <div ref={containerRef} className="w-full flex gap-5">
            {content?.map((data, index) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${data.banner})`,
                    backgroundPosition: `center`,
                  }}
                  key={index}
                  className={` bg-cover ${style.Card}`}
                >
                  <div className={style.content}>
                    <h2 className={`text-black leading-[30px]`}>
                      {data.title}
                    </h2>
                    <p className={`text-black text-sm `}>{data.text}</p>
                    <button className={`text-black `}>
                      <Link
                        target="_blank"
                        className="flex hover:border-b transition border-transparent hover:border-black items-center gap-2"
                        href={data.link}
                      >
                        saiba mais <FaArrowRightLong className="text-lg" />
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarrouselCards;
