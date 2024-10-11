import { useState, useEffect } from "react";
//libs + hooks

import "./App.css";
//style

import Loader from "./components/Loader/Loader";
import Header from "./components/header/Header";
import Slides from "./components/Slides/Slides";
import SponsorBlock from "./components/SponsorBlock/SponsorBlock";
import Features from "./components/FeaturesBlock/Features";
import FeaturesCardSection from "./components/FeaturesCardSection/FeaturesCardSection";
import DocsSection from "./components/DocsSection/DocsSection";
import Brands from "./components/Brands/Brands";
import EmailForm from "./components/EmailForm/EmailForm";
import Footer from "./components/Footer/Footer";
// components

import slide1 from  "./sourceImg/img/slider/slide1.png";
import slide2 from "./sourceImg/img/slider/slide2.png";
import slide3 from "./sourceImg/img/slider/slide3.png";
//image icon and other unsorted file


export default function App() {
  const [loading, setLoading] = useState(true);

  const images = [ slide1, slide2, slide3 ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
        <>

          <Header />
          <Slides images={images} />
          <SponsorBlock />
          <Features />
          <FeaturesCardSection />
          <DocsSection />
          <Brands />
          <EmailForm />
          <Footer />

        </>
      )}

    </>
  );

}