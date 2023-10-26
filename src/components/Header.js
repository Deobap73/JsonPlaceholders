import { memo } from "react";
import "./Header.css";

const Header = memo(() => {
  return (
    <header className="header">
      <div className="jsonplaceholder-wrapper">
        <a
          className="jsonplaceholder"
          href="https://jsonplaceholder.typicode.com/"
        >
          JSONPlaceholder
        </a>
      </div>
      <nav className="navbar">
        <div className="jsonplaceholder-wrapper">
          <a
            className="guide"
            href="https://jsonplaceholder.typicode.com/guide"
          >
            Guide
          </a>
        </div>
        <div className="jsonplaceholder-wrapper">
          <a
            className="sponsor-this-project"
            href="https://github.com/sponsors/typicode"
          >
            Sponsor this project
          </a>
        </div>
        <div className="jsonplaceholder-wrapper">
          <a className="sponsor-this-project" href="https://blog.typicode.com/">
            Blog
          </a>
        </div>
        <div className="jsonplaceholder-wrapper">
          <a
            className="sponsor-this-project"
            href="https://my-json-server.typicode.com/"
          >
            My JSON Server
          </a>
        </div>
      </nav>
    </header>
  );
});

export default Header;
