import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Faq from "react-faq-component";

export default function faq() {
  const data = {
    title: (
      <p className="flex items-center">
        Frequently Asked Questions
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </p>
    ),
    rows: [
      {
        title: "Lorem ipsum dolor sit amet",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "risus turpis vulputate quam",
        content: (
          <p>
            Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. Sed
            dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus
            venenatis ultricies nibh in volutpat. Cras eu metus quis leo
            vestibulum feugiat nec sagittis lacus
          </p>
        ),
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <Layout>
      <Navbar />
      <div className="h-auto pt-20 w-11/12 mx-auto">
        <Faq data={data} styles={styles} config={config} />
      </div>
      <Contact />
      <section id="appointment">
        <Appointment />
      </section>
    </Layout>
  );
}
