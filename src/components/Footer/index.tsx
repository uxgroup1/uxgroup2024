import logoUX from "../../assets/ux-branco.svg";
import logoFacebook from "../../assets/Footer/logo-facebook.svg";
import logoInstagram from "../../assets/Footer/logo-instagram.svg";
import logoYoutube from "../../assets/Footer/logo-youtube.svg";
import logoLinkedIn from "../../assets/Footer/logo-linkedin.svg";
import imageCarbono from "../../assets/carbono.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const redeSocial = [
    {
      index: 0,
      image: logoLinkedIn,
      link:"https://www.linkedin.com/company/uxgroup/"
    },
    {
      index: 1,
      image: logoInstagram,
      link:"https://www.instagram.com/uxgroup_/"
    },
    {
      index: 2,
      image: logoFacebook,
      link:"https://www.facebook.com/UX-GROUP-103113961067558/"
    },
    {
      index: 3,
      image: logoYoutube,
      link:" https://www.youtube.com/channel/UCzgk7wIIwM3IUQeBQxz7big"
    },
  ];

  const pages = [
    {
      index: 0,
      name: "Gestão",
      products: [
        {
          namePage: " TMS embarcador",
          url: "/fusion",
        },
        {
          namePage: " TMS transportador",
          url: "/trux",
        },
        {
          namePage: "Plataforma de comunicação",
          url: "/ondetah",
        },
        {
          namePage: "Consultoria",
          url: "/consultoria",
        },
      ],
    },
    {
      index: 1,
      name: "Logística",
      products: [
        {
          namePage: "Fulfillment",
          url: "/logistica",
        },
        {
          namePage: "Torre de controle",
          url: "/torre",
        },
        {
          namePage: "Pudos",
          url: "/pudos",
        },
        {
          namePage: "S&OP",
          url: "/s&op",
        },
        
      ],
    },
    {
      index: 2,
      name: "ESG",
      products: [
        {
          namePage: "Saiba mais",
          url: "https://esg.uxgroup.com.br",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-black flex items-center justify-center text-white p-2 md:pt-10 w-full">
        <div className="flex items-center justify-between h-full w-[92%]">
          <div className="mx-auto w-full  md:p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Link href="#" className="flex items-center">
                  <img
                    src={logoUX.src}
                    className="h-11 me-3 hover:border border-transparent "
                    alt="Gestão e tecnologia"
                  />
                </Link>
              </div>
              <div className="flex md:flex-row flex-col pt-5 md:pt-0 md:grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
                {pages.map((data) => {
                  return (
                    <div key={data.index} className="w-fullx`">
                      <h2 className="mb-4 text-[16px] font-semibold text-white uppercase ">
                        {data.name}
                      </h2>
                      <ul className="flex flex-col text-gray-500  font-medium">
                        {data.products.map((product) => {
                          return (
                            <li key={data.index} className="mb-4 ">
                              <Link
                                href={product.url}
                                className="text-white font-medium pt-5  pb-1 transition-all border-b-white border-transparent"
                              >
                                {product.namePage}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
                <div className="lg:ml-20">
                  <Image src={imageCarbono.src} alt="" width={100} height={100} />
                </div>
              </div>
            </div>
            <hr className="my-6 border-transparent relative w-full lg:border-white sm:mx-auto lg:my-8" />
            <div className="sm:flex md:flex-row flex flex-col-reverse gap-5  sm:items-center sm:justify-between">
              <span className="text-sm text-white sm:text-center">
                © 2024 | UX Group | Todos os direitos reservados. 
              </span>
              <Link className="md:ml[-20px] hover:underline" href="">
                Política de Privacidade
              </Link>
              <div className="flex mt-4 gap-5 sm:justify-center sm:mt-0">
                {redeSocial.map((data) => {
                  return (
                    <Link
                      key={data.index}
                      href={data.link}
                      target="_blank"
                      className="text-white hover:text-black hover:rounded-xl  transition-all hover:text-2xl "
                    >
                      <Image
                        src={data.image.src}
                        alt="Redes sociais UX"
                        className="hover:rounded-[8px]  transition-all"
                        width={30}
                        height={100}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
