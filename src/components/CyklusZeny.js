import cyklus_img from '../assets/cyklus.jpg'
import ShaderCanvas from './ShaderCanvas'
import gsap from 'gsap';
import { useRef } from 'react';
import img1 from '../assets/cyklus1.jpeg'
import img2 from '../assets/cyklus2.jpeg'
import img3 from '../assets/cyklus3.jpeg'

const CyklusZeny = () => {
     const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const plane4 = useRef(null);
  const plane5 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.1;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce * 0.08}`, y: `-=${yForce * 0.08}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.1}`, y: `+=${yForce * 0.07}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.08}`, y: `-=${yForce * 0.08}`})
    gsap.set(plane4.current, {x: `+=${xForce * 0.1}`, y: `+=${yForce * 0.07}`})
    gsap.set(plane5.current, {x: `+=${xForce * 0.08}`, y: `-=${yForce * 0.08}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }
  return (
    <div className='cajove-smesi' onMouseMove={(e) => {manageMouseMove(e)}}>
        <div className='first-paint'>
            <div>
            <h2>Cyklus ženy</h2>
            <span>čajová směs</span>
            <p>Synergická bylinná čajová směs Cyklus ženy napomáhá ke zdravému pravidelnému menstruačnímu cyklu ženy. Je určena k užívání po dobu všech fází cyklu včetně menstruace. Čajová směs spolu s tinkturou Cyklická žena podpoří ženu zejména <strong>v době zvýšeného stresu</strong>, který se negativně odráží v jejím menstruačním cyklu. Lze ji užívat také jako prevenci a pro ukotvení zdraví lůna.</p>
            <p>Směs jemně podporuje a posiluje funkce dělohy a vaječníků, pomáhá k přirozené rovnováze a působení <strong>ženských pohlavních hormonů.</strong> Je prevencí a podporou pro zvládání projevů <strong>premenstruačního syndromu</strong> (mozková mlha, únava, těžkopádnost, otoky, zácpa, emoční rozladění) díky detoxikačním účinkům. Pomáhá harmonizovat <strong>nepravidelné menstruační krvácení</strong>, které není způsobeno onemocněním pohlavních orgánů, a <strong>snižovat bolest při nástupu menstruace</strong>. Podporuje návrat k přirozenému menstruačnímu cyklu po vysazení hormonální antikoncepce.</p>
            <p><strong>Složení:</strong> ostružiník maliník list, řebříček obecný nať, meduňka lékařská nať, kopřiva dvoudomá list, kontryhel obecný nať, růže historická</p>
            <p><strong>Doporučení:</strong> užívat alespoň po dobu tří cyklů spolu s řádně nastaveným životním stylem</p>
            <p>30 g</p>
            <p>Energetická výměna: 180</p>
            <span>Bylinná směs připravená z divokých, ručně sbíraných a pěstovaných rostlin.</span>
            </div>
             <div className='image'><img src={cyklus_img} ref={plane2} /></div>
        </div>
        <header>„Žena pluje svým životem v pravidelných rytmech jako se Měsíc proměňuje ve svých fázích od novu k úplňku. Rozpomenutí se na naši ženskou cykličnost a žití v jejím souladu nám přináší hluboké spojení s potřebami našeho těla i duše, a následování tak přirozeného zdraví a vitality.“</header>
        <section className='images'>
          <img src={img1} ref={plane1}/>
          <img src={img2} ref={plane2}/>
          <img src={img3} ref={plane3}/>
        </section>
        <ShaderCanvas />
    </div>
  )
}

export default CyklusZeny