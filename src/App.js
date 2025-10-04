import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/o-sneni' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
