import { Routes, Route } from 'react-router-dom';
import { NavList } from './components/NavList';
import { Store } from './pages/Store';
import { Portfolio } from './pages/Portfolio';
import { HomePage } from './pages/HomePage';
import { Converter } from './pages/Converter';
import { StepsPage } from './pages/StepsPage';
import { StarRating } from "./pages/StarRating";
import { ListingPage } from "./pages/ListingPage";
import { FormPage } from "./pages/FormPage";
import Nav from './components/data/Nav';

import './App.css';
import './css/reset.css';
import './css/header.css';

function App() {
  const nav = new Nav();

  return (
    <>
      <NavList items={nav.links} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/store" element={<Store />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/steps" element={<StepsPage />} />
        <Route path="/stars" element={<StarRating />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
