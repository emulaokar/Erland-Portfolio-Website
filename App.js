import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/menu" element = {<Projects/>}/>
          <Route path="/about" element = {<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
