import "./SponsorsContainer.css";

const SponsorsContainer = () => {
  return (
    <section className="sponsors">
      <h2 className="sponsors1">Sponsors</h2>
      <p className="jsonplaceholder-is-supported-container">
        <span className="jsonplaceholder-is-supported-b">
          {`JSONPlaceholder is supported by the following companies and `}
          <a
            className="sponsors2"
            href="https://github.com/sponsors/typicode"
            target="_blank"
          >
            <span className="sponsors3">Sponsors</span>
          </a>{" "}
          on GitHub, check them out 💖
        </span>
      </p>
      <a className="mockend-1" target="_blank">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <img className="vector-icon3" alt="" src="/vector3.svg" />
        <img className="vector-icon4" alt="" src="/vector4.svg" />
        <img className="vector-icon5" alt="" src="/vector5.svg" />
        <img className="vector-icon6" alt="" src="/vector6.svg" />
        <img className="vector-icon7" alt="" src="/vector7.svg" />
        <img className="vector-icon8" alt="" src="/vector8.svg" />
        <img className="vector-icon9" alt="" src="/vector9.svg" />
      </a>
      <a className="sc-1" />
      <a
        className="your-company-logo"
        href="https://github.com/sponsors/typicode"
      >
        Your company logo here
      </a>
    </section>
  );
};

export default SponsorsContainer;
