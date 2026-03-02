// import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Software from "./components/Software";
// import CyberSecurity from "./components/CyberSecurity";
// import Internship from "./components/Internship";
// import Workshops from "./components/Workshops";
// import Footer from "./components/Footer";
// import TopInternships from "./components/TopInternships";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./App.css";

// function App() {

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Home />
//       <TopInternships/>
//       <Software />
//       <CyberSecurity />
//       <Internship />
//       <Workshops />
//       <Footer />
//     </>
//   );
// }

// export default App;



import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Software from "./pages/Software";
import CyberSecurity from "./components/CyberSecurity.js";
import Internship from "./pages/Internship";
import Workshops from "./pages/Workshops";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import About from "./pages/About";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/software" element={<Software />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;