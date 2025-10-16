import { Link } from 'react-router-dom'
import cover_img from '../assets/cover.jpg'
import prod1_img from '../assets/prod1.jpg'
import prod2_img from '../assets/prod2.jpg'
import prod3_img from '../assets/prod3.jpg'
import prod4_img from '../assets/prod4.jpg'
import prod5_img from '../assets/prod5.jpg'
import prod6_img from '../assets/prod6.jpg'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import ShaderCanvas from './ShaderCanvas'
import { useRef } from 'react'
import gsap from 'gsap'

const Home = () => {

   const plane1 = useRef(null);
  const plane2 = useRef(null);
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
    <div className='home' onMouseMove={(e) => {manageMouseMove(e)}}>
        <section className='first-paint'>
          <img className='cover-img' src={cover_img}/>
        </section>
        <main className='products'>
            <Link to={'/cajove-smesi'} className='product'>
              <img src={prod1_img}/>
              <span>Čajové směsi</span>
            </Link>
            <Link to={'/cajove-smesi'} className='product'>
              <img src={prod2_img}/>
              <span>Bylinné kapky</span>
            </Link>
            <Link to={'/cajove-smesi'} className='product'>
              <img src={prod3_img}/>
              <span>Bylinné oleje</span>
            </Link>
            <Link to={'/cajove-smesi'} className='product'>
              <img src={prod4_img}/>
              <span>Pleťové balzámy</span>
            </Link>
            <Link to={'/cajove-smesi'} className='product'>
              <img src={prod5_img}/>
              <span>Bylinné masti</span>
            </Link>
             <Link to={'/cajove-smesi'} className='product'>
              <img src={prod5_img}/>
              <span>Gely, hydroláty, kapsle</span>
            </Link>
        </main>
        <section className='meetings'>
          <h1>Setkávání</h1>
          <p>Projekt Snění s rostlinami je nejenom o setkávání se s bylinami naší krajiny, ale především o propojování lidských bytostí.</p>
          <p>Jste srdečně zváni ke společnému setkávání u příležitostí <strong>oslav svátků kola roku, bylinných vycházek, workshopů a samotných přírodních rituálů Snění s rostlinami</strong>. </p>
          <p>Každé setkání může být vědomým zastavením, naladěním na rytmus krajiny, hlubokým praktickým i duchovním učením sloužícím k hlubšímu propojení se světem kolem nás a tichého hlasu naší duše.</p>
          <p><strong>Pro tvůrce:</strong> <br></br>Chcete se se mnou spojit a vytvořit společnou událost? <Link to={'/'}>Kontaktujte mě!</Link></p>
        </section>
        <section className='images'>
          <img src={img1} ref={plane1}/>
          <img src={img2} ref={plane2}/>
        </section>
        <section className='blog'>
          <h2>Blog</h2>
          <p>Volně psané texty věnované tématům zdraví, přírodního léčení, léčivých rostlin, Bachových esencí, přírodních rituálů, svátků kola roku
          a <strong>bylinných medicín iniciativy Snění s rostlinami</strong>.</p>
          <button>Články</button>
        </section>
        <ShaderCanvas />
    </div>
  )
}

export default Home