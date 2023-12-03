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
        <li
          className="side-menu-item"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1eecz71GD59uQEKrB8UUV8xxXMJpVyLS8/view?fbclid=IwAR1Tzd19tlRSoUhk124rVEOZw5y68Pf87oOZbSOQrEVIJzdsvg22C1FTt44',
            )
          }
        >
          CV
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
