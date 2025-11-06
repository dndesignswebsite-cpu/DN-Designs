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
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
