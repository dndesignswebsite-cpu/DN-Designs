import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/css/header.css';
const TRANSITION_DURATION = 1000; 

function header() {


   const [isAnimating, setIsAnimating] = useState(false); 
    const [isVisible, setIsVisible] = useState(false);
    
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleNav = () => {
        if (isAnimating) {
            setIsAnimating(false);
            
            setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflowY = 'auto';
            }, TRANSITION_DURATION); 

        } else {
            setIsVisible(true);
            document.body.style.overflowY = 'hidden';

            setTimeout(() => {
                setIsAnimating(true);
            }, 50); 
        }
    };
    
    const toggleSubMenu = (menuId) => {
        setOpenSubmenu(openSubmenu === menuId ? null : menuId);
    };

    const handleLinkClick = () => {
        if (isAnimating) {
            toggleNav(); 
            setOpenSubmenu(null);
        }
    };
    
    const handleSubmenuParentClick = (e, menuId) => {
        if (e.target.tagName !== 'A' && e.target.closest('A') === null) {
            toggleSubMenu(menuId);
        }
    };
    
    useEffect(() => {
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);


  return (
    <div>

            <header className="header container">
                <div className="logo">
                    <a href="./"><img src="https://dndesigns.co.in/wp-content/uploads/2019/02/cropped-dn_new-logolines.png" alt="DN Designs Logo" /></a>
                </div>
                
                <button
                    className={`nav-toggle-btn ${isAnimating ? 'is-active' : ''}`}
                    onClick={toggleNav}
                    aria-label="Toggle Navigation"
                    aria-expanded={isAnimating}
                ><span className="toggle-icon"></span>
                </button>
            </header>

            <nav 
                className={`full-screen-nav ${isAnimating ? 'is-open' : ''}`} 
                style={{ 
                    visibility: isVisible ? 'visible' : 'hidden',
                    pointerEvents: isVisible ? 'auto' : 'none'
                }}
            >
                <div className="container">
                <div className="nav-content-wrapper">
                    <ul className="nav-main-links">
                        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={handleLinkClick}>About Us</NavLink></li>
                        <li><NavLink to="/contact-us" onClick={handleLinkClick}>Contact</NavLink></li>
                        <li><NavLink to="/services" onClick={handleLinkClick}>Services</NavLink></li>
                        <li><NavLink to="/branding" onClick={handleLinkClick}>Branding</NavLink></li>
                        <li><NavLink to="/logo-designing" onClick={handleLinkClick}>Logo Designing</NavLink></li>
                    </ul>
                   
                </div>
                </div>
            </nav>
        </div>
  )
}

export default header
