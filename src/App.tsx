import { Route, Routes, useLocation } from "react-router";

import AmbientBackground from "@/components/common/AmbientBackground";
import ScrollToTop from "@/components/common/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Portfolio from "@/pages/Portfolio";
import Pricing from "@/pages/Pricing";
import Services from "@/pages/Services";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">
      <AmbientBackground showOrbital={location.pathname === "/"} />
      <ScrollToTop />
      <Header />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
