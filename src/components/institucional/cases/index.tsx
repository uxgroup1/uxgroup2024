import { useState } from "react";

export function Cases() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Lorem Ipsum",
      text: "lorem Ips laborum et sapien et dolor sit amet",
      imageSrc: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      author: "Ema Watson",
      position: "Marketing Manager at Stech"
    },
    {
      title: "UX Group",
      text: "lorem Ips laborum et sapien et dolor sit amet",
      imageSrc: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      author: "John Doe",
      position: "Product Designer at XYZ"
    },
    {
      title: "UX Log",
      text: "lorem Ips laborum et sapien et dolor sit amet",
      imageSrc: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      author: "Jane Smith",
      position: "UI/UX Designer at ABC"
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        setIsTransitioning(false);
      }, 300); // Tempo da animação
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
        setIsTransitioning(false);
      }, 300); // Tempo da animação
    }
  };

  return (
    <section className="bg-white flex justify-center items-center w-full">
      <div className="w-full flex justify-center items-center flex-col px-6 py-10 mx-auto">
        <h1 className="mt-2 font-semibold text-black">
          Nossos cases de sucesso
        </h1>

        <main className="relative flex justify-center items-center z-20 w-[92%] mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute flex justify-center items-center  w-full bg-[#bfbfbf] -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-6 bg-black md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className={`h-40 w-40 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[50%] md:rounded-2xl transition-opacity ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              src={slides[currentSlide].imageSrc}
              alt="client photo"
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-2xl font-medium tracking-tight text-white lg:text-black">
                  {slides[currentSlide].author}
                </p>
                <p className="text-white lg:text-black">{slides[currentSlide].position}</p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white lg:text-black md:text-xl transition-opacity">
                "{slides[currentSlide].text}"
              </p>

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
