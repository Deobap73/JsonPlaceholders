import "./ContainerTryIt.css";

const ContainerTryIt = () => {
  return (
    <section className="truit">
      <h2 className="try-it">Try it</h2>
      <p className="run-this-code-container">
        <span className="run-this-code">
          Run this code here, in a console or from any site:
        </span>
      </p>
      <div className="fetch-wrapper">
        <code className="fetch">fetch</code>
      </div>
      <button className="run-script-wrapper">
        <div className="run-script">Run script</div>
      </button>
      <div className="fetch-wrapper">
        <code className="fetch1">fetch</code>
      </div>
    </section>
  );
};

export default ContainerTryIt;
