import "./MainCardForm.css";

const MainCardForm = () => {
  return (
    <main className="main">
      <div className="json-placeholder">{`{JSON} Placeholder`}</div>
      <div className="free-fake-api">
        Free fake API for testing and prototyping.
      </div>
      <a className="powered-by-parent">
        <div className="free-fake-api">{`Powered by `}</div>
        <a
          className="json-server"
          href="https://github.com/typicode/json-server"
        >
          JSON Server
        </a>
        <div className="free-fake-api"> +</div>
        <a className="lowdb" href="https://github.com/typicode/lowdb">
          {` `}
          <span className="lowdb1">LowDB</span>.
        </a>
        <div className="free-fake-api"> Tested with</div>
        <a className="json-server" href="https://github.com/typicode/xv">
          XV.
        </a>
      </a>
      <b className="serving-2-billion">
        Serving ~2 billion requests each month.
      </b>
    </main>
  );
};

export default MainCardForm;
