import React from "react";
import Header from "../Header/Header";
import { CiLocationArrow1 } from "react-icons/ci";

const Error = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="error">
          <h1>Ohh <span>Shit!</span></h1>
          <p>you're lost</p>
          <p>
            back to homepage
            <span>
              <CiLocationArrow1 />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
