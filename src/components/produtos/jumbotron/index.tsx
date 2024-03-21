export default function JumboTron() {
  return (
    <>
      <section className="bg-center w-full bg-no-repeat bg-[#bfbfbf] bg-blend-multiply">
        <div className="px-4  flex flex-col items-center justify-center w-full text-center py-24 lg:py-56">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-white w-4/5 sm:px-16 lg:px-52">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col gap-0 md:gap-5 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button className="w-[200px] h-10 rounded-lg hover:bg-black hover:text-white transition-all">
              fale com um consultor
            </button>
            <button className="md:w-[170px] h-10 rounded-lg bg-black text-white  hover:bg-white hover:text-black transition-all">
              saiba mais
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
