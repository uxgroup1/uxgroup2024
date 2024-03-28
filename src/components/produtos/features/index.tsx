import Image from "next/image";
import svg from "../../../assets/faviconBanner/ux-log.svg";
import { text } from "stream/consumers";

interface Content {
  title: string;
  icons: string;
}

interface ContentArray {
  content: Content[];
  banner: string;
  titleSection: string;
  text?: string;
  rowReverse: boolean
}

export default function FeaturesComponent({
  content,
  banner,
  text,
  rowReverse,
  titleSection,
}: ContentArray) {
  return (
    <>
      <section className="bg-white flex items-center  w-full md:px-0 px-5 ">
        <div className="max-w-[1996px] w-full flex items-center md:justify-center">
          <div className={`lg:flex md:flex-row flex flex-col-reverse w-full md:w-[90%] ${rowReverse === true ? "lg:flex-row-reverse md:gap-28" : "lg:flex"}  lg:items-center`}>
            <div className={`w-full md:w-[65%] ${rowReverse === true ? "md:w-[50%]" : "" }  `}>
              <h1 className=" w-[90%] font-bold pb-4 text-black">{titleSection}</h1>
              {text && <p className="pb-7 md:w-4/5 text-black">{text}</p>}

              <div className="md:flex w-full flex-col gap-2 md:items-start">
                {content?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-full p-1 items-center gap-5 justify-start"
                    >
                      <Image
                        className="flex hover:border-[2px] hover:animate-pulse  w-[40px] hover:border-transparent object-cover h-[40px]"
                        src={item.icons}
                        alt=""
                        width={100}
                        height={100}
                      />
                      <div className="mt-4 w-full  h-full md:mt-0">
                        <h3 className="font-semibold pb-3 md:pb-0 md:w-[90%] cursor-default  text-black w-full ">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${rowReverse === true ? "md:justify-start" : ""} rounded-2xl flex lg:items-center md:pb-0 pb-10 w-full md:w-1/2 lg:justify-center`}>
              <Image
                width={100}
                height={100}
                className="w-full  object-cover h-full"
                src={svg}
                alt=""
              />
            </div>
          </div>
          <hr className="my-12 border-gray-200" />
        </div>
      </section>
    </>
  );
}
