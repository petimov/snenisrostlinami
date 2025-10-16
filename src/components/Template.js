import { useLocation } from 'react-router-dom';
import '../About.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import transition from '../assets/transition.webm'

export const animatePageIn = () => {
  const banner = document.getElementById('banner');

  const tl = gsap.timeline({});

  tl.fromTo(banner, {
    autoAlpha: 0,
  }, {autoAlpha:1, duration: 4.5}, 'state1')
  .fromTo(banner, {
    autoAlpha: 1,
  }, {autoAlpha:0}, 'state2')
}

export default function Template() {
  const location = useLocation();

  useEffect(() => {
    animatePageIn();
  }, [location.pathname]);

  return (
        <video id='banner' src={transition} autoPlay muted/>
  );
}