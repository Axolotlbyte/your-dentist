export default function Contact({ copyToClipboard }) {
  return (
    <>
      <div className="spacer"></div>
      <div className="w-full text-white bg-black">
        <p className="w-11/12 mx-auto text-4xl">CONTACT</p>
        <p className="p-2 w-11/12 mx-auto text-sm">
          Please feel free to contact us by filling out the form found on this
          page or call us at{" "}
          <span
            onClick={copyToClipboard}
            className="cursor-pointer text-sky-200"
          >
            <a href="tel:+15559365113" className="ui-link">
              (+1)-555-936-5113
            </a>
          </span>
          .
        </p>
      </div>
      <style jsx>{`
        .spacer {
          aspect-ratio: 900/300;
          width: 100%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-image: url("/waves-footer.svg");
        }
      `}</style>
    </>
  );
}
