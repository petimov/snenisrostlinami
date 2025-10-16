import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'
import Byliny from "./components/Byliny";
import Apoteka from "./components/Apoteka";
import CajoveSmesi from "./components/CajoveSmesi";
import CyklusZeny from "./components/CyklusZeny";
import Template from "./components/Template";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
      <Template />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/o-sneni' element={<About />} />
          <Route path='/byliny' element={<Byliny />} />
          <Route path='/apoteka' element={<Apoteka />} />
          <Route path='/cajove-smesi' element={<CajoveSmesi />} />
           <Route path='/cajove-smesi/cyklus-zeny' element={<CyklusZeny />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
