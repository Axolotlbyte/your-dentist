import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [rotate, setRotate] = useState(true);

  const navItems = [
    { name: "SERVICES", link: "/services" },
    { name: "BEFORE-AFTER", link: "/before-after" },
    { name: "ABOUT", link: "/about" },
    { name: "FAQ", link: "/faq" },
  ];

  return (
    <nav
      className={
        "fixed z-50 w-full transition-all bg-slate-800" +
        (rotate ? " h-16" : " h-screen")
      }
    >
      <div className="flex top-0 w-full h-16">
        <Link href="/">
          <a className="w-11/12 md:w-auto pl-4 p-2 flex items-center">
            <span className="w-full flex items-center">
              <div className="w-max">
                <Image src={"/tooth.svg"} alt="logo" width={50} height={50} />
              </div>
              <span className="cursor-pointer text-2xl pl-3 font-bold flex items-center text-white">
                Y
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi mt-1 bi-emoji-smile"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                </span>
                UR DENTIST
              </span>
            </span>
          </a>
        </Link>
        <div className="text-white p-4 flex lg:w-9/12 lg:justify-end items-center">
          <button
            onClick={() => setRotate(!rotate)}
            className={"md:hidden " + (rotate ? " rotate active" : " rotate")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"h-8 w-8" + (rotate ? " rotate" : " hidden")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"h-8 w-8" + (rotate ? " hidden" : "")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navItems.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <a className="p-1 px-4 hover:bg-slate-500 rounded-l-full rounded-r-full hidden z-50 lg:flex cursor-pointer text-lg font-semibold w-auto text-center">
                  {item.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={"grid text-white" + (rotate ? " hidden" : "")}>
        <hr />
        {navItems.map((item) => {
          return (
            <>
              <Link
                onClick={() => setRotate(!rotate)}
                href={item.link}
                key={item.name}
              >
                <a>
                  <div className="py-1 cursor-pointer text-2xl font-semibold w-full text-center">
                    {item.name}
                  </div>
                </a>
              </Link>
              <hr />
            </>
          );
        })}
      </div>
      <style jsx>{`
        .rotate {
          transform: rotate(180deg);
          transition: transform 200ms;
        }
        .rotate.active {
          transform: rotate(-180deg);
          transition: transform 200ms;
        }
      `}</style>
    </nav>
  );
}
