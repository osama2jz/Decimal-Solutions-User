import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/generic/Footer";
import Header from "./components/generic/Header";

// Pages import
import Homepage from "./pages/Homepage";
import OurServices from "./pages/OurServices";
import AllBlogs from "./pages/AllBlogs";
import SpecificBlog from "./pages/SpecificBlog";
import About from "./pages/About";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:id" element={<SpecificBlog />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
