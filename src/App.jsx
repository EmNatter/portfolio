import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Index from "./Pages/index.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Webshop from "./Pages/webshop.jsx";
import Festival from "./Pages/Festival.jsx";
import Coolbeans from "./Pages/Cool beans.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const navlinks = [
    { name: "HEM", url: "/" },
    {
      name: "KONTAKT",
      url: "mailto:natteremilia@gmail.com?subject=Portfolio%20Kontakt&body=Hej%20Emilia,%0D%0A%0D%0AJag%20vill%20komma%20i%20kontakt%20med%20dig%20ang%C3%A5ende...",
    },
    { name: "OM MIG", url: "/about" },
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
          <Route path="/festival" element={<Festival />} />
          <Route path="/coolbeans" element={<Coolbeans />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
