import gsap from 'gsap'
import '../About.css'
import byliny1 from '../assets/byliny1.jpeg'
import byliny2 from '../assets/byliny2.jpeg'
import byliny3 from '../assets/byliny3.jpeg'
import byliny4 from '../assets/byliny4.jpeg'
import ShaderCanvas from './ShaderCanvas'
import { useRef } from 'react'

const Byliny = () => {
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
    <div className="about byliny" onMouseMove={(e) => {manageMouseMove(e)}}>
      {/* First */}
      <div className='first-paint'>
        <div>
          <h4>O léčivých rostlinách</h4>
          <p>Bylinářství je hluboce zakořeněnou praxí péče o zdraví lidí, kterou znají naši předkové po staletí i tisíciletí. My sami si z minulých vtělení neseme tuto moudrost používání léčivých rostlin a jejich nynějším vnímáním a používám se tak rozpomínáme na tyto přirozené dary. Byliny totiž nejsou jen alternativním směrem léčení, jsou tím ryzím/původním vycházejícím z přirozenosti života. </p>
        <p>Neskonalá moudrost rostlinné říše je tu s námi v každém okamžiku – na každý náš neduh si můžeme vybírat z mnoha léčivých rostlin. A to, jakou zvolíme, rozhoduje o úspěšnosti bylinné terapie u daného člověka. Byliny neléčí nemoci nebo diagnózy, ale samotného člověka, proto i téže nemoci často vyžadují trochu rozdílný přístup a použití rozličných rostlin. Individuálně použité rostliny tak často ve svém účinku nabízejí pomoc i tam, kam syntetická medicína nesehá  (“chronická” onemocnění).</p></div>
        <div className='image'><img src={byliny1} ref={plane3} /></div>
      </div>
      {/* second */}
      <div className='first-paint'>
        <div className='image'><img src={byliny2} ref={plane4} /></div>
        <div>
          <h4>Působení bylin</h4>
          <p>Bylinná terapie působí na mnohem hlubších úrovních než například léky. Pomáhá nejen se symptomy, jež doprovázejí nemoc, ale především pomáhají obnovovat samoléčebné procesy našeho těla. Účinky bylin tak zdaleka nespočívají jen v poměru jejich účinných látek (jež se často staly prekurzory syntetických léků), které obsahují. Komplexní účinky rostlin se proto popisují jako tzv. nespecifické – působí jemně, celostně, často pomaleji, zato s konečným výsledkem, a především na mnoha rovinách – fyzických a energetických. Podporují celkovou vitalitu organismu a posilují jeho schopnost obnovy přirozené rovnováhy.</p>
        <p>Často jejich působení necítíme hned, jejich síla se projevuje postupně a tkví v komplexnosti – byliny čistí, harmonizují, hojí, podporují, vyživují, drží a tzv. rozlévají své dobro. Nezaměřují se pouze na jeden orgán nebo problém, ale napomáhají celému tělesnému a duševnímu systému, aby si poradil s nemocí sám.</p></div>
      </div>
       {/* third */}
      <div className='first-paint'>
        <div>
          <h4>O léčivých rostlinách</h4>
          <p>Bylinářství je hluboce zakořeněnou praxí péče o zdraví lidí, kterou znají naši předkové po staletí i tisíciletí. My sami si z minulých vtělení neseme tuto moudrost používání léčivých rostlin a jejich nynějším vnímáním a používám se tak rozpomínáme na tyto přirozené dary. Byliny totiž nejsou jen alternativním směrem léčení, jsou tím ryzím/původním vycházejícím z přirozenosti života. </p>
        <p>Neskonalá moudrost rostlinné říše je tu s námi v každém okamžiku – na každý náš neduh si můžeme vybírat z mnoha léčivých rostlin. A to, jakou zvolíme, rozhoduje o úspěšnosti bylinné terapie u daného člověka. Byliny neléčí nemoci nebo diagnózy, ale samotného člověka, proto i téže nemoci často vyžadují trochu rozdílný přístup a použití rozličných rostlin. Individuálně použité rostliny tak často ve svém účinku nabízejí pomoc i tam, kam syntetická medicína nesehá  (“chronická” onemocnění).</p></div>
        <div className='image'><img src={byliny3} ref={plane3} /></div>
      </div>
      {/* fourth */}
      <div className='first-paint'>
        <div className='image'><img src={byliny4} ref={plane5}z /></div>
        <div>
          <p>Zvědomění si nenásledování své vlastní pravdy, potlačovaných emocí a prohřešků je prvním krokem kupředu léčení. Člověk totiž nemůže být léčen, je-li stále na téže energetické úrovni, na níž nemoc vznikla. Sama nemoc vznikala jistý čas, proto k sobě i k ní chovejme trpělivost a laskavost, jak se její slupky budou postupně odkrývat. Není výjimkou, že ozdravnému procesu často předchází zhoršení stavu jako taková zkouška, zda-li to skutečně se sebou a svým zdravím už myslíme vážně.</p>
        <p>Těšit se plnému zdraví, štěstí a spokojenosti není právem vyvolených, šťastlivců či výsledkem náhod, je to přirozená součást každého z nás, náš zdroj k manifestaci našich snů a jejich otiskování ve hmotě. Jediné, co na této cestě potřebujeme, je dávat prostor našim srdcím a následování intuice.</p>
        <p>A bylinářství je závazkem, který znamená navazovat a udržovat hluboký vztah jak s rostlinami, tak s lidmi – a to si žádá pokoru, čas, otevřenost, zkušenosti i neustálé vzdělávání.</p></div>
      </div>
              <ShaderCanvas />
    </div>
  )
}

export default Byliny