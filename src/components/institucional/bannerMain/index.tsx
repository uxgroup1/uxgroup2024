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
      <section className="relative overflow-hidden pb-0 pt-0 flex w-full h-[100vh] md:h-2/6">
        <div
          className={`w-full md:p-0 h-full bg-blend-darken bg-no-repeat bg-cover bg-gray-400 relative`}
          style={{
            backgroundImage: `url(${contentBanners[contentIndex].background})`,
            transition: "background-image animate-back ",
            transform: "animate-back",
          }}
        >
          <div className="flex flex-col p-[17%] bg justify-center text-white md:text-4xl text-xl items-center w-full h-2/4">
            <div className="p-5  md:p-0 h-full flex items-end justify-end">
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
          <div className="w-full h-2/4 flex items-end justify-center relative">
            <div className="w-[130px] h-[60px]  md:w-[350px] md:h-[210px] rounded-ss-[200px] rounded-se-[200px] bg-white relative">
              <div className="absolute inset-0 flex items-end justify-center">
                <svg
                  className={`w-10 md:w-24 md:h-24 mb-[-5px] text-gray-800 dark:text-white delay-100  transition-transform ${
                    contentIndex === 1 ? "-rotate-[-35deg]" : ""
                  } transition-transform ${
                    contentIndex === 2 ? "-rotate-[-60deg]" : ""
                  } transition-transform ${
                    contentIndex === 0 ? "-rotate-[30deg]" : ""
                  } transition-transform ${
                    contentIndex === 3 ? "-rotate-[60deg]" : ""
                  }   `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              </div>
              <div className="absolute flex w-full justify-between gap-0 top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-full">
                <button
                  className="bg-white text-white w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full transition-all"
                  onClick={() => handleButtonClick(0)}
                >
                  
                </button>
                <button
                  className="bg-white text-white w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full transition-all"
                  onClick={() => handleButtonClick(1)}
                >
                  
                </button>
              </div>
              <div className="absolute top-[-40px] right-[-40px] md:bottom-2/4 md:right-[-60px] transform translate-x-1/2 translate-y-1/2">
                <button
                  className="bg-white text-white w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full transition-all"
                  onClick={() => handleButtonClick(2)}
                >
                 
                </button>
              </div>
              <div className="absolute left-[-40px] top-[-40px] md:bottom-2/4 md:left-[-85px] transform -translate-x-1/2 translate-y-1/2">
                <button
                  className="bg-white text-white w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full transition-all"
                  onClick={() => handleButtonClick(3)}
                >
                
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
