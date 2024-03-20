import { useState } from "react";
import image from "../../../assets/cta/ctaBanner.png";
import Image from "next/image";
import ImageTEste from "../../../assets/teste.png";
import faviconESG from "../../../assets/faviconBanner/ux-esg.svg";
import faviconGestao from "../../../assets/faviconBanner/ux-gestao.svg";
import faviconLog from "../../../assets/faviconBanner/ux-log.svg";
import faviconUX from "../../../assets/faviconBanner/ux.svg";

export default function BannerMain() {
  const [contentIndex, setContentIndex] = useState(0);

  const contentBanners = [
    {
      title: "Institucional",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      background: image.src,
    },
    {
      title: "Gestão",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      background:
        "https://uxsolutions.com.br/wp-content/uploads/2023/06/Banner-2-1440x440-1.png",
    },

    {
      title: "Logística",
      text: "Conteúdo do Logística",
      background:
        "https://uxsolutions.com.br/wp-content/uploads/2023/06/Banner-2-1440x440-1.png",
    },
    {
      title: "Sustentabilidade",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      background:
        "https://uxsolutions.com.br/wp-content/uploads/2023/06/Banner-2-1440x440-1.png",
    },
  ];

  const handleButtonClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <>
      <section className="relative overflow-hidden pb-0 pt-0 flex w-full h-[100vh] md:h-[90vh]">
        <div
          className={`flex flex-col w-full md:p-0 h-full bg-blend-darken bg-no-repeat bg-cover bg-gray-400 relative`}
          style={{
            backgroundImage: `url(${contentBanners[contentIndex].background})`,
            transition: "background-image animate-back ",
            transform: "animate-back",
          }}
        >
          <div className="flex flex-col-reverse md:flex-row-reverse text-white md:text-4xl text-xl items-center w-full md:h-4/5 h-full">
            <div className="md:w-1/2 w-full h-2/5 md:h-full flex items-center md:justify-start md:pl-20  justify-center text-center md:text-start">
              <h1
                className={`font-bold md:pt-36 w-full flex md:h-full justify-center md:items-start items-center flex-col md:text-5xl text-center md:text-left  text-white transition-transform ${
                  contentIndex === 0
                    ? "animated-state-one"
                    : contentIndex === 1
                    ? "animated-state-two"
                    : contentIndex === 2
                    ? "animated-state-one"
                    : "animated-state-two"
                }`}
              >
                {contentBanners[contentIndex].title}
                <p className="pt-3 md:w-3/4 text-sm text-center md:text-left w-4/5 font-normal">
                  {contentBanners[contentIndex].text}
                </p>
                <button className="md:w-[50%] w-[70%] flex items-center justify-center h-[40px] font-normal rounded-[8px]">
                  saiba mais
                </button>
              </h1>
            </div>
            <div className=" flex items-end justify-start md:pl-[5%] h-2/5 md:h-full w-full md:w-1/2  ">
              <div
                className={`rounded-[16px] w-full h-full md:h-4/5  transition-transform ${
                  contentIndex === 0
                    ? "animated-state-Banner"
                    : contentIndex === 1
                    ? "animated-state-BannerTwo"
                    : contentIndex === 2
                    ? "animated-state-Banner"
                    : "animated-state-BannerTwo"
                }`}
              >
                <Image
                  className="w-full md:pt-0 object-cover md:object-cover h-full"
                  width={100}
                  height={100}
                  src={ImageTEste.src}
                  alt="teste"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-1/6  md:h-[200px] md:pt-12 pb-10 md:pb-10  flex gap-5 items-center justify-center ">
            <button
              className={`${
                contentIndex === 0 ? "bg-black" : "bg-white"
              }  hover:w-7 hover:h-7 block w-6 h-6 hover:border-white border hover:bg-black rounded-[8px] transition-all`}
              onClick={() => handleButtonClick(0)}
            ></button>
            <button
              className={`${
                contentIndex === 1
                  ? "bg-gradient-to-r from-[#29265B] to-[#009580]"
                  : "bg-white"
              }  hover:w-7 hover:h-7 block w-6 h-6 hover:border-white border hover:bg-gradient-to-r from-[#29265B] to-[#009580] rounded-[8px] transition-all`}
              onClick={() => handleButtonClick(1)}
            ></button>

            <button
              className={`${
                contentIndex === 2
                  ? "bg-gradient-to-r from-[#FBC709] to-[#FF7F13]"
                  : "bg-white"
              }  hover:w-7 hover:h-7 block w-6 h-6 hover:border-white border hover:bg-gradient-to-r from-[#FBC709] to-[#FF7F13] rounded-[8px] transition-all`}
              onClick={() => handleButtonClick(2)}
            ></button>
            <button
              className={`${
                contentIndex === 3
                  ? "bg-gradient-to-r from-[#7DAD58] to-[#014C34]"
                  : "bg-white"
              } hover:w-7 hover:h-7 block w-6 h-6 hover:border-white border hover:bg-gradient-to-r from-[#7DAD58] to-[#014C34] rounded-[8px] transition-all`}
              onClick={() => handleButtonClick(3)}
            ></button>
          </div>
        </div>
      </section>
    </>
  );
}
