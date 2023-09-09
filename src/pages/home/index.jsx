import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="landing__container">
      <h1 className="intro">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="intro__details">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
      <div className="buttons">
        <Link to="/installation">Get Started</Link>
      </div>
    </div>
  );
};
