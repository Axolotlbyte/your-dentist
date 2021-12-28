import Layout from "../components/Layout";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [rotate, setRotate] = useState(true);
  const navItems = [
    { name: "SERVICES", link: "/services" },
    { name: "BEFORE-AFTER", link: "/before-after" },
    { name: "ABOUT", link: "/about" },
    { name: "FAQ", link: "/faq" },
  ];

  //   const handleScroll = () => {
  //     const height = window.innerHeight
  //     if (window.scrollY > height) {
  //       document.getElementById("navbar").className = "fixed top-0 z-50 bg-slate-800 w-full h-10 transition-all";
  //     } else {
  //       document.getElementById("navbar").className = "bg-slate-800 w-full h-10 transition-all";
  //     }
  // };

  // useEffect(() => {
  //     window.addEventListener("scroll", handleScroll)
  // },[])

  const serviceItems = [
    { name: "MEET THE DOCTOR", src: "/icons/dentist.svg", h: 100, w: 100 },
    { name: "SERVICES", src: "/icons/services.svg", h: 100, w: 100 },
    { name: "BEFORE & AFTER", src: "/icons/before-after.svg", h: 100, w: 100 },
    {
      name: "EXPERIENCED & FRIENDLY STAFF",
      src: "/icons/chatting-talk.svg",
      h: 100,
      w: 100,
    },
    {
      name: "GREAT COSTUMER SERVICE",
      src: "/icons/customer-service.svg",
      h: 100,
      w: 100,
    },
    { name: "FAQ", src: "/icons/faq.svg", h: 100, w: 100 },
  ];

  const copyToClipBoard = () => {
    //Use the clipboard's writeText method to pass the inputs text to the clipboard
    navigator.clipboard.writeText("(+1)-555-936-5113").then((res) => {
      console.log("Input data copied to clipboard successfully");
      toast.success("Copied To Clipboard!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  const scrollToElement = () => {
    const element = document.getElementById("appointment");
    element.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="w-full h-screen relative intro">
        <nav className=" flex absolute w-full justify-between p-2 items-center ">
          <span className="w-full flex justify-center md:justify-start items-center">
            <div className="w-max p-2 mt-2">
              <Image src={"/tooth.svg"} alt="logo" width={100} height={100} />
            </div>
            <span className="cursor-pointer text-5xl hidden pl-8 font-bold md:flex items-center text-white">
              Y
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
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
            <span className="cursor-pointer text-3xl md:hidden pl-8 font-bold grid items-center text-white">
              <span className="flex">
                Y
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi mt-2 bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
                UR
              </span>
              DENTIST
            </span>
          </span>

          <span className="hidden w-full items-center justify-end text-right md:flex">
            {/* <Link href="/services">
              <a>
                <button className="text-xl hover:underline p-2 mx-4 font-bold text-white">
                  SERVICES
                </button>
              </a>
            </Link> */}
            <button
              onClick={copyToClipBoard}
              className="text-xl p-2 px-4 rounded-l-full rounded-r-full bg-white mx-4 font-bold text-sky-600 hover:border-white hover:text-white hover:border-2 border-collapse box-border hover:bg-black hover:bg-opacity-30"
            >
              CALL
              <a href="tel:+15559365113" className="ui-link">
                (+1)-555-936-5113
              </a>
            </button>
          </span>
        </nav>
        <div className="w-full h-full items-center justify-center flex">
          <button
            onClick={scrollToElement}
            className="cursor-pointer font-extrabold z-50 rounded p-2 active:scale-95 transition-transform px-4 text-lg md:text-2xl h-14 bg-black bg-opacity-30 text-white border-collapse border-2 border-white"
          >
            REQUEST AN APPOINTMENT
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.ca/maps/search/++++++++++++3483+Red+Hawk+Road,+Kensington,+Minnesota/@45.7779592,-95.7066502,15z/data=!3m1!4b1"
            className="flex items-center absolute right-2 bottom-2"
          >
            <span className="text-sm px-2 bg-black bg-opacity-30 rounded-l-full">
              3483 Red Hawk Road, Kensington, Minnesota
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <nav className={" bg-slate-800 w-full h-auto transition-all"}>
        <div className="text-white w-full h-12 flex text-center justify-center items-center">
          <button
            onClick={() => setRotate(!rotate)}
            className={"md:hidden " + (rotate ? " rotate active" : " rotate")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"h-6 w-6" + (rotate ? " rotate" : " hidden")}
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
              className={"h-6 w-6" + (rotate ? " hidden" : "")}
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
                <a className="hover:bg-slate-600 mx-4 px-4 rounded-l-xl rounded-r-xl hidden z-50 lg:grid cursor-pointer text-base font-semibold text-center">
                  {item.name}
                </a>
              </Link>
            );
          })}
        </div>
        <div
          className={"lg:hidden grid text-white" + (rotate ? " hidden" : "")}
        >
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
      </nav>
      <section className="h-auto w-full grid">
        <div className="py-4 mt-6 w-full text-center text-5xl font-semibold">
          <p className="text-slate-700">YOUR SMILE IS AMAZING!</p>
          <hr className=" w-1/6 mx-auto bg-cyan-500 h-1.5 my-5" />
          <p className="text-base mx-auto w-4/6">
            We love your smile & would do our best to make it better!
            <br />
            We will provide you all that’s needed to make you sparkle!
          </p>
        </div>
        <div className="grid gap-4 w-11/12 mx-auto gap-y-12 my-14 text-center mt-16 md:grid-cols-2 lg:grid-cols-3 ">
          {serviceItems.map((item) => {
            return (
              <div
                key={item.name}
                className="cursor-pointer hover:scale-105 transition-transform rounded-lg p-4 border-slate-400 shadow-md"
              >
                <Image
                  src={item.src}
                  height={item.h}
                  width={item.w}
                  alt={item.name}
                />
                <p className="font-semibold">{item.name}</p>
              </div>
            );
          })}
        </div>
        <hr className=" w-10/12 mx-auto bg-cyan-500 h-1 my-4" />
        <p className="md:px-4 w-10/12 mx-auto md:w-full text-2xl font-bold mt-16">
          ABOUT US
        </p>
        <div className="md:flex grid px-4 w-full h-auto">
          <div className="md:w-3/12 w-11/12 mx-auto my-4 flex items-start">
            <img
              className="w-full rounded-lg h-auto"
              src="/dentist-stock.jpg"
              alt="dentist"
            />
          </div>
          <div className="md:w-9/12 w-11/12 mx-auto mt-3 flex items-start justify-center px-2">
            <p className="text-sm md:text-base">
              Lord Ipsum etiam nec massa dictum, dictum nulla ut, consequat
              neque. Nullam eget bibendum nisi. Mauris suscipit varius erat sit
              amet vulputate. Nullam at lord et felis lobortis viverra sed ut
              urna. Donec ac orci risus. Donec eget hendrerit sapien, malesuada
              viverra nunc. Donec mollis sapien vitae felis ullamcorper
              pellentesque.Quisque sollicitudin in lectus in dapibus. Curabitur
              ornare ex nisi, vel lobortis odio tincidunt a.. Pellentesque
              volutpat dolor sit amet diam vulputate, eu lacinia libero
              molestie. In sed dui id dolor varius tincidunt. Aenean a posuere
              diam. In sit amet sem lord. Mauris ut sagittis ipsum, sagittis
              ornare nunc.
            </p>
          </div>
        </div>
      </section>
      <Contact copyToClipboard={copyToClipBoard} />
      <section id="appointment">
        <Appointment />
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <style jsx>{`
        .rotate {
          transform: rotate(180deg);
          transition: transform 200ms;
        }
        .rotate.active {
          transform: rotate(-180deg);
          transition: transform 200ms;
        }
        .spacer {
          aspect-ratio: 900/300;
          width: 100%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-image: url("/waves(2).svg");
        }
        .intro {
          background-image: url("/reception.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
        }
        .intro:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-image: linear-gradient(to bottom, black 1%, #00000000);
          opacity: 0.7;
        }
      `}</style>
    </Layout>
  );
}
