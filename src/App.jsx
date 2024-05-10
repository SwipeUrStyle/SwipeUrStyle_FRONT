import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import HeaderPage from './components/HeaderPage';
import Options from './components/Options';
import ClothingSelector from './components/ClothingSelect';
import OutfitgridSave from './components/OutfitgridSave';
import OutfitGridWithLikes from './components/OutfitGridLikes';
import ClosetOptions from './components/ClosetOption';
import ClosetGrid from './components/ClosetGrid';
import AcountOptions from './components/AcountOptions';
import UserInfoGrid from './components/UserInfoGrid';
import ConfigurationsUser from './components/ConfigurationsUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <Hero />
              <Courses />
              <Reviews />
              <Footer />
            </div>
          } />
          <Route path="/Styling/*" element={
            <div>
              <HeaderPage />
              <Options />
              <Routes>
                <Route index element={<div></div>} />
                <Route path="Swipe ur syle" element={<ClothingSelector />} />
                <Route path="inspiration" element={<OutfitgridSave />} />
                <Route path="Ur favorites" element={<OutfitGridWithLikes />} />
              </Routes>
            </div>
          } />
          <Route path="/schedule" element={<div></div>} />
          <Route path="/closet/*" element={
            <div>
              <HeaderPage />
              <ClosetOptions />
              <Routes>
                <Route path="My Closet" element={<ClosetGrid />} />
                <Route path="Paper Bin" element={<div>Contenido de My Paper Bin</div>} />
              </Routes>
            </div>
          } />
          <Route path="/account*" element={
            <div>
              <HeaderPage />
              <AcountOptions />
              <Routes>
                <Route path="Account" element={<UserInfoGrid />} />
                <Route path="Configurations" element={<ConfigurationsUser />} />
              </Routes>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
