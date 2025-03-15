// App.jsx
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import Partners from "./pages/Partners";
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./pages/ServicePage";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { GlobalProvider } from "./context/GlobalContext";
import PopupModal from "./components/PopupModal";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasShownPopup = localStorage.getItem("hasShownPopup");
    if (!hasShownPopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem("hasShownPopup", "true");
    setShowPopup(false);
  };

  return (
    <Router>
      <GlobalProvider>
        {/* 1) Add `overflow-x-hidden` so no horizontal scrollbar can appear */}
        <div className="bg-[hsl(219,50%,5%)] min-h-screen flex flex-col font-barlow text-white overflow-x-hidden">
          {showPopup && <PopupModal onClose={handleClosePopup} />}

          <main className="flex-grow">
            <MainLayout>
              {/* The Header + your routes */}
              <div className="relative z-50">
              <Header />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy policy" element={<PrivacyPolicy />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceName" element={<ServicePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
              </Routes>
            </MainLayout>
          </main>
          <Footer />
        </div>
      </GlobalProvider>
    </Router>
  );
};

export default App;
