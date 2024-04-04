import Image from "next/image";

interface numbers {
  number: string;
  text: string;
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
        <div className="flex justify-center items-center flex-col gap-2 w-full">
          <h1 className="text-black text-center">{title}</h1>
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
          {number.map((item, index) => {
            return (
              <div
                className="flex flex-col cursor-pointer items-center justify-center rounded-2xl transition-all p-5 text-black border-transparent w-full lg:w-[200px]"
                key={index}
              >
                <h1 className={`text-[#28265b] text-7xl`}>{item.number}</h1>
                <p className="font-bold text-center">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
