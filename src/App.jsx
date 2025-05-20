import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Banner from './components/banner/Banner';
import CardDetails from './components/cardDetails/CardDetails'


export default function App() {
  return (
    <>
      <Banner />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logement/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}
