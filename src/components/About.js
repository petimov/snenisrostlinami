import gsap from 'gsap'
import '../About.css'
import about_img from '../assets/about.jpeg'
import about_img1 from '../assets/about1.jpeg'
import ShaderCanvas from './ShaderCanvas'
import { useRef } from 'react'

const About = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const plane4 = useRef(null);
  const plane5 = useRef(null);
  const plane6 = useRef(null);
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
    gsap.set(plane6.current, {x: `+=${xForce * 0.1}`, y: `+=${yForce * 0.07}`})

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
    <div className="about" onMouseMove={(e) => {manageMouseMove(e)}}>
      <div className='first-paint'>
        <div className='image'><img src={about_img} ref={plane1} /></div>
        <p> “Hej, vy úžasné zelené bytosti, <br/>

které rozprostíráte svůj plášť krásy, <br/>

po povrchu Matky Země! <br/>

Moje milé, toužím být v vámi, <br/>

abych cítila vaši přítomnost uvnitř i navenek, <br/>

aby mě pohltila vaše zeleň. <br/>

Nechte mě putovat vašimi buňkami, jako vy putujete mými. <br/>

Vítám vás uvnitř jako dar sebe sama <br/>

a zakouším naši Jednotu.”</p>
      </div>
      
      <div className='first-paint'>
        <div className='image'><img src={about_img1} ref={plane2} /></div>
        <div>
          <h4>rozpomenutí si na náš posvátný vztah s rostlinami</h4>
          <p><strong>Rostlinná říše představuje nekonečný posvátný zdroj moudrosti, výživy a léčení samotné Matky Země.</strong> Ačkoliv je nám vývojově podřízená, bez její existence by nebylo té naší. Říše rostlin zde žije se srdcem překypujícím štědrostí a Láskou a v každém jednom okamžiku je tu pro nás zdrojem. <strong>Rostliny jsou bytosti taktéž obdařené vědomím svého ducha</strong> a každá rostlina tak nese nejenom úžasný soubor svých metabolitů – pro nás účinných látek, ale hlavně jedinečnou esenci, na níž se můžeme naladit, a příjimat tyto dary do svých úrovních existence – fyzických i jemněhmotných těl.</p>
        <p><strong>Narozdíl od nás rostliny nemají potíž zůstávat v božském napojení na Zdroj a žít tak svou jedinečnost.</strong> Ze svých uzavřených srdcí a stereotypů života často rostliny nevnímáme jako vědomé bytosti, kterými však bezesporu jsou. Přitom dar rostlinné kúry, ať už v jakkékoliv formě (viz níže) je zde přístupný každému, kdo rostliny nejenom vidí zrakem, ale především je zří svým otevřeným srdcem, vděčností a úctou. Rostliny nám nabízejí niterné, posilující propojení se vším živým – tak můžeme zakoušet pocit Jednoty, z níž jsme stvořeni a kam se také vždy zase zpět vracíme.</p></div>
      </div>
      {/* THIRD*/}
      <div className='first-paint'>
        <div>
          <div>
            <div>
            <h4>O kontaktu s rostlinou</h4>
            <p>Sněním s rostlinou se rozumí vědomé pobývání s rostlinou v jakékoliv její podobě. <strong>Jde o uctění rostliny a propojení se s ní za účelem uzdravení a probouzení našeho vědomí.</strong></p>
          <p>Přijímat dary rostliny můžeme v podobě fyzické až po nejjemněhmotnější podobu vůbec. </p>
          </div>
          {/* <div className='image'><img src={about_img1} /></div> */}
          </div>
          <div>
            <ul>
              <li>Fyzickou podobou Snění s rostlinou se rozumí <strong>užívání zpracovaných rostlinných těl</strong> v podobě nálevů, tinktur, vín, elixírů apod., nejlépe podle správné bylinářské praxe.</li>
              <li>Jemněhmotná podoba tkví v <strong>setkávání se s esencí (energií) rostliny</strong>, jež je energií vody a slunce zpracována do vibračních esencí a rostliny nám tak předávájí svůj duchovní aspekt (Bachovy květové esence). </li>
              <li>Snění s rostlinou je však i <strong>pobývání s ní v místě, kde roste</strong>, vnímáním jejích tvarů, habitu, barev, vůní, a komunikace s ní vedenou naší intuicí. Takové setkávání a vědomé pozorování by mělo předcházet samotnému sběru rostliny včetně sdělování záměru, jaký s ní máme.</li>
              <li>Sněním je i vlastní <strong>vizualizace rostliny</strong>, kterou v daný okamžik potřebujeme, ale nemůžeme se s ní osobně setkat. Tak například při těžkých bolavých emocích procházejících srdcem vlivem zklamání, ponížení, zesměšnění si můžeme představovat květy a kolce keřů hlohů či růže šípkové, jak nám srdíčko zacelují, nebo v křesle zubaře se můžeme vizualizací nořit do koberců prhy arniky, aby zákrok byl vnímám co nejméně bolestivý a jeho výsledek se dobře a rychle hojil.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* FOURTH */}
      <div className='first-paint'>
        <div className='image'><img src={about_img1} ref={plane3} /></div>
        <div>
          <h4>Snění s rostlinou</h4>
          <p>Snění je obecně vždy <strong>posvátný, plně vědomý okamžik propojení se s rostlinou, který otevírá brány do duchovních sfér a napomáhá tak rozvoji na všech úrovních</strong>, na nichž si to dovolíme či potřebujeme – na úrovni fyzické (fyzické léčení těla), emoční (navrácení se do pozitivního klidného prožívání života samotného), mentální (volba našich myšlenek) a duchovní (spojení se Zdrojem, prožitá Jednota). Rostliny nás mohou podpořit, posílit a uzdravit na všech těchto úrovních naší bytosti. Díky tomu se skrze Snění můžeme <strong>tzv. probudit</strong> do přirozenosti života (vyjít z otěží klamu vzniklých v nízkých vibracích úrovně vědomí), <strong>vzpomenout si, kdo skutečně jsme, a rozpomenout si na plán naší duše v této inkarnaci.</strong></p>
        <p>Rostlinám můžeme jejich dary oplácet tím, že je vnímáme, zříme okem i srdcem, slyšíme, pracujeme s nimi, pěstujeme je či rozšiřujeme jejich přirozená stanoviště v krajině, skrze sebe a své zkušenosti přinášíme jejich dar léčení ostatním bytostem, předáváme jejich učení dále a především s nimi navazujeme hluboké vztahy. Takovým vnímáním je využit <strong>plný potenciál rostlin a budován vztah</strong> nejenom k nim, ke krajině, samotné Matce Zemi, ale především k nám samotným rozvíjením vlastního soucitu, přirozenosti, sebelásky a sebeúcty.</p></div>
      </div>
      {/* FIFTH */}
      <div className='first-paint'>
        <div className='image'><img src={about_img1} ref={plane4} /></div>
        <div>
          <h4>Posvátné iniciační rituály </h4>
          <p>Spojování s rostlinami se od nepaměti děje skrze <strong>posvátné přírodní rituály</strong>, často k <strong>oslavě svátků kola roku Matky Země</strong>. Vedeným rituálem v kruhu podobně cítících bytostí či o samotě propojujeme fyzický a duchovní svět. Skrze rostlinu a samotný rituál se můžeme<strong> spojovat s naším vyšším já a povznést se tak do stavu rozšířeného vědomí</strong>. Během rituálu můžeme zakusit život tak, jak ho za normálního stavu vědomí běžně neprociťujeme. To přináší příliv blahodárné energie a pomáhá si rozpomenout, <strong>kým skutečně jsme a jaké jsou naše niterné upřímné touhy</strong>. Obřad i rostlina nám zprostředkovávají sebepoznání, nové vize, přináší léčení těla, duše či vztahů či pouze přináší hluboké spočinutí od každodennosti života a naladění na jeho jemnější frekvence. Tyto aktivity mohou také budovat hlubší a dlouhodobý vztah s rostlinam, a masivně tak rozvíjet naši intuici, schopnosti a moudrost v životě.</p>
        <p>Obřady slouží nejen jejich účastníkům a jejich vědomí, slouží navíc i celému kolektivnímu vědomí, jež pozvedá, léčí a umožňuje přijímat navyšující se kmitočty Země – transformace vědomí lidstva.</p></div>
      </div>
      {/* Sixth */}
      <div className='first-paint'>
        <div className='image'><img src={about_img1} ref={plane5} /></div>
        <div>
          <h4>Vztah ke krajině</h4>
          <p>Žití ve vztahu s rostlinami posiluje náš vztah ke krajině samotné. <strong>Rostlinná říše nám totiž periodicky, jak se posvátné kolo roku otáčí, nabízí možnost naladit se na rytmus krajiny Země</strong> a vzpomenout si, že v každém okamžiku celého roku jsme jejím odrazem (na těle i na duši).</p>
        <p>Naše pokusy života v souladu s krajinou nás navrací do <strong>jednoduchosti a přirozenosti, pokojného a smysluplného vnímání sebe sama a našich potřeb podle sezón</strong>. Krajina tím, jak se manifestuje skrze všechny své živly počas celého roku, nás učí, kdy zrychlit či naopak zpomalit, čím se vyživovat, uvědomovat si své emoce a jak se starat o své tělo.</p>
        <p>Jsme nedílnou součástí Země a naše umělé vydělování se nám i Zemi přináší utrpení na mnoha úrovních (utrpení ekosystémů, nemoci, deprese). Naopak zpětné naladění na tuto přirozenost a žití v krajině nás <strong>spojuje s přirozenými hodnotami lidského života</strong> jako štěstí, plné zdraví, pokoj a vnitřní soulad.</p></div>
      </div>
              <ShaderCanvas />
    </div>
  )
}

export default About