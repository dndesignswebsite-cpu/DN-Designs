import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/header';
import Home from "./Home"
import About from "./About"
import Contact from "./Contact";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
