import Image from "next/image";
import style from "./style.module.scss";
import imageteste from "../../../assets/faviconBanner/ux-log.svg";


interface Content {
  title: string;
  text: string;
  image: string;
  flowReverse: boolean;
}

function SecondSection({ title, text, image, flowReverse }: Content) {
  return (
    <>
      <section className={style.LogisticaSustentavel}>
        <div className={style.Container}>
          <div className={` ${flowReverse === true ? "flex-row-reverse" : ""}  ${style.BoxLogisticaSustentavel}`}>
            <div className={style.Controller}>
              <div className={style.ContentText}>
                <div className="flex flex-col gap-3">
                  <h1>{title}</h1>
                  <p>{text}</p>
                </div>

                <div className={` ${style.containerTeste}`}></div>
                <div className={style.ButtonContainer}>
                  <button>saiba mais</button>
                </div>
              </div>
            </div>
            <div className={style.ContentImage}>
              <div className={` ${flowReverse === true ? "justify-start" : " justify-end"} ${style.BoxImage} `}>
                <Image
                  className="w-[87%] object-cover h-full"
                  src={imageteste}
                  alt="Imagem"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondSection;
