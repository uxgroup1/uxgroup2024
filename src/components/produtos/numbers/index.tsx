import Image from "next/image";

interface numbers {
  number: string;
  text:string
}

interface Content {
  title: string;
  subtitle?: string;
  text: string;
  banner: string;
  number: numbers[];
}

export default function Numbers({
  title,
  text,
  subtitle,
  banner,
  number,
}: Content) {
  return (
    <section className="flex flex-col gap- items-center justify-center max-w-[1996px] w-full">
      <div className="w-[90%] flex justify-center">
        <div className="flex justify-center flex-col gap-2 lg:w-1/2">
          <h1 className="text-black ">{title}</h1>
          {subtitle && (
            <h2 className="text-black font-semibold w-full lg:w-4/5">{subtitle}</h2>
          )}
          <p className="text-black lg:w-4/5">{text}</p>
        </div>
        <div className=" [display:none] lg:flex  items-end justify-center w-1/2">
          <Image
            className="w-[70%]"
            src={banner}
            width={100}
            height={100}
            alt="Tecnologia, Logística e Sustentabilidade"
          />
        </div>
      </div>
      <div className=" w-full lg:w-[90%] lg:mt-0 mt-5 ">
        <div style={{boxShadow: "rgba(0, 0, 0, 0.3) 2px 4px 12px 0px"}} className="lg:flex gap-3 p-10 lg:p-20 justify-evenly items-center w-full h-full lg:h-[200px] lg:rounded-2xl bg-white">
          {number.map((item, index) => {
            return (
              <div className="flex flex-col cursor-pointer items-center justify-center rounded-2xl transition-all p-5 text-black border-transparent hover:border-2 hover:shadow-md w-full lg:w-[200px]" key={index}>
                <h1 className={`text-[#28265b] text-5xl`}>{item.number}</h1>
                <p className="font-bold">{item.text}</p>
              </div>  
            );
          })}
        </div>
      </div>
    </section>
  );
}
