import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './myComponents/layouts/navbar';
// import Home from './myComponents/content/home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useEffect, useState } from 'react';

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
          <div>
            <Routes>
              <Route path="/" element={<Header data={landingPageData.Header} data2={landingPageData.Features} />} />
              {/* <Route path="/features" element={<Features data={landingPageData.Features} />} /> */}
              <Route path="/about" element={<About data={landingPageData.About} />} />
              <Route path="/services" element={<Services data={landingPageData.Services} />} />
              <Route path="/portfolio" element={<Gallery data={landingPageData.Gallery} />} />
              <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
              <Route path="/team" element={<Team data={landingPageData.Team} />} />
              <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
