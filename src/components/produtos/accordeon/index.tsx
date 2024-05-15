import Image from "next/image";
import iconOne from "@/assets/iconsLog/one.svg";
import iconTwo from "@/assets/iconsLog/two.svg";
import iconThree from "@/assets/iconsLog/three.svg";
import iconFour from "@/assets/iconsLog/four.svg";
import iconFive from "@/assets/iconsLog/five.svg";
import iconSix from "@/assets/iconsLog/six.svg";
import iconSeven from "@/assets/iconsLog/seven.svg";
import iconEight from "@/assets/iconsLog/eight.svg";
import Link from "next/link";

interface ContentArray {
  banner: string;
  titleSection: string;
  text?: string;
  rowReverse: boolean;
  button?: boolean;
  linkButton?: string;
  imageSobTitle?: string;
}

const content = [
  {
    title: "Recebimento",
    image: iconEight,
  },
  {
    title: "Armazenagem",
    image: iconSeven,
  },
  {
    title: "Controle de estoque",
    image: iconSix,
  },
  {
    title: "Picking",
    image: iconEight,
  },
  {
    title: "Packing",
    image: iconEight,
  },

  {
    title: "Layout e automação",
    image: iconThree,
  },
  {
    title: "Expedição",
    image: iconOne,
  },

  {
    title: "Logística Reversa ",
    image: iconTwo,
  },
  {
    title: "WMS",
    image: iconFour,
  },

  {
    title: "S&OP",
    image: iconFive,
  },
];
const contentMobile = [
  {
    title: "Recebimento",
    image: iconEight,
  },
  {
    title: "S&OP",
    image: iconFive,
  },
  {
    title: "Armazenagem",
    image: iconSeven,
  },

  {
    title: "Picking",
    image: iconEight,
  },
  {
    title: "Packing",
    image: iconEight,
  },
  {
    title: "Controle de estoque",
    image: iconSix,
  },
  {
    title: "WMS",
    image: iconFour,
  },
  {
    title: "Logística Reversa ",
    image: iconTwo,
  },
  {
    title: "Expedição",
    image: iconOne,
  },
  {
    title: "Layout e automação",
    image: iconThree,
  },
];

export default function IconesLog({
  banner,
  text,
  rowReverse,
  imageSobTitle,
}: ContentArray) {
  return (
    <>
      <section className="bg-white flex items-center justify-center  w-full md:px-0 px-5 ">
        <div className="max-w-[1996px] w-full flex items-center justify-center md:justify-center">
          <div
            className={`lg:flex md:flex-row flex flex-col-reverse w-full md:w-[90%] ${
              rowReverse === true
                ? "lg:flex-row-reverse md:gap-28  "
                : "lg:flex"
            }  lg:items-center`}
          >
            <div
              className={`w-full md:w-[55%] ${
                rowReverse === true ? "md:w-[50%]" : ""
              }  `}
            >
              {" "}
              {imageSobTitle && (
                <Image
                  className="w-[45%] lg:w-[35%] pb-5"
                  src={imageSobTitle}
                  alt="Logística Sustentavel"
                  width={100}
                  height={100}
                />
              )}
              <h1 className="w-[93%] flex items-center gap-2 xl:text-4xl lg:text-2xl font-bold pb-8 text-black">
                Fulfillment inteligente que garante performance e impulsiona
                suas vendas.
              </h1>
              {text && (
                <p className="pb-7 xl:text-lg lg:text-[0.7rem] md:w-4/5 text-black">
                  {text}
                </p>
              )}
              <div className="flex-wrap gap-2 md:[display:flex] [display:none] pt-3 md:w-4/5 w-full h-full">
                {content.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex ${
                        data.title.length >= 12 ? "w-[350px]" : ""
                      }  ${
                        data.title.startsWith("Log") ? "w-[350px]" : ""
                      } flex-col items-center justify-center transition-all text-black flex-wrap rounded-full pl-1 pr-14 border-2 border-[#FBC709] py-1 bg-transparent`}
                    >
                      <div className="flex flex-row items-center justify-center gap-3 w-full ">
                        <div className="w-16 h-12 p-1 flex items-center justify-center bg-[#FBC709] border border-white shadow  rounded-full">
                          <div className="w-10 flex items-center justify-center  rounded-full h-full">
                            <Image
                              className="w-4/5"
                              src={data.image}
                              width={100}
                              height={100}
                              alt="Logística com performance"
                            />
                          </div>
                        </div>
                        <div className="w-full h-full items-center justify-center cursor-default font-medium flex text-base ">
                          <h1 className="font-medium  items-center justify-center pb-0 h-full flex text-base">
                            {data.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex-wrap gap-2 md:pb-0 pb-7 md:[display:none] [display:flex]  pt-3 md:w-4/5 w-full h-full">
                {content.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex ${
                        data.title.length >= 14 ? "w-[240px]" : "w-[175px] "
                      } ${
                        data.title.startsWith("Arm") ? "w-[200px]" : ""
                      } flex-col items-center justify-center  transition-all text-black flex-wrap rounded-full pl-1 pr-5 border-2 border-[#FBC709] py-1 bg-transparent`}
                    >
                      <div className="flex flex-row items-center justify-center gap-1 w-full ">
                        <div className="w-10 h-10 p-1 flex items-center justify-center bg-[#FBC709] border border-white shadow-md  rounded-full">
                          <div className="w-10 flex items-center justify-center  rounded-full h-full">
                            <Image
                              className="w-4/5"
                              src={data.image}
                              width={100}
                              height={100}
                              alt="Logística com performance"
                            />
                          </div>
                        </div>
                        <div className="w-full h-full items-center justify-start pl-1 cursor-default font-medium flex text-base ">
                          <h1 className="font-medium  items-center justify-center pb-0 h-full flex text-xs ">
                            {data.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link href={`#formulario`}>
                <button
                  className={`bg-[#FBC709] lg:mt-5 w-full lg:w-[20%] h-12 rounded-lg text-white hover:font-semibold hover:bg-gradient-to-r hover:to-[#D3A707] FBC709 hover:from-[#FBC709]`}
                >
                  saiba mais
                </button>
              </Link>
            </div>
            <div
              className={`${
                rowReverse === true ? "md:justify-start" : ""
              } rounded-2xl flex lg:items-center md:pb-0 pb-10 w-full md:w-1/2 lg:justify-center`}
            >
              <Image
                width={100}
                height={100}
                className="w-full rounded-2xl object-cover h-full"
                src={banner}
                alt="Tecnologia, Logística e sustentabilidade"
              />
            </div>
          </div>
          <hr className="my-12 border-gray-200" />
        </div>
      </section>
    </>
  );
}
