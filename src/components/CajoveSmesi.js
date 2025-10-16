import basket_img from '../assets/basket.jpeg'
import ShaderCanvas from './ShaderCanvas'
import gsap from 'gsap';
import { useRef } from 'react';
import prod1_img from '../assets/cyklus.jpg'
import { Link } from 'react-router-dom';

const CajoveSmesi = () => {
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
            <h2>Čajové směsi</h2>
            <p>Čajové směsi tvoří z většiny vlastnoručně sbírané a pěstované rostliny v čistých prostředí naší krajiny a zahrad podle bylinářských pravidel správného sběru a zpracování.</p>
            <p>S bylinami je zacházeno od živoucí rostliny po pečlivě usušenou a uskladněnou drogu s úctou, bdělým vědomím a Láskou, kterou ony samy poskytují.</p>
            <p>Díky tomu si byliny uchovávají svou jedinečnou esenci a výrobky z nich tak nesou nedocenitelnou přidanou hodnotu a vědomí samotného bylináře.</p>
            <p>Synergické čajové směsi jsou připraveny pro účely jednak terapeutické, jednak rituální či k běžnému popíjení bez cílené indikace.</p>
            </div>
             <div className='image'><img src={basket_img} ref={plane2} /></div>
        </div>
        <main className='products'>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Cyklus ženy</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Karmínová luna</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Srdce dělohy</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Moudrost zralé matky</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Nachlazení</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Tonikum duše</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Světlo v temnotě</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Tichá noc</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Esence růže</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Trávicí oheň</span>
            </Link>
            <Link to={'/cajove-smesi/cyklus-zeny'} className='product'>
              <img src={prod1_img}/>
              <span>Čistý pramen</span>
            </Link>
        </main>
        <ShaderCanvas />
    </div>
  )
}

export default CajoveSmesi