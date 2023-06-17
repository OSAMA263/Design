import { Route, Routes, useLocation } from "react-router";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import LocationsPage from "./components/pages/Location/LocationsPage";
import Contact from "./components/pages/Contact/Contact";
import AppDesign from "./components/ProjectsPages/AppDesign/AppDesign";
import WebDesign from "./components/ProjectsPages/WebDesign/WebDesign";
import GraphicDesign from "./components/ProjectsPages/GraphicDesign/GraphicDesign";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} >
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<LocationsPage />} path="/locations" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<AppDesign />} path="/app" />
          <Route element={<WebDesign />} path="/web" />
          <Route element={<GraphicDesign />} path="/graphic" />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
