import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [flip, setFlip] = useState(false);

  const textchangeHandler = () => {
    setFlip(!flip);
  };
  return (
    <div>
      <div className="frontheader">
        <div className="module_container">
          <img src="./images/frontpage.jpeg" alt="front" width="100%" />
        </div>
        <div className="module_container_text">
          <div className="base1">
            {!flip && <h2>Lorem ipsum dolor</h2>}
            {!flip && (
              <p>
                Lorem ipsum dolorsit amet consectetur, adipisicing elit.
                Excepturi sit eaque, exercitationem praesentium ad nulla quasi
                ratione distinctio repellat, omnis debitis veritatis neque
                dolorem officia ut aliquip ex ea commodo consequat.
              </p>
            )}
            <div className="base12">
            {flip && <Link to="/mainpage"><h3>Module One</h3></Link>}
            </div>
            <div className="base12">
            {flip && <Link to="/page2"><h3>Module Two</h3></Link>}
            </div>
            <div className="base12">
            {flip && <Link to="/page3"><h3>Module Three</h3></Link>}
            </div>
            <div className="base12">
            {flip && <Link to="/page4"><h3>Module Four</h3></Link>}
            </div>
            <div className="base12">
            {flip && <Link to="/page5"><h3>Module Five</h3></Link>}
            </div>
            <button className="btn_module" onClick={textchangeHandler}>
              {flip ?'Select Module':'Enter'}
            </button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
