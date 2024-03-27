import Image from "next/image";

interface Content {
  icon: string;
  title: string;
  text: string;
}

interface ContentSection {
  title: string;
  text: string;
  content: Content[];
}

export default function ThreeTopics({ title, text, content }: ContentSection) {
  return (
    <>
      <section className="bg-white w-full">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.3) 2px 4px 12px 0px" }}
          className="md:w-[90%] gap-10 bg-white md:rounded-2xl px-5 md:p-20 flex items-center flex-col justify-center py-12 mx-auto"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-center text-black ">{title}</h1>
            <p className="text-center text-black md:w-[70%]">{text}</p>
          </div>

          <div className="flex items-center justify-center gap-8 ">
            <div className="flex flex-col md:flex-row w-full gap-4 md:justify-evenly md:gap-5 items-center">
              {content?.map((item, index) => {
                return (
                  <div
                    className="flex hover:shadow-2xl  p-5 md:p-0 rounded-lg cursor-default  transition-all md:w-[400px] md:h-[200px] flex-col items-center justify-center"
                    key={index}
                  >
                    <Image
                      src={item.icon}
                      alt="Logística Sustentavel"
                      width={80}
                      height={80}
                      className="hover:animate-pulse"
                    />

                    <h3 className="mt-4 md:w-4/5 w-full text-black text- text-center font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-center w-full md:w-4/5 text-black">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
