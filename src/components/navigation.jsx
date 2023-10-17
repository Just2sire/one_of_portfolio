import React from "react";
import { Link } from "react-router-dom";

export const Navigation = ({data}) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to={'/'}>
            Desiré Portfolio
          </Link>{" "}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <Link to={'/features'} className="page-scroll">
                Features
              </Link>
            </li> */}
            <li>
              <Link to={'/about'} className="page-scroll">
                À propos
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="page-scroll">
                Services
              </Link>
            </li>
            <li>
              <Link to={'/portfolio'} className="page-scroll">
                Projets
              </Link>
            </li>
            <li>
              <Link to={'/testimonials'} className="page-scroll">
                Témoignages
              </Link>
            </li>
            <li>
              <Link to={'/team'} className="page-scroll">
                Équipe
              </Link>
            </li>
            <li>
              <Link to={'/contact'} className="page-scroll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
