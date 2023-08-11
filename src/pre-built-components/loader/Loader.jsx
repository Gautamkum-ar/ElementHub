import { Codeshare } from "../../component/codeshare/Codeshare";
import "../loader/Loader.css";

export const Loader = () => {
  return (
    <div className="loader__main">
      <h1>Loader</h1>
      <p>
        Loader are used to show loading screen while data are loading and taking
        time. it is used to show that something happening for better experience
        of user.{" "}
      </p>
      <h3>Usage</h3>
      <div className="show__loader">
        <div className="loader">
          <div className="loader-inside"></div>
        </div>
        <div className="loader-sec">
          <div className="loader-inside-sec"></div>
        </div>
      </div>
      <p>To achive these above style you have to follow the following code.</p>
      <Codeshare
        code={` //for loader 
        <div className="loader">
          <div className="loader__inside"></div>
        </div>
        // for secondary loader
        <div className="loader-sec">
          <div className="loader-inside-sec"></div>
        </div>
        `}
      />
    </div>
  );
};
