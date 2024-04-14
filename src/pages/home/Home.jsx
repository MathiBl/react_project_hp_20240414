import { Link } from "react-router-dom";
import("../home/Home.css");

const Home = () => {
  return (
    <div className="introduction">
      <h1>Welcome to the Harry Potter fan page!</h1>
      <p>
        This is the first version, where you can view{" "}
        <Link to="/gallery">gallery of characters</Link> created by the author
        J.K Rowling.
      </p>
      <p>
        Soon you will be able to create your own character. To do this, you will
        need to <a href="#">log in</a>.
      </p>
      <p>
        In addition, more information about the characters will soon be
        available in the gallery.
      </p>
      <h3>Enjoy!</h3>
    </div>
  );
};

export default Home;
