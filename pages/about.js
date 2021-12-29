import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function about() {

  const scrollToElement = () => {
    const element = document.getElementById("appointment");
    element.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  return (
    <Layout>
      <Navbar />
      <div className="ab-h flex  flex-col relative h-auto w-full container">
        <div className=" w-11/12 lg:w-9/12 self-center mt-24 rounded-lg mx-auto bg-white h-auto ">
          <div className="w-full py-16 text-center">
            <p className="text-xl font-bold">MEET</p>
            <p className="text-lg">
              <i>The Doctor</i>
            </p>
          </div>
          <hr className="w-11/12 mx-auto hr-grad bg-black" />
          <div className="flex justify-center py-12 w-full">
            <Image
              src="/dentist-stock.jpg"
              height="200"
              width="300"
              alt="dentist"
            />
          </div>
          <p className="font-semibold text-center">JOHN DOE THE DOC</p>
          <p className="px-4 md:px-6 pt-2 pb-8">
            Lord Ipsum ut hendrerit metus nibh, eget rutrum risus varius quis.
            Proin vel augue aliquam, luctus risus sit amet, sollicitudin velit.
            Nulla nisi lord, ultricies a metus ac, ornare suscipit enim. Proin
            auctor velit justo, quis rutrum tortor scelerisque in. Pellentesque
            leo nisl, semper a faucibus eget, placerat at turpis. Morbi quis
            eros ac lord mollis scelerisque vitae sed elit. Nulla sollicitudin
            erat orci, ac faucibus felis placerat sed. Curabitur congue lord a
            eros lobortis, non iaculis est rhoncus. Praesent varius tellus in
            est sollicitudin porta. Curabitur ornare ex nisi, vel lobortis odio
            tincidunt a.
            <br />
            <br />
            Phasellus placerat nulla vitae tellus feugiat posuere. Suspendisse
            sed dui maximus, blandit nibh ut, maximus orci. In at finibus augue.
            Nullam nisl lectus, posuere in augue eu, iaculis ultrices nulla. Sed
            nec neque fringilla, dapibus diam ut, egestas urna. Ut condimentum
            tempus massa, a ultricies quam volutpat id. Vestibulum quis placerat
            ante. Aliquam et sagittis nisi, semper scelerisque turpis. Nullam
            molestie suscipit turpis, ac gravida ipsum.
            <br />
            <br />
            Proin sed efficitur risus. In auctor pulvinar dignissim. Morbi et
            tempus eros. Vestibulum commodo malesuada ipsum. Phasellus sit amet
            ornare enim, a dapibus turpis. Curabitur congue lord a eros
            lobortis, non iaculis est rhoncus. Pellentesque imperdiet ipsum ac
            ornare malesuada.
          </p>
          <p className="text-center py-4 pb-8">
            <button onClick={scrollToElement} className="border-2 w-11/12 bg-sky-400 border-sky-400 text-white hover:bg-white hover:text-black rounded-l-full rounded-r-full p-2 px-4 mx-auto font-bold">REQUEST AN APPOINTMENT</button>
          </p>
        </div>
        <div className="self-bottom">
          <Contact />
        </div>
      </div>
      <section id="appointment" className="w-full">
        <Appointment />
      </section>
      <style jsx>{`
        .ab-h {
          min-height: 140vh;
        }
        .hr-grad {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 10%,
            rgba(162, 162, 162, 1) 25%,
            rgba(162, 162, 162, 1) 75%,
            rgba(255, 255, 255, 1) 90%
          );
        }
        .container {
          background-image: url("/reception.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
        }
      `}</style>
    </Layout>
  );
}
