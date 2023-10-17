import React from "react";
import { Link } from "react-router-dom";

export const Header = ({data}) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {data ? data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{data ? data.paragraph : "Loading"}</p>
                <Link
                  to={"/about"}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Voir Plus...
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
