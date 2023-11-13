import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import AboutPage from './AboutMePage/AboutPage';
import Footer from './Footer/Footer';
import FooterMobile from './Footer/FooterMobile';
import Header from './Header';
import MainPage from './MainPage/MainPage';
import ProjectPage from './ProjectPage/ProjectPage';
import SideMenu from './SideMenu';

const App: React.FC = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 675);
    };
    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <>
      <Header openSideMenu={setOpenSideMenu} />
      {openSideMenu && <SideMenu />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project/:id" element={<ProjectPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
};

export default App;
