import Image from "next/image";
import svg from "../../../assets/faviconBanner/ux-log.svg";
import Link from "next/link";

interface Content {
  title: string;
  icons: string;
}

interface ContentArray {
  content: Content[];
  banner: string;
  titleSection: string;
  text?: string;
  rowReverse: boolean;
  button?: boolean;
  linkButton?: string;
  imageSobTitle?: string;
  id?: string;
}

export default function FeaturesComponent({
  content,
  banner,
  text,
  rowReverse,
  titleSection,
  button,
  linkButton,
  imageSobTitle,
  id,
}: ContentArray) {
  return (
    <section id={id} className="bg-white flex items-center justify-center  w-full md:px-0 px-5 ">
      <div className="max-w-[1996px] w-full flex items-center justify-center md:justify-center">
        <div
          className={`lg:flex md:flex-row flex flex-col-reverse w-full md:w-[90%] ${
            rowReverse === true ? "lg:flex-row-reverse md:gap-28  " : "lg:flex"
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
                alt=""
                width={100}
                height={100}
              />
            )}
            <h1 className="w-[93%] xl:text-4xl lg:text-2xl font-bold pb-4 text-black">
              {titleSection}
            </h1>
            {text && <p className="pb-7  md:w-4/5 text-black">{text}</p>}
            <div className="md:flex w-full flex-col lg:gap-1 gap-4 xl:gap-4 md:items-start">
              {content?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full items-center gap-2 justify-start"
                  >
                    <Image
                      className="flex hover:border-[2px] justify-start items-start  hover:animate-pulse  w-[40px] hover:border-transparent object-cover h-[40px]"
                      src={item.icons}
                      alt="Seta identificadora do item"
                      width={100}
                      height={100}
                    />
                    <div className="mt-4 w-full  h-full md:mt-0">
                      <p className=" pb-3 md:pb-0 md:w-[80%] font-medium cursor-default  text-black w-full ">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
              {button && (
                <button
                  className={`bg-[#FBC709] lg:mt-5 w-full lg:w-[20%] h-10 rounded-lg text-white hover:font-semibold hover:bg-gradient-to-r hover:to-[#D3A707] FBC709 hover:from-[#FBC709]`}
                >
                  <Link href={`${linkButton}`}>saiba mais</Link>
                </button>
              )}
            </div>
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
  );
}
