import React from "react";

export const Services = ({data}) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Mes Services</h2>
          <p>
            Je vous offre mes services pour vous aider à concevoir une forte représentation visuelle.
          </p>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
