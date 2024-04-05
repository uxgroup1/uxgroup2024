import { text } from "stream/consumers";
import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface ConteudoCTA {
  title: String;
  text?: String;
  banner: String;
  button: boolean;
  corButtonOne?: string;
  corButtonTwo?: string;
  logo?: string;
  gradient?: boolean;
}

function Cta({
  title,
  banner,
  text,
  button,
  corButtonOne,
  corButtonTwo,
  logo,
  gradient,
}: ConteudoCTA) {
  return (
    <>
      <section className={style.Cta}>
        <div className={style.Container}>
          <div
            className={`${style.BoxCta} ${
              gradient === true && !banner
                ? "bg-gradient-to-l from-[#009881] to-[#29265B]"
                : "bg-black"
            }`}
            style={
              banner
                ? { backgroundImage: `url(${banner})` }
                : { backgroundColor: "black" }
            }
          >
            <div className={style.ContainerContent}>
              <div className={style.Controller}>
                <div className="flex flex-col">
                  <h1>{title}</h1>
                  <p className="w-4/5">{text}</p>
                </div>
                {logo && (
                  <Image
                    className="flex items-center justify-center w-4/5"
                    src={logo}
                    alt="Logística Sustentável"
                    width={100}
                    height={100}
                  />
                )}
                {button && (
                  <button
                    className="hover:font-semibold  text-black bg-white transition  hover:shadow-md"
                    style={{
                      background: `linear-gradient(to right, ${corButtonOne}, ${
                        corButtonOne ? corButtonTwo : corButtonOne
                      })`,
                    }}
                  >
                    <Link href="/logistica">fale com um consultor</Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
