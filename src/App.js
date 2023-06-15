import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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
import Products from "./pages/Product";
import { Viewjob } from "./pages/Viewjob";
import { Applyjob } from "./pages/Apply";
import ProductDetail from "./pages/ProjectDetail";
import ScrollToTop from "./ScrollToTop";
import ContactUsHoverButton from "./components/ContactUsHoverButton";
import AboutUsProvider from "./context/AboutUsContext";

function App() {
  return (
    <AboutUsProvider>
      <div>
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blogs/:id" element={<SpecificBlog />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/view-job/:id" element={<Viewjob />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/apply-job/:id" element={<Applyjob />} />
            <Route path="/project-detail" element={<ProductDetail />} />
          </Routes>
          {/* </ScrollToTop> */}
          <Footer />
        </Router>
        <ContactUsHoverButton />
      </div>
    </AboutUsProvider>
  );
}

export default App;
