import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Index from "./Pages/index.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Webshop from "./Pages/webshop.jsx";
import Redesign from "./Pages/Redesign.jsx";
import DarkMode from "./Pages/DarkMode.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const navlinks = [
    { name: "HOME", url: "/" },
    {
      name: "CONTACT",
      url: "mailto:natteremilia@gmail.com?subject=Portfolio%20Contact&body=Hi%20Emilia,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding...",
    },
    { name: "ABOUT", url: "/about" },
  ];

  return (
    <div className="app-container">
      <Header links={navlinks} />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/webshop" element={<Webshop />} />
          <Route path="/redesign" element={<Redesign />} />
          <Route path="/darkmode" element={<DarkMode />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
