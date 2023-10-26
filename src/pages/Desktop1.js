import Header from "../components/Header";
import MainCardForm from "../components/MainCardForm";
import SponsorsContainer from "../components/SponsorsContainer";
import ContainerTryIt from "../components/ContainerTryIt";
import ResourceContainer from "../components/ResourceContainer";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <Header />
      <MainCardForm />
      <SponsorsContainer />
      <ContainerTryIt />
      <section className="resources">
        <h2 className="when-to-use">When to use</h2>
        <p className="jsonplaceholder-is-a-container">
          <span className="jsonplaceholder-is-a-free-onli">
            <span className="jsonplaceholder-is-a">{`JSONPlaceholder is a free online REST API that you can use `}</span>
            <span className="whenever-you-need">
              whenever you need some fake data
            </span>
            <span>
              . It can be in a README on GitHub, for a demo on CodeSandbox, in
              code examples on Stack Overflow, ...or simply to test things
              locally
            </span>
          </span>
        </p>
      </section>
      <ResourceContainer />
    </div>
  );
};

export default Desktop1;
