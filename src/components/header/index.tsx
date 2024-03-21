import { useState } from "react";
import logoUx from "../../assets/ux-branco.svg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="bg-black fixed flex items-center justify-center z-50  top-0 w-full px-1 md:px-4 border-gray-200">
        <div className="flex items-center justify-center h-full w-[92%] max-w-[1996px]">
          <div className="flex w-full flex-wrap justify-between items-center mx-auto  py-5">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logoUx.src} className="h-8" alt="Flowbite Logo" />
            </a>
            <button
              onClick={handleOpenClick}
              data-collapse-toggle="mega-menu-full-image"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:font-bold  "
              aria-controls="mega-menu-full-image"
              aria-expanded={openMenu ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              id="mega-menu-full-image"
              className={`items-center justify-between ${
                openMenu ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                  <a
                    href="/"
                    className="flex items-center justify-between w-full bg-transparent font-normal py-2  border-b md:w-auto md:hover:bg-transparent md:border-0 text-white md:hover:font-medium md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/logistica"
                    className="flex items-center justify-between w-full bg-transparent font-normal py-2  border-b md:w-auto md:hover:bg-transparent md:border-0 text-white md:hover:font-medium md:p-0 "
                    aria-current="page"
                  >
                    Logística
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleOpenClick}
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full bg-transparent font-normal py-2  border-b md:w-auto md:hover:bg-transparent md:border-0 text-white md:hover:font-medium md:p-0 "
                  >
                    Gestão
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {openMenu && (
            <div
              id="mega-menu-full-image-dropdown"
              className="mt-1 bg-black w-full absolute top-40 md:top-16 left-0 md:border-t-white md:border-t"
            >
              <div className="grid bg-black max-w-[85%] md:max-w-[90%] py-5 mx-auto text-sm text-red-400  md:grid-cols-2 md:px-0">
                <ul className="mb-4 space-y-4 md:mb-0">
                  <li>
                    <a href="#" className="font-normal hover:font-medium">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-normal hover:font-medium">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-normal hover:font-medium">
                      License
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-normal hover:font-medium">
                      Resources
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light "
                >
                  <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
                    Preview the new Flowbite dashboard navigation.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                  >
                    Get started
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
