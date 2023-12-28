import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HeroSection} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
