import Image from "next/image";

interface Content {
  title: string;
  text: string;
  banner: string;
  logo: string;
  corButtonOne: string;
  corButtonOneTwo?: string;
}

export default function JumboTron({
  title,
  text,
  banner,
  logo,
  corButtonOne,
  corButtonOneTwo,
}: Content) {

  return (
    <>
      <section
        style={{ backgroundImage: `url(${banner})` }}
        className={`md:bg-center bg-[70%] bg-cover h-screen w-full pb-0 bg-no-repeat bg-[#bfbfbf] bg-blend-multiply`}
      >
        <div className="w-full h-full bg-[#000000a0]">
          <div className="px-4  flex flex-col items-center justify-center h-full w-full text-center  lg:py-56">
            <Image
              className={`md:w-[500px] transition-transform ${"animated-state-Jumbotron "} pb-5 w-[200px] md:pb-14`}
              width={0}
              height={0}
              src={logo}
              alt="Logo do produto UX"
            />
            <h1
              className={`mb-4 w-4/5 leading-snug text-3xl transition-transform ${"animated-state-Jumbotron-two"} font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl`}
            >
              {title}
            </h1>
            <p
              className={`mb-8 text-sm text-white w-4/5 transition-transform ${"animated-state-Jumbotron-two"} sm:px-16 lg:px-52`}
            >
              {text}
            </p>
            <div
              className={`flex flex-col gap-0 md:gap-5 transition-transform ${"animated-state-Jumbotron-two"} space-y-4 sm:flex-row sm:justify-center sm:space-y-0`}
            >
              <button className="w-[200px] h-10 rounded-lg transition-all">
                fale com um consultor
              </button>
              <button
                style={{
                  background: `linear-gradient(to right, ${corButtonOne}, ${
                    corButtonOneTwo ? corButtonOneTwo : corButtonOne
                  })`,
                }}
                className={`md:w-[170px] h-10 rounded-lg text-white   transition-all`}
              >
                saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
