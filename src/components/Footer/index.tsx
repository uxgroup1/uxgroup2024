import logoUX from "../../assets/ux-branco.svg";
import logoFacebook from "../../assets/Footer/logo-facebook.svg";
import logoInstagram from "../../assets/Footer/logo-instagram.svg";
import logoYoutube from "../../assets/Footer/logo-youtube.svg";
import logoLinkedIn from "../../assets/Footer/logo-linkedin.svg";
import Image from "next/image";

export default function Footer() {
  const redeSocial = [
    {
      index: 0,
      image: logoLinkedIn,
    },
    {
      index: 1,
      image: logoInstagram,
    },
    {
      index: 2,
      image: logoFacebook,
    },
    {
      index: 3,
      image: logoYoutube,
    },
  ];

  const pages = [
    {
      index: 0,
      name: "Gestão",
      products: [
        {
          namePage: "",
          url: "",
        },
      ],
    },
    {
      index: 1,
      name: "Logística",
      products: [
        {
          namePage: "",
          url: "",
        },
      ],
    },
    {
      index: 2,
      name: "ESG",
      products: [
        {
          namePage: "",
          url: "",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-black flex items-center justify-center text-white p-4 md:pt-10 w-full">
        <div className="flex items-center justify-between h-full w-[92%]">
        <div className="mx-auto w-full  md:p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src={logoUX.src}
                  className="h-11 me-3"
                  alt="Gestão e tecnologia"
                />
              </a>
            </div>
            <div className="flex md:flex-row flex-col pt-5 md:pt-0 md:grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
              {pages.map((data) => {
                return (
                  <div key={data.index} className="w-full">
                    <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                      {data.name}
                    </h2>
                    <ul className="flex flex-col text-gray-500 dark:text-gray-400 font-medium">
                      {data.products.map((product) => {
                        return (
                          <li key={data.index} className="mb-4">
                            <a
                              href={product.url}
                              className="text-white text-sm"
                            >
                              {product.namePage}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="my-6 border-transparent relative w-full lg:border-white sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center">
              © 2024{" "}
              <a href="#" className="hover:underline">
                UX Group
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {redeSocial.map((data) => {
                return (
                  <a 
                    key={data.index}
                    href="#"
                    className="text-white  hover:text-black hover:rounded-xl p-2 transition-all hover:text-2xl "
                  >
                    <Image
                      src={data.image.src}
                      alt="Facebook"
                      className="hover:rounded-[8px]  transition-all"
                      width={30}
                      height={100}
                    /> 
                  </a>
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
