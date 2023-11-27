import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface SideMenuProps {
  setOpenSideMenu: (e: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ setOpenSideMenu }) => {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target as Node)
      ) {
        setOpenSideMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setOpenSideMenu]);

  return (
    <div className="side-menu" ref={sideMenuRef}>
      <ul className="side-menu-items">
        <Link to={'/'}>
          <li className="side-menu-item">Pagrindinis</li>
        </Link>
        <Link to={'/About'}>
          <li className="side-menu-item">Apie</li>
        </Link>
        <li className="side-menu-item">CV</li>
      </ul>
    </div>
  );
};

export default SideMenu;
