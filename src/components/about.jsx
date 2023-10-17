import React from "react";
import JsonData from "../data/data.json";
import { Features } from "./features";
import { useEffect, useState } from "react";

export const About = ({data, data2}) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, [])
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 mb-4">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6 mb-4">
            <div className="about-text">
              <h2>À propos</h2>
              <p>{data ? data.paragraph : "loading..."}</p>
              <h3>Mes compétences</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data ? data.Why.map((d, i) => ( <li key={`${d}-${i}`}>{d}</li> )) : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data ? data.Why2.map((d, i) => ( <li key={`${d}-${i}`}> {d}</li> )) : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            {/* <div class="progress-bars">
              <div class="clearfix">
                  <div class="number float-left">Front-End</div>
                  <div class="number float-right">75%</div>
              </div>
              <div class="clearfix">
                  React
              </div>
              <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: 75}} data-val="75" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="clearfix">
                <div class="number float-left">
                    <h1>Aucune compétence actuellement</h1>
                </div>
              </div>
            </div> */}
            <Features data={landingPageData.Features} />
          </div>
        </div>
      </div>
    </div>
  );
};
