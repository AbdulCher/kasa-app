import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

import Banner from './components/Banner';
import CardDetails from './components/CardDetails'


export default function App() {
  return (
    <>
      <Banner />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/logement/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}
