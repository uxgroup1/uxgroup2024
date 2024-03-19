import { useState } from "react";
import image from "../../../assets/cta/ctaBanner.png";

export default function BannerMain() {
  const [contentIndex, setContentIndex] = useState(0);

  const contentBanners = [
    {
      title: "Gestão",
      text: "Conteúdo do Gestão",
      background:
        "https://uxsolutions.com.br/wp-content/uploads/2023/06/Banner-2-1440x440-1.png",
    },
    {
      title: "Institucional",
      text: "Conteúdo do Institucional",
      background: image.src,
    },
    {
      title: "Logística",
      text: "Conteúdo do Logística",
      background:
        "https://uxsolutions.com.br/wp-content/uploads/2023/06/Banner-2-1440x440-1.png",
    },
    {
      title: "Sustentabilidade",
      text: "Conteúdo do Sustentabilidade",
      background:
        "https://uxsolutions.com.br/wp-content/uploads/2023/06/Banner-2-1440x440-1.png",
    },
  ];

  const handleButtonClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <>
      <section className="relative overflow-hidden pb-0 pt-0 flex w-full h-[90vh] md:h-[90vh]">
        <div
          className={`w-full md:p-0 h-full bg-blend-darken bg-no-repeat bg-cover bg-gray-400 relative`}
          style={{
            backgroundImage: `url(${contentBanners[contentIndex].background})`,
            transition: "background-image animate-back ",
            transform: "animate-back",
          }}
        >
          <div className="flex flex-col p-[17%] bg justify-center text-white md:text-4xl text-xl items-center w-full  h-2/4">
            <div className="absolute top-[-35vh] md:top-[-40vh] p-5 md:p-0 h-full flex items-end justify-end">
              <h1
                className={`font-bold flex flex-col items-center justify-center text-white transition-transform ${
                  contentIndex === 0
                    ? "animated-state-one"
                    : contentIndex === 1
                    ? "animated-state-two"
                    : "animated-state-three"
                }`}
              >
                {contentBanners[contentIndex].title}
                <p className="pt-3 text-sm font-normal">
                  {contentBanners[contentIndex].text}
                </p>
              </h1>
            </div>
          </div>
          <div className="w-full h-2/4 pb-10  flex gap-5 md:items-center items-end justify-center ">
            <button
              className="bg-white text-white w-[50px] hover:bg-black border hover:border-white h-[50px] rounded-full transition-all"
              onClick={() => handleButtonClick(0)}
            ></button>
            <button
              className="bg-white text-white w-[50px] h-[50px] hover:bg-black border hover:border-white  rounded-full transition-all"
              onClick={() => handleButtonClick(1)}
            ></button>

            <button
              className="bg-blue-300 text-white w-[50px] h-[50px] hover:bg-black border hover:border-white rounded-full transition-all"
              onClick={() => handleButtonClick(2)}
            ></button>
            <button
              className="bg-red-100 text-white w-[50px] h-[50px] hover:bg-black border hover:border-white  rounded-full transition-all"
              onClick={() => handleButtonClick(3)}
            ></button>
          </div>
        </div>
      </section>
    </>
  );
}
