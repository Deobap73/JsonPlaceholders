import "./ResourceContainer.css";

const ResourceContainer = () => {
  return (
    <section className="whentouse">
      <h2 className="resources1">Resources</h2>
      <p className="jsonplaceholder-comes-with-container">
        <span className="jsonplaceholder-comes-with">
          JSONPlaceholder comes with a set of 6 common resources:
        </span>
      </p>
      <div className="frame-parent">
        <div className="posts-parent">
          <a className="posts">
            <p className="posts1">/posts</p>
          </a>
          <h3 className="posts2">
            <p className="posts1">100 posts</p>
          </h3>
        </div>
        <div className="posts-parent">
          <a className="posts">
            <p className="posts1">/comments</p>
          </a>
          <h3 className="posts2">
            <p className="posts1">500 comments</p>
          </h3>
        </div>
        <div className="posts-parent">
          <a className="posts">
            <p className="posts1">/albums</p>
          </a>
          <h3 className="posts2">
            <p className="posts1">100 albums</p>
          </h3>
        </div>
        <div className="posts-parent">
          <a className="posts">
            <p className="posts1">/photos</p>
          </a>
          <h3 className="posts2">
            <p className="posts1">5000 photos</p>
          </h3>
        </div>
        <div className="posts-parent">
          <a className="posts">
            <p className="posts1">/todos</p>
          </a>
          <h3 className="posts2">
            <p className="posts1">200 todos</p>
          </h3>
        </div>
        <div className="posts-parent">
          <a className="posts">
            <p className="posts1">/users</p>
          </a>
          <h3 className="posts2">
            <p className="posts1">10 users</p>
          </h3>
        </div>
      </div>
      <p className="note-resources-have-container">
        <span className="note">Note:</span>
        <span>
          {` resources have relations. For example: posts have many comments, albums have many photos, ... see `}
        </span>
        <a
          className="guide1"
          href="https://jsonplaceholder.typicode.com/guide"
          target="_blank"
        >
          <span>
            <span className="guide2">guide</span>
          </span>
        </a>
        <span> for the full list.</span>
      </p>
    </section>
  );
};

export default ResourceContainer;
