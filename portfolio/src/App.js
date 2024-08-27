import {Route, Routes} from 'react-router-dom';
import './App.css';
import About from "./components/About/About";
import Blog from "./components/Blogs/Blog";
import Footer from "./components/Footer/Footer";
import IntroductionPage from "./components/IntroductionPage/IntroductionPage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<IntroductionPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={ <Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
