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
import { CardsPage } from './pages/CardsPage';
import { YaPage } from './pages/YaPage';
import WatchesPage from './pages/WatchesPage';
import NotesPage from './pages/NotesPage';
import { TimePage } from './pages/TimePage';
import { Highlight } from './pages/Highlight';
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
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/yandex" element={<YaPage />} />
        <Route path="/watches" element={<WatchesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="/highlight" element={<Highlight />} />
      </Routes>
    </>
  );
}

export default App;
