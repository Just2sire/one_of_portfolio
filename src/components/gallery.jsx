import { Image } from "./image";
import React from "react";

export const Gallery = ({data}) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projets</h2>
          <p>
            Je vous présente ici quelques uns de mes projets.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data ? data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4" >
                    <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
