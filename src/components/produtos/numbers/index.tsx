import { useEffect, useRef, useState } from "react";

interface numbers {
  number: string;
  text: string;
}

interface Content {
  title: string;
  subtitle?: string;
  text: string;
  banner: string;
  cor: string;
  number: numbers[];
}

export default function Numbers({
  title,
  text,
  subtitle,
  banner,
  number,
  cor,
}: Content) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedNumbers, setAnimatedNumbers] = useState<{ number: string; text: string }[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startNumberAnimation();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Executa apenas uma vez ao montar o componente

  const startNumberAnimation = () => {
    number.forEach((item, index) => {
      const numbersOnly = item.number.match(/\d+/g); // Extrai apenas os números da string
      if (!numbersOnly) return; // Se não houver números, retorna

      const textPart = item.number.replace(/\d+/g, ""); // Extrai a parte textual da string

      numbersOnly.forEach((num) => {
        const targetNumber = parseInt(num);
        let currentNumber = 0;

        const interval = setInterval(() => {
          currentNumber++;
          setAnimatedNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] = { number: currentNumber.toString(), text: textPart };
            return newNumbers;
          });

          if (currentNumber >= targetNumber) {
            clearInterval(interval);
          }
        }, 1.2); // Intervalo de atualização em milissegundos (20 ms)
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap- items-center justify-center max-w-[1996px] w-full"
    >
      <div className="w-[90%] flex justify-center">
        <div className="flex justify-center items-center flex-col gap-2 w-full">
          <h1 className="text-black xl:text-3xl lg:text-2xl text-center">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-black text-center font-semibold w-full lg:w-4/5">
              {subtitle}
            </h2>
          )}
          <p className="text-black text-center lg:w-4/5">{text}</p>
        </div>
      </div>
      <div className=" w-full lg:w-[90%] lg:mt-4 mt-5 ">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.3) 2px 4px 12px 0px" }}
          className="lg:flex gap-3 p-10 lg:p-20 justify-evenly items-center w-full h-full lg:h-[200px] lg:rounded-2xl bg-white"
        >
          {number.map((item, index) => (
            <div
              className="flex flex-col cursor-pointer items-center justify-center transition-all p-5  border-transparent w-full h-auto lg:w-[260px]"
              key={index}
            >
              <h1 style={{ color: cor }} className="text-[3rem]">
                {animatedNumbers[index] ? animatedNumbers[index].number + animatedNumbers[index].text : item.number}
              </h1>
              <p className="font-bold text-center text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
