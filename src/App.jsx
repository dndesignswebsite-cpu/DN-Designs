import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/header';
import Footer from './components/footer'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Branding from "./pages/Branding";
import LogoDesigning from "./pages/LogoDesigning";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/branding" element={<Branding/>}/>
      <Route path="/logo-designing" element={<LogoDesigning/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
