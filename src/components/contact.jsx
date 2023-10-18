import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = ({ data }) => {

  const [{ name, email, message }, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(name, email, message);
    const data = {
      nom: name,
      email,
      message
    }

    fetch("http://localhost:1000/message/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      }).then(response => {
          return response.json()
      }).then(res => {
          setResult(res.ans);
          setIsLoading(false);
          clearState();
      }).catch(err => {
          setError(err.message);
          setIsLoading(false);
      });
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              {isLoading && <div className="loader">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              }
              <div className="section-title">
                <h2>Me contacter</h2>
                <p>
                  Laisser votre message et je vous répondrai le plus vite possible par Mail.
                </p>
              </div>
              { !isLoading && <form name="sentMessage" validate={"true"} onSubmit={HandleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form> }
              { result && <div className="alert alert-success h4"> {result} </div> }
              { error && <div className="alert alert-danger h4">{error}</div>}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>
                {data ? data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Numéro
                </span>{" "}
                {data ? data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {data ? data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={data ? data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Desiré Portfolio. Design by{" "}
            <a href="http://localhost:3000" rel="nofollow">
              DesiCode
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
