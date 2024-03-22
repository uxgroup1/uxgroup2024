import Image from "next/image";
import style from "./style.module.scss";

interface IconsTexts {
  text: string;
  icons: string;
}

interface Content {
  title: string;
  text: string;
  image: string;
}

function SecondSection({ title, text, image }: Content) {
  return (
    <>
      <section className={style.LogisticaSustentavel}>
        <div className={style.Container}>
          <div className={style.BoxLogisticaSustentavel}>
            <div className={style.Controller}>
              <div className={style.ContentText}>
                <div>
                  <h1>{title}</h1>
                </div>
                <p>{text}</p>
                
                <div className={` ${style.containerTeste}`}></div>
                <div className={style.ButtonContainer}>
                  <button>saiba mais</button>
                </div>
              </div>
            </div>
            <div className={style.ContentImage}>
              <div className={style.BoxImage}>
                <Image className="w-[90%] object-cover h-full" src={image} alt="Imagem" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondSection;
