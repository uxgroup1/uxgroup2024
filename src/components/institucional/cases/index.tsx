import Image from "next/image";
import { useState } from "react";


interface Content {
  title: string;
  text: string;
  imageSrc: string;
  author: string;
}

interface ContentSlide {
  content: Content[];
}

export function Cases({content}: ContentSlide) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === content.length - 1 ? 0 : prevSlide + 1
        );
        setIsTransitioning(false);
      }, 300); 
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? content.length - 1 : prevSlide - 1
        );
        setIsTransitioning(false);
      }, 300); 
    }
  };

  return (
    <section className="bg-white  flex  justify-center items-center h-full w-full">
      <div className="w-full flex justify-center items-center flex-col px-4 mx-auto">
        <h1 className="mt-2 font-bold leading-snug text-black">
          Nossos cases de sucesso
        </h1>

        <main className="relative flex justify-center items-center z-20 lg:w-[92%] mt-8 md:flex md:items-center xl:mt-12">
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.3) 2px 4px 12px 0px'}} className="absolute flex justify-center items-center box-shadow  w-full bg-[#bfbfbf] -z-10 md:h-96 rounded-2xl"></div>
          <div className="w-full bg-black md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <Image
              width={100}
              height={100}
              style={{boxShadow: 'rgba(0, 0, 0, 0.3) 2px 4px 12px 0px'}}
              className={`h-40 w-full md:mx-6 rounded-t-[16px] object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[50%] md:rounded-2xl transition-opacity ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              src={content[currentSlide].imageSrc}
              alt="client photo"
            />
            <div className="mt-2 md:mx-6 p-5">
              <div className="flex flex-col gap-3">
                <Image
                  width={100}
                  height={100}
                  src={content[currentSlide].imageSrc}
                  alt="Clientes UX"
                  className={`md:w-[70px] md:h-[70px] w-20 h-20 mb-3 rounded-[8px]  transition-opacity ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                />
                <h2 className="text-2xl font-bold tracking-tight text-white lg:text-black">
                  {content[currentSlide].author}
                </h2>
                <p className="leading-relaxed text-white lg:text-black transition-opacity">
                  "{content[currentSlide].text}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 md:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-black transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:text-white hover:bg-black"
                  onClick={prevSlide}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-black transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:text-white hover:bg-black"
                  onClick={nextSlide}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
