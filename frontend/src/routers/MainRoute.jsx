import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Loader from "../components/Loader";
import ScrollToHashElement from "../components/ScrollToHashElement";
import Service from "../components/Service";
import Disclaimer from "../pages/Disclaimer";
import AlphaOverv from "../components/AlphaOverv";
import TurboOverv from "../components/TurboOverv";
import ComboOverv from "../components/ComboOverv";

// Lazy loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const News = React.lazy(() => import("../pages/News"));
const Learn = React.lazy(() => import("../pages/Learn"));
const About = React.lazy(() => import("../pages/About"));
const Policy = React.lazy(() => import("../pages/Policy"));
const ResearchPara = React.lazy(() => import("../components/ResearchPara"));


const MainRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />

      {/* This component handles auto-scrolling to hash sections */}
      <ScrollToHashElement />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/About" element={<About />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/ResearchPara" element={<ResearchPara />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/Alpha" element={<AlphaOverv />} />
          <Route path="/Turbo" element={<TurboOverv />} />
          <Route path="/Combo" element={<ComboOverv />} />
        </Routes>
      </Suspense>

      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoute;
