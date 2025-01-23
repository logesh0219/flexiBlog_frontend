/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

const Header = ({ toggle, toggleTheme }) => {
  const [menubar, setMenubar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const toggleMenu = () => {
    setMenubar((prev) => !prev);
  };

  const toggleSearchBar = () => {
    setSearchBar((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflowY = menubar ? 'hidden' : 'auto';
    return () => (document.body.style.overflowY = 'auto');
  }, [menubar]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenubar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-blk paddingX">
          <div className="header-logo">
            <a href="/">
              {toggle ? (
                <img
                  src="https://flexiblog-education.netlify.app/static/bad5f02928a2842d0cf1f649d6f7d1da/edeef/logo-dark.webp"
                  alt="logo"
                />
              ) : (
                <img
                  src="https://flexiblog-education.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp"
                  alt="logo"
                />
              )}
            </a>
          </div>
          <SearchBar />
          <div className="d-flex align-center">
            <div className="header-link-container">
              <div className="header-link-wrapper">
                <ul className="header-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/tutors">Tutors</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="responsive-icons">
              <div
                className="search-bar-icon icon"
                onClick={toggleSearchBar}
              >
                <i class="bx bx-search"></i>
              </div>
              {searchBar && (
                <div className="search-bar-open">
                  <div className="search-bar-container">
                    <IoSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder="Discover news, articles and more..."
                      className="input-box"
                    />
                  </div>
                  <div className="search-bar-overlay" onClick={toggleSearchBar}></div>
                  <button onClick={toggleSearchBar} className='search-bar-close-btn'><i class='bx bx-x'></i></button>
                </div>
              )}
              <div className="toggle-icon icon" onClick={toggleTheme}>
                {toggle ? (
                  <i class="bx bxs-sun"></i>
                ) : (
                  <i class="bx bxs-moon"></i>
                )}
              </div>
              <div className="menu-bar icon" onClick={toggleMenu}>
                <i class="bx bx-menu"></i>
              </div>
            </div>
            <ul
              className={`toggle-switch ${toggle ? 'active' : ''}`}
              onClick={toggleTheme}
            >
              <li>
                {' '}
                <FaSun className="sun" />{' '}
              </li>
              <li>
                {' '}
                <FaMoon className="moon" />{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {menubar && (
        <div className="menu-bar-blk">
          <button className="menu-close-btn" onClick={toggleMenu}>
            <i class="bx bx-x menu-close-icon"></i>
          </button>
          <div className={`menu-bar-content ${menubar ? 'active' : ''}`}>
            <div className="menu-bar-container">
              <h2 className="menu-heading">Main Menu</h2>
              <div className="main-screen-page">
                <Link onClick={toggleMenu} to="/">
                  Home
                </Link>
                <Link onClick={toggleMenu} to="/tutors">
                  Tutors
                </Link>
                <Link onClick={toggleMenu} to="/contact">
                  Contact
                </Link>
              </div>
              <hr className="divider" />
              <h2 className="menu-heading">Topics</h2>
              <div className="main-screen-page">
                <Link to="">CSS3</Link>
                <Link to="">Gatsby</Link>
                <Link to="">JavaScript</Link>
                <Link to="">React</Link>
              </div>
            </div>
          </div>
          <div
            className={`menu-bar-overlay ${menubar ? 'active' : ''}`}
            onClick={toggleMenu}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
