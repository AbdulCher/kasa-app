import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Header from './components/header/Header';
import Accommodation from "./pages/accommodation/Accommodation";
import Footer from './components/footer/Footer';




export default function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>
      
      <Footer />
    </>
  );
}
