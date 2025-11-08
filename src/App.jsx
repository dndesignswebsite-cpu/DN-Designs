import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/header';
import Footer from './components/footer'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Branding from "./pages/Branding";
import LogoDesigning from "./pages/LogoDesigning";
import PackagingDesign from "./pages/PackagingDesign";
import CatalogueDesigning from "./pages/CatalogueDesigning";
import BrandNameSuggestion from "./pages/BrandNameSuggestion";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/branding" element={<Branding/>}/>
      <Route path="/logo-designing" element={<LogoDesigning/>}/>
      <Route path="/packaging-design" element={<PackagingDesign/>}/>
      <Route path="/catalogue-designing" element={<CatalogueDesigning/>}/>
      <Route path="/brand-name-suggestion" element={<BrandNameSuggestion/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
