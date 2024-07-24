import Link from "next/link";
import style from "./style.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import testeicon from "@/assets/iconsLog/one.svg"
import Image from "next/image";


interface contentCards {
  title: string;
  text: string;
  banner: string;
  link: string;
  icon?: string;
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
                    {
                      data.icon && (
                        <div className="w-20 relative top-3 mb-5 lg:-top-24 lg:-mb-16 h-20 rounded-2xl shadow-md">
                          <div style={{background: "linear-gradient(to right, #A900D9, #450071"}} className="w-full h-full p-5 rounded-2xl bg-slate-300 flex items-center justify-center">
                            <Image className="absolute w-10" src={testeicon} width={100} height={100} alt="" />
                          </div>

                        </div>
                      )
                    }


                    <h2 style={{ color: `${colorText}` }} className={`leading-[30px]`}>
                      {data.title}
                    </h2>
                    <p className={`text-black text-sm pt-3 `}>{data.text}</p>
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
