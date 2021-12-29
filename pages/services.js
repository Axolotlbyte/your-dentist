import Image from "next/image";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Services() {
  const serviceArr = [
    {
      name: "Dental Crowns",
      img: "/services/crowns.jpeg",
      desc: "Over time, your teeth can get damaged. This can happen for a variety of reasons, like tooth decay, injuries or just use over time. Your teeth can lose their shape or size. Dental crowns are tooth-shaped “caps” that can be placed over your tooth. ",
    },
    {
      name: "Impacted Wisdom Teeth Removal",
      img: "/services/wisdom.jpeg",
      desc: "Impacted wisdom teeth. Impacted wisdom teeth Wisdom teeth are the last of your teeth to appear (erupt) in the mouth. Sometimes a wisdom tooth becomes stuck below the surface of your gums (impacted), and grows at an odd angle, possibly causing complications.",
    },
    {
      name: "Bridgework",
      img: "/services/bridgework.jpeg",
      desc: "A bridge is a fixed dental restoration (a fixed dental prosthesis) used to replace one or more missing teeth by joining an artificial tooth definitively to adjacent teeth or dental implants.",
    },
    {
      name: "Dentures",
      img: "/services/dentures.jpeg",
      desc: "Dentures are prosthetic devices constructed to replace missing teeth, and are supported by the surrounding soft and hard tissues of the oral cavity. Conventional dentures are removable",
    },
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
      <Navbar />
      <div className="h-auto grid gap-2 pt-16 w-full">
        <p className="text-2xl p-2 w-11/12 mx-auto font-bold">SERVICES</p>
        {serviceArr.map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col sm:flex-row w-11/12 mx-auto p-2 mt-2 rounded-lg border shadow-md hover:scale-105 transition-transform"
            >
              <div className=" w-11/12 sm:w-3/12 flex-shrink-0">
                <div className="relative rounded h-40 lg:h-64 bg-slate-600">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    alt={"informational " + item.name}
                  />
                </div>
              </div>
              <div className="px-4 md:text-base text-sm pb-2">
                <p className="text-lg font-semibold ">{item.name}</p>
                {item.desc}
              </div>
              <button onClick={scrollToElement} className="p-2 border-2 border-collapse font-bold text-white bg-sky-400">REQUEST AN APPOINTMENT</button>
            </div>
          );
        })}
      </div>
      <Contact />
      <section id="appointment">
        <Appointment />
      </section>
    </Layout>
  );
}