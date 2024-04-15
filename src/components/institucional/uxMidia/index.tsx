import { useRef } from "react";
import CarrouselCards from "../carrouselCards";
import style from "./style.module.scss";
import arrowLeft from "@/assets/cta/arrowLeft.svg";
import arrowRight from "@/assets/cta/arrowRigth.svg";
import Image from "next/image";

interface Content {
  title: string;
  banner: string;
  text: string;
  link: string;
}

interface ContentCard {
  content: Content[];
  colorText: string;
  containerRef?: any;
}

function UxMidia({ content, colorText }: ContentCard) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 1000,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className={style.UxMidia}>
        <div className={style.Container}>
          <div className={style.BoxUxMidia}>
            <div className={style.Content}>
              <h1>UX na mídia.</h1>
            </div>
            <div className="w-full flex-row gap-4 pb-2 md:[display:flex] [display:none] justify-center md:justify-end">
              <div
                className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                onClick={handleScrollLeft}
              >
                <Image
                  src={arrowLeft}
                  alt="Seta esquerda"
                  width={40}
                  height={40}
                />
              </div>
              <div
                className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                onClick={handleScrollRight}
              >
                <Image
                  src={arrowRight}
                  alt="Seta direita"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        <CarrouselCards containerRef={containerRef} colorText={colorText} content={content} />
      </section>
    </>
  );
}

export default UxMidia;
