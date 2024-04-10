import Image from "next/image";
import style from "./style.module.scss";
import imageteste from "../../../assets/faviconBanner/ux-log.svg";
import { useState } from "react";
import Link from "next/link";

interface Content {
  title: string;
  text: string;
  textTwo?: string;
  image: string;
  flowReverse: boolean;
  corButtonOne: string;
  corButtonTwo?: string;
  corButtonThree?: string;
  id?: string;
  link?: string;
}

function SecondSection({
  title,
  text,
  image,
  flowReverse,
  corButtonOne,
  corButtonTwo,
  corButtonThree,
  id,
  link,
  textTwo,
}: Content) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    background: `linear-gradient(to right, ${corButtonOne} 0%, ${
      corButtonTwo ? corButtonTwo : corButtonOne
    } 100%)`,
    backgroundSize: "200% 100%",
    transition: " 0.1s ease",
    cursor: "pointer",
    backgroundPosition: hovered ? "70% 100%" : "0% 100%",
  };

  if (!corButtonTwo && corButtonThree && hovered) {
    buttonStyle.background = `linear-gradient(to right, ${corButtonOne} 0%, ${
      corButtonThree ? corButtonThree : corButtonOne
    } 100%)`;
  }

  return (
    <section id={id} className={style.LogisticaSustentavel}>
      <div className={style.Container}>
        <div
          className={` ${flowReverse === true ? "flex-row-reverse" : ""}  ${
            style.BoxLogisticaSustentavel
          }`}
        >
          <div className={`${style.Controller}`}>
            <div className={`${style.ContentText}`}>
              <div className="flex w-full flex-col gap-3">
                <h1 className="w-full md:w-[90%]">{title}</h1>
                <div>
                  <p className="w-full lg:w-3/4">{text}</p>
                  {textTwo && <p className="w-full lg:w-3/4">{textTwo}</p>}
                </div>
              </div>

              <div className={` ${style.containerTeste}`}></div>
              <div className={style.ButtonContainer}>
                <Link className="w-full md:w-[170px] h-10 " href={`${link}`}>
                  <button
                    className=" w-full md:w-[170px] h-10 hover:border hover:shadow-sm hover:font-semibold hover:transition-all"
                    style={buttonStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    saiba mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.ContentImage}>
            <div
              className={` ${
                flowReverse === true
                  ? "justify-start"
                  : " md:justify-end justify-start"
              } ${style.BoxImage} `}
            >
              <Image
                className={` md:w-[800px] w-[97%] object-cover h-full`}
                src={image}
                alt="Imagem"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
