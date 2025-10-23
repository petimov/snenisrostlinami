import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import gsap from 'gsap'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const location = useLocation();
  const navRef = useRef(null);

  // Check if current route is home
  const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/o-sneni';
    const isByliny = location.pathname === '/byliny';
    const isApoteka = location.pathname === '/apoteka';

  const animateHamburgerOpen = () => {
  const tl = gsap.timeline()
  tl.set('.banner', { y: '0%' })
  tl.to('.banner', {
    y: '-100%',
    duration: 0.8,
    stagger: 0.07,
    ease: 'power2.out'
  })
}

const animateHamburgerClose = () => {
  const tl = gsap.timeline()
  tl.to('.banner', {
    y: '0%',
    duration: 0.8,
    stagger: 0.07,
    ease: 'power2.inOut'
  })
}

  const handleHamburgerClick = () => {
    if (!menuOpen) {
      animateHamburgerOpen()
      setMenuOpen(true)
    } else {
      setIsAnimating(true)
      animateHamburgerClose()

      setTimeout(() => {
        setMenuOpen(false)
        setIsAnimating(false)
      }, 300)
    }
  }

  const handleLinkClick = () => {
    animateHamburgerClose();
    setMenuOpen(false);
  }

  // CHECK if pathname is:
  useEffect(() => {
    if (location.pathname.includes('o-sneni') && window.innerWidth >= 1200) {
      navRef.current.style.backgroundColor = '#1e3b04';
    } else {
      navRef.current.style.backgroundColor = 'inherit';
    }
  }, [location.pathname]);

  // Home on scroll add navbar bg for visibility
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 570);
    };

    window.addEventListener('scroll', handleScroll);

    // Call it once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <ul>
          <div className='nav-image-wrapper'>
            <Link to={'/'}><img src={logo} width={100}/></Link>
          </div>
          {window.innerWidth <= 1200 && (
          <button className="hamburger" onClick={handleHamburgerClick} disabled={isAnimating} style={{ color: menuOpen ? '#FFFAFA' : '#000' }}>
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        )}
          <div className={`nav-links ${menuOpen ? 'open' : isAnimating ? 'closing' : ''}`}>
              <li className={isHome ? 'hidden-text' : ''}><Link to={'/'}className='hover-link hover-link-left' onClick={handleLinkClick} >domů</Link></li>
              <li className={isAbout ? 'hidden-text' : ''}><Link to={'/o-sneni'}>o snění</Link></li>
              <li className={isByliny ? 'hidden-text' : ''}><Link to={'/byliny'}>byliny a Bachovy esence</Link></li>
              <li className={isApoteka ? 'hidden-text' : ''}><Link to={'/apoteka'}>bylinná apotéka</Link></li>
              <li><Link to={'/home'}>služby</Link></li>
              <li><Link to={'/home'}>o mně</Link></li>
              <li><Link to={'/home'}>kontakt</Link></li>
            </div>
        </ul>
    </nav>
  )
}

export default Nav